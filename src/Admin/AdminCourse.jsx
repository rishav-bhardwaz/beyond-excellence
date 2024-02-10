import { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import { MdOutlineRemoveCircle } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
const course = () => {

  const token = localStorage.getItem("token")
  const [file, setFile] = useState(null);
  const[title,setTitle] = useState('')
  const[description,setDescription] = useState('')
  const[price,setPrice] = useState('')
  const[content,setContent] = useState('')
  const[duration,setDuration] = useState('')
  const[meet,setMeet] = useState('')
 
    const [inputFields, setInputFields] = useState([{ value: '' }]);
    const [week, setWeek] = useState([{ value: '' }]);
    const [classDetail, setClassDetail] = useState([{ value: '' }]);
    const [classkey, setClassKey] = useState([{ value: '' }]);

  const handleChange = (index, event , n) => {
    if(n===1){
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
    }else if(n===2){
    const values = [...week];
    values[index].value = event.target.value;
    setWeek(values);
    }else if(n===3){
    const values = [...classDetail];
    values[index].value = event.target.value;
    setClassDetail(values);
    }else if(n===4){
    const values = [...classkey];
    values[index].value = event.target.value;
    setClassKey(values);
    }
  };

  const handleAddField = (n) => {
    if(n===1){
    setInputFields([...inputFields, { value: '' }]);
    }else if(n===2){
        setWeek([...week,{value: ''}]);
    }else if(n===3){
        setClassDetail([...classDetail,{value: ''}]);
    }else if(n===4){
        setClassKey([...classkey,{value: ''}]);
    }
  };

  const handleRemoveField = (index , n) => {
    if(n===1){
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    }else if(n===2){
    const values = [...week];
    values.splice(index, 1);
    setWeek(values);
    }else if(n===3){
    const values = [...classDetail];
    values.splice(index, 1);
    setClassDetail(values);
    }else if(n===4){
    const values = [...classkey];
    values.splice(index, 1);
    setClassKey(values);
    }
  };

  const fileHandler = (e) => {
  setFile(e.target.files[0]);  }

   const handleSubmit = async(e) => {
    e.preventDefault();
        const toastId = toast.loading("Loading...");
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('content', content);
        formData.append('duration', duration);
        formData.append('link', meet);
        formData.append('thumbnail', file);
        inputFields.map((field) => formData.append('keypoint',field.value));
        week.map((field) => formData.append('week',field.value));
        classDetail.map((field) => formData.append('classDetails',field.value));
        classkey.map((field) => formData.append('classkey',field.value));
    try {
      
      const response = await axios.post("http://localhost:4000/admin/courseUpload", formData, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      toast.success("Course Added Successfull")
    } catch (error) {
      console.log("Error in Submission");
    }
        toast.dismiss(toastId);

  }
console.log(inputFields.map((field) => field.value));
console.log(week.map((field) => field.value));
console.log(classDetail.map((field) => field.value));
  return (
     <>
 <div className="w-full h-[100vh] overflow-y-scroll">
     <h2 className="text-center text-blue-400 font-bold pt-12 text-2xl uppercase mb-10">Add  new Course</h2>
     <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form onSubmit={handleSubmit}>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Course Thumbnail</label>
           <input onChange={fileHandler} type="file" id="name" name="thumbnail" placeholder="Put in your Thumbnail."  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Course Title</label>
           <input onChange={(e)=>setTitle(e.target.value)} type="text" id="name" name="title" placeholder="Put in your Course Title."  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Description</label>
           <input onChange={(e)=>setDescription(e.target.value)} type="text" id="name" name="description" placeholder="Put in your Description."  className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600 ">Content</label>
           <textarea  onChange={(e)=>setContent(e.target.value)}  type="text" id="name" name="content" placeholder="Put in your Content."  className=" border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>

         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Price</label>
           <input onChange={(e)=>setPrice(e.target.value)} type="text" id="number" name="price" placeholder="Put in your Course Price." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Duration (Year)</label>
           <input onChange={(e)=>setDuration(e.target.value)} type="text" id="number" name="duration" placeholder="Put in your Course Duration." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>
         <div className="mb-5">
           <label  className="block mb-2 font-bold text-gray-600">Meeting Link </label>
           <input onChange={(e)=>setMeet(e.target.value)} type="text" id="number" name="meet" placeholder="Put in your Course Classes Link ." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
         </div>

           <label  className="block mb-2 font-bold text-gray-600">Key Highlights</label>
          {inputFields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={` ${index+1} : Enter Course Key Points`}
              value={field.value}
              className="border border-gray-300 shadow p-3 w-[80%] rounded mb-2 mr-2"
              onChange={(e) => handleChange(index, e , 1)}
            />
            <button type="button" onClick={() => handleRemoveField(index , 1)}>
              <MdOutlineRemoveCircle size={"35px"}/>
            </button>
          </div>
        ))}
        <button type="button" onClick={()=>handleAddField(1)}>
          <IoIosAddCircle size={"35px"} color={'#CA2953'}/>
        </button>

         <label  className="block mb-2 font-bold text-gray-600">Week Details</label>
          {week.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Week ${index+1} course Details`}
              value={field.value}
              className="border border-gray-300 shadow p-3 w-[80%] rounded mb-2 mr-2"
              onChange={(e) => handleChange(index, e , 2)}
            />
            <button type="button" onClick={() => handleRemoveField(index , 2)}>
              <MdOutlineRemoveCircle size={"35px"}/>
            </button>
          </div>
        ))}
        <button type="button" onClick={()=>handleAddField(2)}>
          <IoIosAddCircle size={"35px"} color={'#CA2953'}/>
        </button>


         <label  className="block mb-2 font-bold text-gray-600">Classes Details</label>
          {classDetail.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Class ${index+1} : Topic `}
              value={field.value}
              className="border border-gray-300 shadow p-3 w-[80%] rounded mb-2 mr-2"
              onChange={(e) => handleChange(index, e , 3)}
            />
            <button type="button" onClick={() => handleRemoveField(index , 3)}>
              <MdOutlineRemoveCircle size={"35px"}/>
            </button>
          </div>
        ))}
        <button type="button" onClick={()=>handleAddField(3)}>
          <IoIosAddCircle size={"35px"} color={'#CA2953'}/>
        </button>

        
         <label  className="block mb-2 font-bold text-gray-600">Classes Key points</label>
          {classkey.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={` class ${index+1} key point`}
              value={field.value}
              className="border border-gray-300 shadow p-3 w-[80%] rounded mb-2 mr-2"
              onChange={(e) => handleChange(index, e , 4)}
            />
            <button type="button" onClick={() => handleRemoveField(index , 4)}>
              <MdOutlineRemoveCircle size={"35px"}/>
            </button>
          </div>
        ))}
        <button type="button" onClick={()=>handleAddField(4)}>
          <IoIosAddCircle size={"35px"} color={'#CA2953'}/>
        </button>


         <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Update</button>
       </form>
     </div>
   </div>
    </>
  )
}

export default course