import React, { useEffect,useState } from 'react'
import { makeAuthenticatedGETRequest, makeUnauthenticatedGETRequest } from '../Helper/ServerHelper'
import { endPoint } from '../Helper/Apis'
const Student = () => {
    const token = localStorage.getItem("token")
    const [user,setUser] = useState([])
        const getAllCourse = async () => {
        try {
            const userRes = await makeAuthenticatedGETRequest(token,endPoint.GET_ALL_USERS);
            setUser(userRes.data.user)
        } catch (error) {
            console.log(error);       
        }
    }

    useEffect(() => {
      getAllCourse();
    }, [])

    user.map(e=> console.log(e.name))
    
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
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile No.</th>                      
                                </tr>
                            </thead>
                         <tbody>

                            {user.map((item , index)=>(
  <tr key={index}>
                                    <td>
                                        <a className="text-heading font-semibold" href="#">
                                           {item.name}
                                        </a>
                                    </td>
                                    <td>
                                        {item.last}
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                                        <a className="text-heading font-semibold" href="#">
                                            {item.email}
                                        </a>
                                    </td>
                                    <td>
                                       {item.number}
                                    </td>
                                   
                            </tr>
                            ))}
                         
                         
                         </tbody>
                        </table>
                    </div>
                    <div className="card-footer border-0 py-5">
                        <span className="text-muted text-sm">Showing {user.length} items out of {user.length} results found</span>
                    </div>
                </div>

    </div>
    </>
  )
}

export default Student