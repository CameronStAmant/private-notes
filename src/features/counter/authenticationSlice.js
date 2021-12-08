import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    value: false,
  },
  reducers: {
    viewable: (state) => {
      state.value === false ? (state.value = true) : (state.value = false);
    },
  },
});

export const { auth } = authenticationSlice.actions;

export default authenticationSlice.reducer;
