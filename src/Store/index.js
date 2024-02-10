// store.js
import { configureStore } from '@reduxjs/toolkit';
import userToken from './slice/userToken';

const store = configureStore({
  reducer: {
    auth: userToken,
  },
});

export default store;
