import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { BookApi } from "./services/BookService";
import booksReducer from "./reducers/books/booksSlice";

const rootReducer = combineReducers({
  books: booksReducer,
  [BookApi.reducerPath]: BookApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([BookApi.middleware])
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];