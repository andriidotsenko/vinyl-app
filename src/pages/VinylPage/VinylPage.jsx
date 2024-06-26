import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Loader } from "../../components/Loader/Loader.jsx";
import ModalVinyl from "../../components/ModalVinyl/ModalVinyl.jsx";

import { useVinylById } from "../../hooks/useVinylById";
import { useCollectionNotesContext } from "../../hooks/context/useCollectonNotesContext.js";
import { useCollectionContext } from "../../hooks/context/useCollectionContext.js";
import { useFavoritesContext } from "../../hooks/context/useFavoriteContext.js";
import { memo } from "react";

function VinylPage() {
  const { vinylId } = useParams();

  const { favoritesList, handleFavoritesToggle } = useFavoritesContext();

  const { collectionList, toggleCollection } = useCollectionContext();

  const { changeNote, noteList } = useCollectionNotesContext();

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const { data, isLoading } = useVinylById(vinylId);

  if (isLoading) {
    return <Loader />;
  }

  const { id, title, artist, year, country, thumb_image } = data;

  const ogTitle = `${title} - ${artist}`;

  const ogDescription = `Vinyl release by ${artist} (${year}, ${country})`;
  const ogImageUrl = thumb_image;

  return (
    <>
      <Helmet>
        <title>{ogTitle}</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="music.album" />
      </Helmet>

      <main className="main">
        <div className="container">
          <ModalVinyl
            id={id}
            inCollection={collectionList.includes(data.id)}
            inFavorites={favoritesList.includes(data.id)}
            onFavoritesToggle={() => handleFavoritesToggle(data)}
            onCollectionToggle={toggleCollection}
            onClose={handleGoBack}
            variant={"secondary"}
            noteList={noteList}
            changeNote={changeNote}
          ></ModalVinyl>
        </div>
      </main>
    </>
  );
}

const MemoizedVinylPage = memo(VinylPage);
export default MemoizedVinylPage;
