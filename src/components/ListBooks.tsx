import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../types/book";
import classes from "./Style.module.css";

interface ListBooksProps {
  books: IBook[];
}

const ListBooks: React.FC<ListBooksProps> = ({ books }) => {
  return (
    <div className="max-[1535px]:gap-10 grid grid-cols-4 gap-20 mb-5">
      {books &&
        books.map((book) => (
          <Link to={`/${book.id}`} key={book.id} className="block col-span-1 p-2 bg-violet-200 rounded">
            <div className="h-52 mb-4 flex justify-center items-center">
              {book.volumeInfo.imageLinks?.smallThumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  className="w-auto h-full shadow-xl"
                />
              ) : (
                <span className="block text-lg">Изображение отсутствует</span>
              )}
            </div>
            <span className="inline-block text-sm text-stone-500 underline cursor-pointer mb-3 hover:no-underline">
              {book.volumeInfo.categories}
            </span>
            <h3 className={classes.textOverflow + " " + "text-xl min-h-84 font-bold mb-3"}>{book.volumeInfo.title}</h3>
            {book.volumeInfo.authors
            ?
            <span className="inline-block text-base text-stone-500 hover:underline">{book.volumeInfo.authors[0]}</span>
            :
            <span className="inline-block text-base text-stone-500">Автор неизвестен</span>
            }
          </Link>
        ))}
    </div>
  );
};

export default ListBooks;
