import { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Link  } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { makeUnauthenticatedGETRequest } from '../Helper/ServerHelper';
import { endPoint } from '../Helper/Apis';
import Testimonial from '../Sections/Testimonial';
import Footer from '../Sections/Footer';
import axios  from 'axios';
import CourseCard from '../Components/CourseCard';
import crs2 from '../../public/images/crs2.jpg';

const Urdu = () => {
      const { id } = useParams(); // Extract the ID from the URL parameters
      const navigate = useNavigate();
       const [data,setData] = useState([])
       const [image,setImage] = useState()
       const [course,setCourse] = useState([])
        const storedValue = localStorage.getItem('isLogin');
        let token = localStorage.getItem('token');
      
    const getAllCourse = async () => {
        try {
            const response = await makeUnauthenticatedGETRequest(endPoint.ALLCOURSE_API);
            if(response.status === 200){
                setCourse(response.data.course)
            }

        } catch (error) {
            console.log(error);       
        }
    }

    const getCourse = async (id) => {
        try {
    const response = await fetch(`http://localhost:4000/api/auth/course/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const formattedResponse = await response.json();
    const status = response.status;
    const datas = {data:formattedResponse,status:status}
    setData(datas?.data?.course);
    setImage(datas.data.course.images[0]);
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
    }

    const handleOpenRazorpay = (data) => {
        const options = {
            key :"rzp_test_w5tUZnIztEKoBO",
            amount:Number(data.amount),
            currency:data.currency,
            name:"Beyond Excellence",
            description: "Test Transaction",
            order_id: data.id,
             handler: function async (response){
                console.log(response);
                const body = {...response,}
               axios.post(`http://localhost:4000/verify/${id}`,body ,{
                 headers: {
    Authorization: `bearer ${token}`,
  },
               })
               .then((res)=>{
                console.log(res.data);
               })
            .catch()
            },
        }
        var rzp = new window.Razorpay(options);
        rzp.open()

    }
    const paymentHandler = async (amount) => {
        const _Data = {amount : amount }
        axios.post("http://localhost:4000/order",_Data)

        .then( res=>{
            handleOpenRazorpay(res.data.data)
        })
        .catch()
    }
 useEffect(() => {
      getCourse(id);
      getAllCourse();
    }, [id])
const loginPage = () => {
    navigate('/login');
}
 return (
    <>
    <Navbar/>
    <div className="header-container flex  w-screen flex-col-reverse gap-y-8 xl:gap-0  xl:py-[52px] xl:px-[70px] xl:flex-row-reverse">
    <div className="w-[90%] px-[20px] py-[0px] -mt-28 xl:mt-0 xl:py-0  xl:px-[70px]">
        <div className="text-[50px] leading-[55px] tracking-[0px] xl:text-[70px] xl:leading-[70px] mt-[80px] font-serif font-medium text-theme-200"> 
        Urdu Essentials</div>
<div className="w-[80vw] xl:w-[500px] ml-4 text-[16px] text-black"> Duration -<span className="w-[80vw] xl:w-[500px] ml-4 text-[15px] text-[#505050]">3 Months </span></div>
<div className="w-[80vw] xl:w-[500px] ml-4 text-[15px] xl:my-4 text-[#505050]">Begin your journey into the world of Urdu with our beginner-friendly course.
</div>

<div className="w-[80vw] xl:w-[500px] ml-4 text-[16px] text-black"> Price -<span className="w-[80vw] xl:w-[500px] ml-4 text-[15px] text-[#505050]">&#8377; 799 </span></div>

<div className="w-[90vw] xl:w-[400px] flex flex-row items-center justify-between pt-6">
    <button onClick={()=>{storedValue === 'true' ? paymentHandler(data.price) : loginPage()}} className='xl:py-[15px] xl:px-[48px] px-[30px] py-[10px] rounded-md bg-theme-200 text-white'>Try for free</button>
    <button className='xl:py-[15px] xl:px-[48px] px-[30px] py-[10px]  rounded-md text-theme-200 border-2 border-theme-200'>Buy Courses</button>
</div>
    </div>
    <div className=" w-[100%]">
        <img className='w-[100%] h-[100%]' src={crs2} alt="" />
    </div>
    </div>

{/* =========================================================Details Start ============================================= 
    <div className="w-screen h-auto px-[120px] py-[20px] ">
        <p className=" text-black  sm:text-[40px] xl:text-[50px] font-semibold text-center pb-[20px] " >Course Overview</p>
        <p className="   sm:text-[40px] xl:text-[15px] text-[#505050] mb-12" >{data.content}
            </p>
        <p className=" text-theme-200  sm:text-[20px] xl:text-[20px] font-semibold text-left pb-[20px] " >Key Highlight</p>
        <ul> 
            {data?.keypoint?.map((item,index)=>(
                                <li key={index}  className='text-[15px] text-[#505050] list-disc'>{item}</li>

            ))}


        </ul>

    </div>
     <div className="w-screen h-auto px-[120px]  py-[20px] ">
        <div></div>
       <div>
         <p className=" text-black  sm:text-[40px] xl:text-[50px] font-semibold text-center mb-4 " >Course Content</p>
        <div className='border-2 p-4 rounded-sm border-gray-400 '>

                {data?.week?.map((item,index)=>(
                    <>
                    <p key={index} className="   sm:text-[40px] xl:text-[23px] text-black mt-6" > Week  {index+1}: {item}</p>
                    <p className=" text-black pl-6 sm:text-[20px] xl:text-[18px] font-bold text-left  " >Class {index+1} {data?.classDetails[index]}</p>
                    <li className='text-[15px] text-[#505050] list-disc'>{data?.classkey[index]}</li>
                    </>
                ))}
         <ul className='pl-12'>
            <li className='text-[15px] text-[#505050] list-disc'>key points</li>
            <li className='text-[15px] text-[#505050] list-disc'>key points</li>
            <li className='text-[15px] text-[#505050] list-disc'>key points</li>
            <li className='text-[15px] text-[#505050] list-disc'>key points</li>
        </ul> 
         <div>
        </div>
 </div>
 </div>
    </div>


 =========================================================Details End ============================================= */}

     <div className="w-screen h-auto px-[80px] py-[40px]">
        <p className=" text-black  sm:text-[40px] xl:text-[64px] text-left pb-[40px] " >Course</p>
        {/* <div className="w-[100%] gap-y-[40px] xl:gap-y-[100px] m-0 p-0 gap-4 xl:gap-10 grid grid-flow-row sm:grid-cols-3 grid-cols-1 xl:grid-cols-4">
            {course.slice(-4).map(item => <>
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
                        <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-theme-200 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white">
                            <Link to={`/courses/${item._id}`} reloadDocument >Explore</Link></a>
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



</div>
    </div>
    <Testimonial/>
<Footer/>
    </>
  )
}

export default Urdu