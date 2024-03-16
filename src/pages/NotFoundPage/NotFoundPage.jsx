import { Helmet } from "react-helmet-async";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{"404 - Not Found"}</title>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.description}>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link className={styles.link} to="/">
          go Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
