import { Outlet, useOutletContext } from "react-router-dom";
import { Header } from "../components/Header";

import { useVinylList } from "../hooks/useVinylList";
import { Helmet } from "react-helmet-async";

export const MainLayout = () => {
  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  const vinylList = useVinylList();

  return (
    <>
      <Helmet>
        <title>Vinyl App</title>
      </Helmet>
      <Header
        collectionSize={collection.length}
        wishlistSize={wishlist.length}
        vinylList={vinylList}
        type="search"
      />
      <Outlet
        context={{ collection, wishlist, toggleCollection, toggleWishlist }}
      />
    </>
  );
};
