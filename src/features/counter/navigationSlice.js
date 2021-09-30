import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    value: false,
  },
  reducers: {
    viewable: (state) => {
      state.value === false ? (state.value = true) : (state.value = false);
    },
  },
});

export const { viewable } = navigationSlice.actions;

export default navigationSlice.reducer;
