import { configureStore } from '@reduxjs/toolkit';
import { drumReducer } from './drum/drumSlice';

export const store = configureStore({
  reducer: {
    drum: drumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
