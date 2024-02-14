import React, { useState, memo } from 'react';
import ReactPaginate from 'react-paginate';
import '../Pagination/pagination.css'

export default memo(function Pagination() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;
    const pageCount = 4


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const getDataForPage = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
        return data.slice(startIndex, endIndex);
    };

    return (
        <div>
            <ul className='flex'>
                {getDataForPage().map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </ul>
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
})