import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = state.books.concat(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book !== action.payload);
    },
  },
});

module.exports = booksSlice.reducer;
module.exports.booksActions = booksSlice.actions;
