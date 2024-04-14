import { Helmet } from "react-helmet-async";
import { useVinylById } from "../../hooks/useVinylById";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader.jsx";
import ModalVinyl from "../../components/ModalVinyl/ModalVinyl.jsx";

export function VinylPage() {
  const { vinylId } = useParams();
  const {
    collectionList,
    favoritesList,
    handleCollectionToggle,
    handleFavoritesToggle,
    noteList,
    addNote,
  } = useOutletContext();
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
            inCollection={collectionList.includes(id)}
            inFavorites={favoritesList.includes(id)}
            onFavoritesToggle={() => handleFavoritesToggle(data)}
            onCollectionToggle={() => handleCollectionToggle(data)}
            onClose={handleGoBack}
            variant={"secondary"}
            noteList={noteList}
            addNote={addNote}
          ></ModalVinyl>
        </div>
      </main>
    </>
  );
}
