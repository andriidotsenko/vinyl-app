import { clsx } from "clsx";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";
import ArrowUpIcon from "../Icon/ArrowUpIcon";
import EllipsisIcon from "../Icon/EllipsisIcon";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const ellipsis = <EllipsisIcon />;
  const renderPaginationItems = () => {
    const paginationItems = [];

    const showPrev = currentPage > 1;
    const showNext = currentPage < totalPages;

    if (showPrev) {
      paginationItems.push(
        <button
          key="prev"
          className={clsx(styles.prev, styles.item, {
            [styles.disabled]: currentPage === 1,
          })}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowUpIcon />
        </button>
      );
    }

    // Render ellipsis if there's a gap between first page and current page
    if (showPrev && currentPage > 3) {
      paginationItems.push(<span key="prevEllipsis">{ellipsis}</span>);
    }

    for (let i = Math.max(1, currentPage - 2); i < currentPage; i++) {
      paginationItems.push(
        <button key={i} className={styles.item} onClick={() => onPageChange(i)}>
          {i}
        </button>
      );
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

    // Render ellipsis if there's a gap between current page and last page
    if (showNext && currentPage < totalPages - 2) {
      paginationItems.push(<span key="nextEllipsis">{ellipsis}</span>);
    }

    if (showNext) {
      paginationItems.push(
        <button
          key="next"
          className={clsx(styles.next, styles.item, {
            [styles.disabled]: currentPage === totalPages,
          })}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowUpIcon />
        </button>
      );
    }

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
