import { Link } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../Helper/ServerHelper";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
const NavCourse =  ({course , data}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const coursesDetails = data.data.map(item => {
    const courseDetail = course.find(c => c._id === item.courseId);
    return courseDetail ? { courseId: item.courseId, ...courseDetail } : null;
});

const [url,setUrl] = useState("")
const useLinkClickHandler = async (id) => {
    try{
      let route = `http://localhost:4000/api/auth/Class/${id}`
      const Link = await makeAuthenticatedGETRequest(token,route);
      setUrl(Link.data)
       window.location.href = Link.data;
    }
      catch(err){
        alert('You are not authorized to access this page')
      }

}
const filterCourse = coursesDetails.filter(Boolean) ;

  return (
    <>
   
         <div className="w-screen h-auto px-[80px] py-[40px]">
        <p className=" text-black  sm:text-[40px] xl:text-[64px] text-left pb-[40px] " >Course</p>
        <div className="w-[100%] gap-y-[40px] xl:gap-y-[100px] m-0 p-0 gap-4 xl:gap-10 grid grid-flow-row sm:grid-cols-3 xl:grid-cols-4">
            {filterCourse.map(item => <>
               <section className="flex flex-col justify-center  antialiased bg-gray-50 text-gray-600  p-0">
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
                    </div>
                    <div className="flex justify-between space-x-2">
                        <a className="font-medium text-[15px] xl:text-[24px] inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-black hover:underline focus:outline-none focus-visible:ring-2" href="#0">&#8377;{item.price}</a>
                        <a onClick={()=>useLinkClickHandler(`${item._id}`)} className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-theme-200 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white">
                            Explore</a>
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

export default NavCourse
