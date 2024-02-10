import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useState , useEffect } from "react";
import {makeUnauthenticatedPOSTRequest} from '../Helper/ServerHelper'
import { endPoint } from "../Helper/Apis";
import { useNavigate } from "react-router-dom";
import  {setToken } from "../Store/slice/userToken"
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import store from "../Store/index"
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
      const isLogin = localStorage.getItem("token");

    const [password,setPassword] = useState("");
    const form = {
      email:email,
      password:password
    }

  const loginHandler = async (e) => {
    e.preventDefault();
      const toastId = toast.loading("Loading...");
         try {
      const response = await makeUnauthenticatedPOSTRequest(endPoint.LOGIC_API,form);
      console.log(response);
      dispatch(setToken(response.data.token))

      if(response.status === 201){
        toast.success("Successfully Login");
        navigate('/')
      }
      else{
          toast.error("Invelide Data")
      }
    }catch (error) {
          console.log(error);
        }
        toast.dismiss(toastId);
   }
   const googleAuth = async () => {
    window.open(`http://localhost:4000/auth/google/callback`,"_self")
  }
  return (
    <>
    <Navbar/>
    <section className="flex flex-col md:flex-row h-[100vh] border-4 items-center">
  <div className="bg-white hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <div className='flex  flex-col h-full justify-center pl-[30px] -pt-[30px]'>
        <div className="text-black text-[80px] font-mono font-black leading-[100px] p-[18px] pt-[78px]">Learn new <br/> languages with <br/> Beyond Excellence  </div>
        <p className='text-[#544837] p-[18px] text-[20px]'>Lorem Ipsum Dolar Sit Amet Lorem Ipsum Dolar Sit Amet!</p>
    </div>
  </div>
  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
    <div className="w-full h-100 rounded-xl bg-[#CAF0F1] px-[44px] py-[18px]">
      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 mb-12">Log In To Your Account</h1>
      <button type="button" onClick={googleAuth} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center  flex-row justify-center">
             <FcGoogle size={"30px"}/> 
            <span className="ml-4">
          Log in with Google</span>
            </div>
          </button>
      <form onSubmit={loginHandler} className="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  required />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input  onChange={(e)=>{setPassword(e.target.value)}}  type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>
        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>
        <button className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>
      
      <p className="mt-8">Need an account? <Link to="/signin" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</Link></p>
    </div>
  </div>
</section>
    </>
  ) 
}

export default Login