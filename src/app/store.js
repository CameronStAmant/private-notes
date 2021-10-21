import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/counter/navigationSlice';
import selectReducer from '../features/counter/selectSlice';

export default configureStore({
  reducer: {
    nav: navigationReducer,
    selected: selectReducer,
  },
});
