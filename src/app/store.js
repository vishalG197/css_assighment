import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import imgReducer from '../features/cart/imgSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    img:imgReducer
  },
});
