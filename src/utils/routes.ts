import Book from "../pages/Book";
import Home from "../pages/Home";
import { HOME } from "./path";

export const routes = [
  {
    path: HOME,
    Component: Home
  },
  {
    path: `${HOME}/:id`,
    Component: Book
  }
]