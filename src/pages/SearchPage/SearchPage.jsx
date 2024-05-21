import GenreList from "../../components/GenreList/GenreList.jsx";
import { useNavigate } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/SearchForm.jsx";
import { getSearchParamsFromFilters } from "../../utils/filters";

import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { Loader } from "../../components/Loader/Loader.jsx";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const navigate = useNavigate();

  const handleFormSubmit = (filters) => {
    const params = getSearchParamsFromFilters(filters);

    navigate({
      pathname: "/results",
      search: params.toString(),
    });
  };

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <main className="main">
        <div className="container">
          <Suspense
            fallback={
              <div className={styles.wrapper}>
                <Loader />
              </div>
            }
          >
            <SearchForm onSubmit={handleFormSubmit} />
            <GenreList />
          </Suspense>
        </div>
      </main>
    </>
  );
}
