// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    setSession:(state,action) => {
        state.token = action.payload;
      localStorage.setItem('isLogin',true);
    },
    cleanSession:(state,action)=>{
      state.token = action.payload;
      localStorage.setItem('isLogin',false);
    },

    clearToken: () => {
      localStorage.removeItem('token');
    },
   
  },
});

export const { setToken, clearToken ,setSession , cleanSession } = authSlice.actions;

export default authSlice.reducer;
