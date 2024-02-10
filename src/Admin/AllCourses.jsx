import { useEffect ,useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { makeAuthenticatedDELETERequest, makeUnauthenticatedGETRequest } from '../Helper/ServerHelper'
import { endPoint } from '../Helper/Apis'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
const AllCourses = () => {
        const navigate = useNavigate();
    const token = localStorage.getItem("token")
      const [data,setData] = useState([])

      

    const getAllCourse = async () => {
        try {
            const response = await makeUnauthenticatedGETRequest(endPoint.ALLCOURSE_API);
            if(response.status === 200){
                setData(response.data.course)
            }
        } catch (error) {
            console.log(error);       
        }
    }
const deleteCourse = async (id) => {
    const route = `http://localhost:4000/admin/course/delete/${id}`
    const response = await makeAuthenticatedDELETERequest(token, route)

    if(response.status === 201){
         window.location.reload();
    }
    console.log("25",response);
    

}
    useEffect(() => {
      getAllCourse();
    }, [])
    console.log(data);
  return (
    <>
     <div className="w-screen h-auto px-[80px] py-[40px]">
        <p className=" text-black  sm:text-[40px] xl:text-[64px] text-left pb-[40px] " >Course</p>
        <div className="w-[100%] gap-y-[40px] xl:gap-y-[100px] m-0 p-0 gap-4 xl:gap-10 grid grid-flow-row sm:grid-cols-2 grid-cols-1 xl:grid-cols-4">
            {data.map(item => <>
               <section className="flex xl:flex-col justify-center  antialiased bg-gray-50 text-gray-600  p-0">
    <div className="h-auto">
        <div className="max-w-xs mx-auto">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                    <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                        <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={`${item.images}`} width="320" height="180" alt="Course" />
                    </figure>
                </a>
                <div className="flex-grow flex flex-col p-5">
                    <div className="flex-grow">
                        <header className="mb-3">
                            <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">{item.title.split(/\s+/).slice(0, 4).join(" ")}...</h3>
                            </a>
                        </header>
                        <div className="mb-8">
                            <p>{item.description.split(/\s+/).slice(0, 7).join(" ")}...</p>
                        </div>
                        <div className="mb-8">
                        <a className="font-medium text-[15px] xl:text-[24px] inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-black hover:underline focus:outline-none focus-visible:ring-2" href="#0">&#8377;{item.price}</a>
                        </div>

                    </div>
                    <div className="flex justify-start space-x-2">

                        {/* <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-theme-200 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white">
                        <MdEdit /> 
                        </a> */}
                        <a onClick={()=>deleteCourse(item._id)} className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-theme-200 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white">
                        <FaTrash /> 
                        </a>
                        <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-theme-200 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white">
                            <Link to={`/courses/${item._id}`} >Explore</Link>
                        </a>
                        </div>
                        <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            </>)}
    
        </div>
    </div>
    
    </>
  )
}

export default AllCourses