import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import "./Pagination.css";
function Pagination({ data, setCurrentItems }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 18;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num link"
        previousLinkClassName="page-num link"
        nextLinkClassName="page-num link"
        activeLinkClassName="active"
        activeClassName="active"
        pageLinkClassName="link"
      />
    </>
  );
}
export default Pagination;
