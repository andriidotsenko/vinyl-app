import { clsx } from "clsx";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";
import ArrowUpIcon from "../Icon/ArrowUpIcon";
import EllipsisIcon from "../Icon/EllipsisIcon";

function PaginationButton({ onClick, children, className, disabled }) {
  return (
    <button
      className={clsx(styles.item, className, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

PaginationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

function EllipsisButton() {
  return (
    <span>
      <EllipsisIcon />
    </span>
  );
}

function ArrowButton({ onClick, direction, disabled }) {
  return (
    <button
      className={clsx(styles[direction], styles.item, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowUpIcon />
    </button>
  );
}

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(["prev", "next"]).isRequired,
  disabled: PropTypes.bool,
};

function Pagination({ totalPages, currentPage, onPageChange }) {
  const renderPaginationItems = () => {
    const paginationItems = [];

    const showPrev = currentPage > 1;
    const showNext = currentPage < totalPages;

    if (showPrev) {
      paginationItems.push(
        <ArrowButton
          key="prev"
          direction="prev"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
      );
    }

    if (showPrev && currentPage > 3) {
      paginationItems.push(<EllipsisButton key="prevEllipsis" />);
    }

    for (let i = Math.max(1, currentPage - 2); i < currentPage; i++) {
      paginationItems.push(
        <PaginationButton key={i} onClick={() => onPageChange(i)}>
          {i}
        </PaginationButton>
      );
    }

    paginationItems.push(
      <PaginationButton
        key={currentPage}
        className={styles.active}
        onClick={() => onPageChange(currentPage)}
      >
        {currentPage}
      </PaginationButton>
    );

    for (
      let i = currentPage + 1;
      i <= Math.min(currentPage + 2, totalPages);
      i++
    ) {
      paginationItems.push(
        <PaginationButton key={i} onClick={() => onPageChange(i)}>
          {i}
        </PaginationButton>
      );
    }

    if (showNext && currentPage < totalPages - 2) {
      paginationItems.push(<EllipsisButton key="nextEllipsis" />);
    }

    if (showNext) {
      paginationItems.push(
        <ArrowButton
          key="next"
          direction="next"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      );
    }

    return paginationItems;
  };

  return (
    <div className={styles.pagination} id="pagination">
      {renderPaginationItems()}
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
