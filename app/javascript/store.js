import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './redux/messageSlice';

const store = configureStore({
  reducer: {
    greeting: messageReducer,
  },
});

export default store;
