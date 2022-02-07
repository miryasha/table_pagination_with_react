import React from 'react';
import { usePagination, DOTS } from '../usePagination';
import './Pagination .css'


const styleActive = "red"


const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className="pagination"
    >
      <li
        className="previous"
        onClick={onPrevious}
      >&laquo;
        <div className="arrowLeft" />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={pageNumber}
            //className={{ backgroundColor : "red" }}
            //style={pageNumber  ? { backgroundColor : "red" }: { backgroundColor : "yellow" }}
            //style={className  ? { backgroundColor : "red" }: { backgroundColor : "yellow" }}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className="onNext"
        onClick={onNext}
      >&raquo;
        <div className="arrowRight" />
      </li>
    </ul>
  );
};

export default Pagination;
