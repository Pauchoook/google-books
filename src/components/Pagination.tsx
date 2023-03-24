import React from "react";
import ReactPaginate from "react-paginate";

interface IPagination {
  countItems: number;
  pageItems: number; // кол-во элементов на странице
  handlerPage: (num: number) => void;
}

const Pagination: React.FC<IPagination> = ({ countItems, pageItems, handlerPage }) => {
  const classesBtns = "block rounded w-8 h-8 text-center flex items-center justify-center border-blue-400 border-2 border-solid transition-colors hover:text-white hover:bg-blue-400";
  const pageCount = Math.ceil(countItems / pageItems);

  const handlePageClick = (selectedItem: { selected: number }) => {
    handlerPage(selectedItem.selected * pageItems);
  };

  return (
    <div>
      <ReactPaginate
        pageLinkClassName={classesBtns}
        breakLabel="..."
        nextLabel=">"
        className="flex gap-5 justify-end"
        activeClassName="rounded text-white bg-blue-400"
        onPageChange={handlePageClick}
        previousLinkClassName={classesBtns}
        nextLinkClassName={classesBtns}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        marginPagesDisplayed={1} // кол-во страниц после "..."
        renderOnZeroPageCount={undefined}
      />
    </div>
  );
};

export default Pagination;
