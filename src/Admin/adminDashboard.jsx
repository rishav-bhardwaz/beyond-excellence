import { useEffect ,useState } from 'react'

import { makeAuthenticatedGETRequest, makeUnauthenticatedGETRequest } from '../Helper/ServerHelper'
import { endPoint ,adminPoint} from '../Helper/Apis'
import Chart from './Chart'
import ChartWithXAxisPadding from './ChartWithXAxisPadding'
import { BarChart, WidthFull } from '@mui/icons-material'
import BarCharts from './BarChart'
const adminDashboard = () => {
    const token = localStorage.getItem("token")
  const [data,setData] = useState([])
  const [user,setUser] = useState([])
  const [purchase,setPurchase] = useState([])
    const [amount,setAmount] = useState()
     const [oldData, setOldData] = useState([]);
    const getAllCourse = async () => {
        try {
            const response = await makeUnauthenticatedGETRequest(endPoint.ALLCOURSE_API);
            const userRes = await makeAuthenticatedGETRequest(token,endPoint.GET_ALL_USERS);
            const purchaseRes = await makeAuthenticatedGETRequest(token,endPoint.ALL_PURCHASES);
            const total = await makeAuthenticatedGETRequest(token ,adminPoint.PURCHASE_DETAILS)
            if(total.status === 200){
                setAmount(total.data.map(item => item.courseId.price).reduce((total, amount) => total + parseInt(amount), 0))
            }
            setUser(userRes.data.user)
            setPurchase(purchaseRes.data.user)
            if(response.status === 200){
                setData(response.data.course)
            }
        } catch (error) {
            console.log(error);       
        }
    }
 const datass = [
    { name: 'Jan', Amount: 5000 },
    { name: 'Feb', Amount: 7000 },
    { name: 'Mar', Amount: 9000 },
    { name: 'Apr', Amount: 10000 },
    { name: 'May', Amount: 2000 },
    { name: 'Jun', Amount: 1000 },



    // Add more data points as needed
  ];

    const XAxis = [
    { name: 'Jan', Course: 0 },
    { name: 'Feb', Course: 4 },
    { name: 'Mar', Course: 3 },
    { name: 'Apr', Course: 1 },
    { name: 'May', Course: 6 },
    { name: 'Jun', Course: 2 },


  ];
 const formatNumber = (value) => {
  const suffixes = ['', 'K', 'M', 'B', 'T'];

  let magnitude = 0;
  let formattedValue;

  if (typeof value === 'number') {
    while (value >= 1000 && magnitude < suffixes.length - 1) {
      value /= 1000;
      magnitude++;
    }

    // Use toFixed only if there are decimal places
    formattedValue = value % 1 !== 0 ? value.toFixed(1) : value;
  } else {
    formattedValue = value; // If value is not a number, keep it as is
  }

  return `${formattedValue}${suffixes[magnitude]}`;
};
  useEffect(() => {
    if ( amount !== undefined ) {
  setOldData((prevHistory) => [...prevHistory, { name: 'Total', value: amount }]);    }
  }, [amount]);
    useEffect(() => {
      getAllCourse();
    }, [])
console.log(oldData);
  return (
     <>
     <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <header className="bg-surface-primary   border-bottom pt-6">
            <div className="container-fluid">
                <div className="mb-npx">
                   
                    <ul className="nav nav-tabs mt-4 overflow-x border-0">
                        <li className="nav-item ">
                            <a href="#" className="nav-link active">All files</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link font-regular">Shared</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link font-regular">File requests</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
                <div className="row g-6 mb-6">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Avaliable Courses</span>
                                        <span className="h3 font-bold mb-0">{data.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i className="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-success text-success me-2">
                                        <i className="bi bi-arrow-up me-1"></i>13%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Active Student</span>
                                        <span className="h3 font-bold mb-0">{user.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i className="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-success text-success me-2">
                                        <i className="bi bi-arrow-up me-1"></i>30%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Enrolled</span>
                                        <span className="h3 font-bold mb-0">{purchase.length}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i className="bi bi-clock-history"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i className="bi bi-arrow-down me-1"></i>-5%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Revenue</span>
                                        <span className="h3 font-bold mb-0">{formatNumber(amount)}</span>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                            <i className="bi bi-minecart-loaded"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm">
                                    <span className="badge badge-pill bg-soft-success text-success me-2">
                                        <i className="bi bi-arrow-up me-1"></i>10%
                                    </span>
                                    <span className="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='w-[100%] flex xl:flex-row sm:flex-col flex-col   gap-4'>
                   <div className=" bg-white border border-gray-200 h-[47vh] rounded-lg shadow w-[450px] dark:bg-gray-800 dark:border-gray-700">
                        <Chart data = {datass} />
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Monthly Sales</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 text-[15px] dark:text-gray-400">6 Months Groth</p>
                    </div>
                </div>
                   <div className=" bg-white border border-gray-200 h-[47vh] rounded-lg shadow w-[450px] dark:bg-gray-800 dark:border-gray-700">
                        <ChartWithXAxisPadding data={XAxis}/>
                        <div className="p-5">
                            <a >
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Monthly Course Upload</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">6 Months Course Upload</p>
                        </div>
                   </div>
                   <div className=" bg-white border border-gray-200 h-[47vh] rounded-lg shadow w-[450px] dark:bg-gray-800 dark:border-gray-700">
                        <BarCharts/>
                        <div className="p-5">
                            <a >
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Monthly Student  Enrolled</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">6 Months Student Groth</p>
                        </div>
                   </div>
                </div>
            </div>
        </main>
    </div>
    </>
  )
}

export default adminDashboard