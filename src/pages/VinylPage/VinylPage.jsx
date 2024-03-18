import { Helmet } from "react-helmet-async";
import VinylCard from "../../components/VinylCard/VinylCard";
import { useVinylById } from "../../hooks/useVinylById";
import { useOutletContext, useParams } from "react-router-dom";

export function VinylPage() {
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
  } = useOutletContext();
  const { vinylId } = useParams();
  const card = useVinylById(Number(vinylId));

  const ogTitle = card ? `${card.name} - ${card.artist}` : "Vinyl Page";
  const ogDescription = card ? card.description : "Description for Vinyl Page";
  const ogImageUrl = card ? card.imageUrl : "/default-image.jpg";

  return (
    <>
      <Helmet>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="website" />
        <title>{ogTitle}</title>
      </Helmet>

      <VinylCard
        card={card}
        inCollection={collectionList.includes(card.id)}
        inFavorites={favoritesList.includes(card.id)}
        onClickInCollection={() => handleCollectionToggle(card.id)}
        onClickInFavorites={() => handleFavoritesToggle(card.id)}
      />
    </>
  );
}
