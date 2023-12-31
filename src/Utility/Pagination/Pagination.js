import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
const Pagination = ({ pageCount, paginationSelected }) => {
    const handlePageClick = (data) => {
        paginationSelected(data.selected + 1)
    };

    return (
        <div dir='ltr' className='py-4'>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<FontAwesomeIcon icon={faAnglesRight} />}
                onPageChange={handlePageClick}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faAnglesLeft} />}
                containerClassName={"pagination justify-content-center flex-wrap p-0 m-0"}
                pageClassNam={"page-item"}
                pageLinkClassName={"page-link "}
                nextLinkClassName={"page-link nextLink "}
                previousLinkClassName={"page-link nextLink  "}
                nextClassName={"page-item text-center  "}
                previousClassName={"page-item text-center "}
                breakClassName={"page-item "}
                breakLinkClassName={"page-link break-link"}
                activeLinkClassName={"active a"}

            />
        </div>
    )
}

export default Pagination