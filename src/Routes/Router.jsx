import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "../Sections/Login";
import Signin from "../Sections/Signin";
import Profile from "../Sections/Profile";
import ErrorPage from "../Pages/ErrorPage";
import Model from "../Pages/Model";
import Course from "../Pages/Course";
import CourseDetails from "../Pages/CourseDetails";
import Urdu from "../Pages/Urdu";
import Punjabi from "../Pages/Punjabi";
import Gujrati from "../Pages/Gujrati";

import Account from "../Pages/Account";
import Dashboard from "../Admin/Dashboard";
import AboutUs from "../Pages/AboutUs";

const Router = () => {
  const isLogin = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/model" element={<Model />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/course-details-1" element={<CourseDetails />} />
          <Route path="/course-details-2" element={<Urdu />} />
          <Route path="/course-details-3" element={<Punjabi />} />
          <Route path="/course-details-4" element={<Gujrati />} />
          <Route
            path="/profile"
            element={isLogin === null ? <Login /> : <Profile />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/admin" element={<Dashboard />} />

          {/* PRAIVATE ROUTE */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
