import { createSlice } from '@reduxjs/toolkit';

export const selectSlice = createSlice({
  name: 'select',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item !== action.payload);
    },
    clear: (state) => {
      state.value = [];
    },
  },
});

export const { add, remove, clear } = selectSlice.actions;

export default selectSlice.reducer;
