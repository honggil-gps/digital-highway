import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [currentSet, setCurrentSet] = useState(0);
  const pagesPerSet = 10;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    if (currentPage % pagesPerSet === 0 && currentSet < Math.floor(totalPosts / postsPerPage / pagesPerSet)) {
      setCurrentSet(currentSet + 1);
      paginate(currentSet * pagesPerSet + pagesPerSet + 1);
    } else {
      paginate(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage % pagesPerSet === 1 && currentSet > 0) {
      setCurrentSet(currentSet - 1);
      paginate((currentSet - 1) * pagesPerSet + pagesPerSet);
    } else {
      paginate(currentPage - 1);
    }
  };

  const currentStart = currentSet * pagesPerSet;
  const currentEnd = currentStart + pagesPerSet;

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            이전
          </button>
        </li>
        {pageNumbers.slice(currentStart, currentEnd).map(number => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
          >
            다음
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
