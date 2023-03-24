import { createSlice } from "@reduxjs/toolkit";
import { BooksState } from "../../../types/book";

const initialState: BooksState = {
  search: "",
  maxResults: 8
}

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    changeMaxResults(state, action) {
      state.maxResults = action.payload;
    }
  }
});

export default booksSlice.reducer;