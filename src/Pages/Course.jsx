import { useEffect ,useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Sections/Footer'
import { makeUnauthenticatedGETRequest } from '../Helper/ServerHelper'
import { endPoint } from '../Helper/Apis'
import { Link } from 'react-router-dom'
import CourseCard from '../Components/CourseCard'
import CourseDetails from './CourseDetails'
const Course = () => {
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

    useEffect(() => {
      getAllCourse();
    }, [])
  return (
    <>
    <Navbar/>
    <div className="w-screen h-auto px-[10px]  xl:px-[80px]  xl:py-[40px]">
        <h1 className='sm:text-[90px] text-[50px] xl:text-[128px] sm:text-black lg:text-theme-200 xl:text-theme-200 xl:leading-[100px]  font-bold text-center'>Beyond <br/>
Excellence</h1>
<p className='sm:text-[17px] xl:text-[20px] px-[30px] pt-[20px] xl:pt-[50px] text-[#adadad]'>Unlock a world of linguistic excellence from the comfort of your home with our dynamic online language courses – master new languages effortlessly and embark on a journey of global communication and cultural discovery</p>
    </div>

    <div className="w-screen h-auto px-[80px] py-[40px]">
        <p className=" text-black  sm:text-[40px] xl:text-[64px] text-left pb-[40px] " >Course</p>
        {/* <div className="w-[100%] gap-y-[40px] xl:gap-y-[100px] m-0 p-0 gap-4 xl:gap-10 grid grid-flow-row sm:grid-cols-2 grid-cols-1 xl:grid-cols-4">
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
                    </div>
                    <div className="flex justify-between space-x-2">
                        <a className="font-medium text-[15px] xl:text-[24px] inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-black hover:underline focus:outline-none focus-visible:ring-2" href="#0">&#8377;{item.price}</a>
                        <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-theme-200 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white">
                            <Link to={`/courses/${item._id}`} >Explore</Link></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            </>)}
    
        </div> */}
        <div className='flex justify-between space-x-5'>

        <CourseCard/>
        {/* <CourseCard/>
        <CourseCard/>
        <CourseCard/> */}

        
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Course