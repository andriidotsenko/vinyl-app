import { clsx } from "clsx";
import PropTypes from "prop-types";
import styles from "./pagination.module.css";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const renderPaginationLinks = () => (
    <>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i + 1}
          className={clsx(styles.item, {
            [styles.active]: i + 1 === currentPage,
          })}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </>
  );

  return (
    <div className={styles.pagination} id="pagination">
      {renderPaginationLinks()}
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
