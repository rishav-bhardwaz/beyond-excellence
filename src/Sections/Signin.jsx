import {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../Helper/ServerHelper';
import { endPoint } from '../Helper/Apis';
import {toast} from "react-toastify"
import {useNavigate} from 'react-router-dom'
const Signin = () => {
const navigate = useNavigate()
    const [data,setData] = useState({
        name:"",
        last:"",
        email:"",
        password:"",
        number:""
    })

    function changeHandler(event) {
    const { name, value } = event.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
     const googleAuth = async () => {
    window.open(`http://localhost:4000/auth/google/callback`,"_self")
  }
     const signinHandle = async (e)=>{
       e.preventDefault();
        const toastId = toast.loading("Loading...");
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('last', data.last);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('number', data.number);
        try{
          const res = await makeUnauthenticatedPOSTRequest(endPoint.REGISTER_API , data)
          if(res.status === 422){
            toast.error(res.data.message)
          }else{
            localStorage.setItem('token' , res.data.accessToken)
            navigate("/")

          }
      }catch(error){
        alert("Error Occured");
      }
      toast.dismiss(toastId);
      
      
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
      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-6 mb-6">Sign Up</h1>
      <button type="button" onClick={googleAuth} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center  flex-row justify-center">
             <FcGoogle size={"30px"}/> 
            <span className="ml-4">
          Sign in with Google</span>
            </div>
          </button>
      <form onSubmit={signinHandle} className="mt-2" action="#" method="POST">
         <div>
          <label className="block text-gray-700">Name</label>
          <input onChange={changeHandler} type="text" name="name"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  required />
        </div>
         <div>
          <label className="block text-gray-700">Last</label>
          <input onChange={changeHandler} type="text" name="last"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  required />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input onChange={changeHandler} type="email" name="email"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  required />
        </div>
        <div className="">
          <label className="block text-gray-700">Password</label>
          <input onChange={changeHandler}  type="password" name="password"  placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>
         <div>
          <label className="block text-gray-700">Mobile no.</label>
          <input onChange={changeHandler} type="text" name="number"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  required />
        </div>
        <button className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Sign In</button>
      </form>
      
      <p className="mt-8">Already Have Account? <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</Link></p>
    </div>
  </div>
</section>
    </>
  )
}

export default Signin