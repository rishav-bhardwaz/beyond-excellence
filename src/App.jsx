import { useState , useEffect } from 'react'
import {useSelector } from "react-redux"
import { useDispatch  } from 'react-redux';
import './App.css'

import Router from './Routes/Router';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { setToken , setSession , cleanSession  } from './Store/slice/userToken';
  import axios from "axios"
function App() {
  const dispatch = useDispatch();
// YourComponent.js
const [data,setData] = useState({})
  const getUser = async() => {
    try {
      const res = await axios.get("http://localhost:4000/login/success",{withCredentials:true},)
      setData(res.data.user);
      dispatch(setToken(res.data.token));   

    } catch (error) {
        console.log("Error: "+ error);     
    }
}
Object?.keys(data)?.length > 0 ? dispatch(setSession()):dispatch(cleanSession());

useEffect(() => {
    getUser();
  },[])
  return (
 <>

 <Router/>

 <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/> 
 </>
  )
}

export default App

