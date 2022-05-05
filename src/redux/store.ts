import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
import modalReducer from './index.ts';

export const store = configureStore({
  reducer: {
    isModalOpen: modalReducer,
  }
});
