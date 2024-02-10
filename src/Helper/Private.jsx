import {useEffect} from 'react'
import {Outlet ,useNavigate} from "react-router-dom"


const Private = () => {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("token").length
    console.log("8",isLogin);
return isLogin ? <Outlet/> : navigate('/login')
    

}

export default Private