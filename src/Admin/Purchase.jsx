import {useEffect, useState} from 'react'
import { makeAuthenticatedGETRequest ,makeUnauthenticatedGETRequest} from '../Helper/ServerHelper'
import { adminPoint } from '../Helper/Apis'
import { MdCurrencyRupee } from "react-icons/md";

const Purchase = () => {
    const token = localStorage.getItem("token")
    const [payData,setPayData] = useState([])


    
    const getDate = async (date) => {
        
        const dateres = new Date(date)
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDate = dateres.toLocaleDateString('en-US', options);
        return formattedDate ;
}
    const getData = async() => {
        try {
            const response = await makeAuthenticatedGETRequest(token ,adminPoint.PURCHASE_DETAILS)
            setPayData(response.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getData();
    }, [])
    console.log("23 ALL_PURCHASES =>",payData);
  return (
    <>
    <div className='w-screen'>
    <div className="card shadow border-0 mb-7">
                    <div className="card-header">
                        <h5 className="mb-0">Applications</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-nowrap">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Amount</th>                      
                                    <th scope="col">Purchase Date</th>                      
                                    <th scope="col">Payment Details</th>                      
                                    <th scope="col">Live Classes Link</th>                      
                                </tr>
                            </thead>
                         <tbody>
                          

                                {payData.map((item,index)=>(
  <tr key={index}>         
                             <td >
                                        <a className="text-heading font-semibold" href="#">
                                          {item.studentId.name}
                                        </a>
                                    </td>
                                    <td>
                                     {item.courseId.title }
                                   
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                           {item.studentId.email}
                                        </a>
                                    </td>
                                    <td>
                                    {item.courseId.price }
                                    </td>
                                    <td>
                                    {item.purchaseDate}
                                    </td>
                                    <td>
                                       {item.orderId}
                                    </td>
                                    <td>
                                     <a href={`${item.courseId.link}`} className="bg-theme-200 text-white w-[70%]   rounded py-2 px-6 md:px-12 transition-colors duration-300">Live</a>
                                    </td>
   </tr>                 
                  ))}
                                   
                         
                         
                         
                         </tbody>
                        </table>
                    </div>
                    <div className="card-footer border-0 py-5">
                    </div>
                </div>

    </div>
    </>
  )
}

export default Purchase