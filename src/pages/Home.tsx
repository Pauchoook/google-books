import React from "react";
import Button from "../components/Button";
import ListBooks from "../components/ListBooks";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../hooks/reducer";
import { booksSlice } from "../store/reducers/books/booksSlice";
import { BookApi } from "../store/services/BookService";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search, maxResults } = useAppSelector((state) => state.books);
  const { changeMaxResults } = booksSlice.actions;
  const { data: booksInfo, isLoading, isFetching } = BookApi.useFetchBooksQuery({ maxResults, search });

  const handlerLoadMore = () => {
    dispatch(changeMaxResults(maxResults + 8));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-12 px-10">
      <h1 className="text-3xl font-bold mb-3">Библиотека</h1>
      <span className="block text-basis font-semibold mb-6">{booksInfo?.totalItems} результатов</span>
      {booksInfo && <ListBooks books={booksInfo.items} />}
      {maxResults < 40 && (
        <Button
          onClick={handlerLoadMore}
          isLoading={isFetching}
          disabled={isFetching}
          className="ml-auto mr-auto"
          content="More..."
        />
      )}
    </div>
  );
};

export default Home;
