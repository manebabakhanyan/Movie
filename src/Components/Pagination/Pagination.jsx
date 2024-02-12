// import React, { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// export function Items({ currentItems }) {
//     return (
//         <>
//             {currentItems &&
//                 currentItems.map((item) => (
//                     <div key={item}>
//                         <h3>{item}</h3>
//                     </div>
//                 ))}
//         </>
//     );
// }

// export function PaginatedItems({ itemsPerPage }) {
//     const [itemOffset, setItemOffset] = useState(0);
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     const currentItems = items.slice(itemOffset, endOffset);
//     const pageCount = Math.ceil(items.length / itemsPerPage);

//     const handlePageClick = (event) => {
//         const newOffset = (event.selected * itemsPerPage) % items.length;
//         console.log(
//             `User requested page number ${event.selected}, which is offset ${newOffset}`
//         );
//         setItemOffset(newOffset);
//     };

//     return (
//         <>
//             <Items currentItems={currentItems} />
//             <ReactPaginate
//                 breakLabel="..."
//                 nextLabel="next >"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={5}
//                 pageCount={pageCount}
//                 previousLabel="< previous"
//                 renderOnZeroPageCount={null}
//             />
//         </>
//     );
// }




import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../Pagination/pagination.css'

function Pagination() {
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
                {getDataForPage().map(() => (
                    <div></div>
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
}

export default Pagination
