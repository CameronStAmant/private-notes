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
  },
});

export const { add } = selectSlice.actions;

export default selectSlice.reducer;
