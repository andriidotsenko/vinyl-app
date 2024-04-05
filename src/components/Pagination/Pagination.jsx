import { clsx } from "clsx";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const ellipsis = "...";
  const renderPaginationItems = () => {
    const paginationItems = [];

    const showPrevEllipsis = currentPage > 3;
    const showNextEllipsis = currentPage < totalPages - 2;

    paginationItems.push(
      <button
        key="prev"
        className={clsx(styles.item, {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    );

    if (showPrevEllipsis) {
      paginationItems.push(<span key="prevEllipsis">{ellipsis}</span>);
    }

    for (let i = currentPage - 2; i < currentPage; i++) {
      if (i >= 1) {
        paginationItems.push(
          <button
            key={i}
            className={styles.item}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    paginationItems.push(
      <button
        key={currentPage}
        className={clsx(styles.item, styles.active)}
        onClick={() => onPageChange(currentPage)}
      >
        {currentPage}
      </button>
    );

    for (
      let i = currentPage + 1;
      i <= Math.min(currentPage + 2, totalPages);
      i++
    ) {
      paginationItems.push(
        <button key={i} className={styles.item} onClick={() => onPageChange(i)}>
          {i}
        </button>
      );
    }

    if (showNextEllipsis) {
      paginationItems.push(<span key="nextEllipsis">{ellipsis}</span>);
    }

    paginationItems.push(
      <button
        key="next"
        className={clsx(styles.item, {
          [styles.disabled]: currentPage === totalPages,
        })}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    );

    return paginationItems;
  };

  return (
    <>
      <div className={styles.pagination} id="pagination">
        {renderPaginationItems()}
      </div>
    </>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
