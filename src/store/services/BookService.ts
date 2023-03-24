import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IBook } from '../../types/book';

interface ResFetchBooks {
  totalItems: number;
  items: IBook[];
}

export const BookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: (build) => ({
    fetchBooks: build.query<ResFetchBooks, {maxResults: number, search: string}>({
      query: ({search, maxResults}) => ({
        url: `/v1/volumes?q=${search}:keyes&startIndex=0&maxResults=${maxResults}&key=${process.env.REACT_APP_API_KEY}`
      })
    }),
    fetchBook: build.query<IBook, {id: string}>({
      query: ({id}) => ({
        url: `/v1/volumes/${id}?key=${process.env.REACT_APP_API_KEY}`
      })
    }),
  })
})