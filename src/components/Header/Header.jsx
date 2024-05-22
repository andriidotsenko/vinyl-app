import styles from "./Header.module.css";
import HeaderCountingButton from "../HeaderCountingButton/HeaderCountingButton.jsx";
import BackButton from "../BackButton/BackButton.jsx";
import InactiveFavoriteIcon from "../Icon/InactiveFavoriteIcon.jsx";
import CollectionIcon from "../Icon/CollectionIcon.jsx";

import { Link } from "react-router-dom";
import { useFavoritesContext } from "../../hooks/context/useFavoriteContext.js";
import { useCollectionContext } from "../../hooks/context/useCollectionContext.js";
import { memo } from "react";

function Header() {
  const { favoritesList } = useFavoritesContext();
  const favoriteCount = favoritesList.length;
  const { collectionList } = useCollectionContext();

  const collectionCount = collectionList.length;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.actions}>
            <BackButton buttonText={"Back"} />
            <Link className={styles.link} to={"/"}>
              Home
            </Link>
          </div>
          <div className={styles.actions}>
            <HeaderCountingButton
              count={favoriteCount}
              icon={<InactiveFavoriteIcon />}
            />
            <HeaderCountingButton
              count={collectionCount}
              icon={<CollectionIcon />}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

const MemoizedHeader = memo(Header);
export default MemoizedHeader;
