import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'under construction',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateStatus: (state) => {
      state.status = 'under construction';
    },
  },
});

module.exports = categoriesSlice.reducer;
module.exports.categoriesActions = categoriesSlice.actions;
