import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { BookApi } from "../store/services/BookService";

interface IUseParams {
  id: string | undefined;
}

const Book: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const { data: book, isLoading } = BookApi.useFetchBookQuery({ id });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-12 px-10">
      <Button onClick={() => navigate(-1)} content="Назад" />
      <div className="flex mt-8">
        {book?.volumeInfo.imageLinks.large ? (
          <img
            src={book.volumeInfo.imageLinks.large}
            alt={book.volumeInfo.title}
            className="w-80 h-96 object-contain"
          />
        ) : (
          <div className="w-80 h-36 flex justify-center items-center">
            <span>Изображение отстутствует</span>
          </div>
        )}
        <div className="ml-9">
          <h1 className="text-3xl font-bold mb-8">{book?.volumeInfo.title}</h1>
          <span className="block text-sm text-gray-400 mb-3">
            {book?.volumeInfo.categories ? book?.volumeInfo.categories.map((c) => c) : "Категории отсутствуют"}
          </span>
          <p className="p-2 rounded border-2 border-gray-300 border-solid max-w-2xl text-lg mb-3">
            {book?.volumeInfo.description || "Описание отсутствует"}
          </p>
          <ul>
            <li className="flex items-end mb-3">
              <h4 className="font-bold mr-2">Год публикации:</h4>
              <span className="text-sm text-gray-400 mr-1">{book?.volumeInfo.publishedDate}</span>
            </li>
            <li className="flex items-center mb-3">
              <h4 className="font-bold mr-2">Кол-во страниц</h4>
              <span className="text-sm text-gray-400 mr-1">{book?.volumeInfo.pageCount}</span>
            </li>
            <li className="flex items-center mb-3">
              <h4 className="font-bold mr-2">Автор(ы):</h4>
              <span className="text-sm text-gray-400 mr-1">{book?.volumeInfo.authors}</span>
            </li>
          </ul>
          <a
            href={book?.volumeInfo.previewLink}
            target="_blank"
            className="block text-center group rounded-2xl py-2 w-48 bg-blue-400 font-bold text-lg text-white relative overflow-hidden"
          >
            Узнать больше
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
