import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import '../Pagination/pagination.css'

export default function Pagination({ totalMovies, moviesPerPage, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(totalMovies / moviesPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        onPageChange(selected);
    };

    return (
        <div>
            <div>
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    previousLabel={'Back'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
}
