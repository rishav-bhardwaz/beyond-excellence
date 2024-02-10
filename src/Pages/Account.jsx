import  { useState } from 'react'
import { makeAuthenticatedPATCHRequest } from '../Helper/ServerHelper';
import {toast} from "react-toastify"
const Account = ({user}) => {
  const {name , last ,email,number ,_id} = user;
  const [data,setData] = useState({})
  const token = localStorage.getItem("token");

  const handler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name] :value
    })

  }

  const route = `http://localhost:4000/api/auth/user/update/${_id}`

  const handleSubmit = async (e)=> {
    e.preventDefault();

    try {
          const response = await makeAuthenticatedPATCHRequest(token ,route,data);

          if(response.status === 201){
            toast.success("Update Successfully Done")
          }else{
            toast.error("Can't Update")
          }
          console.log(response);
      
    } catch (error) {
      console.log('Error', error);
      
    }

  }
    console.log("<===>",_id);

  return (
    <>
 <div className="w-full">
     <h2 className="text-center text-blue-400 font-bold pt-12 text-2xl uppercase mb-10">Account</h2>
     <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form onSubmit={handleSubmit}>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Name</label>
           <input onChange={handler} type="text" id="name" name="name" placeholder="Put in your Name." defaultValue={name} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Last</label>
           <input onChange={handler} type="text" id="name" name="last" placeholder="Put in your Last." defaultValue={last} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600 ">Email</label>
           <input  type="text" id="name" name="email" placeholder="Put in your Email." value={email} readOnly className="cursor-no-drop border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>

         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Mobile No.</label>
           <input onChange={handler} type="text" id="number" name="name" placeholder="Put in your Mobile."defaultValue={number} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>

       

         <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Update</button>
       </form>
     </div>
   </div>
    </>
  )
}

export default Account