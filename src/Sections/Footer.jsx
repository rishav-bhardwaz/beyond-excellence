import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
<>
<div className="footer-2 bg-gray-800 pt-6 md:pt-12">
  <div className="container px-4 mx-auto">

    <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

      <div className="footer-info lg:w-1/3 md:px-4">
        <h4 className="text-white text-2xl mb-4">Beyond Excellence</h4>
        <p className="text-gray-400">We have carefully crafted the blocks to suit to everyone's need.</p>
        <div className="mt-4">
      <div>

      </div>
    
      <div className='flex flex-row gap-3'>
          <IoLogoYoutube className=' cursor-pointer' size={"25px"} color='#FF0000'/>
      <FaFacebook className=' cursor-pointer' size={"25px"} color='#1877f2'/>
      <FaTwitter className=' cursor-pointer' size={"25px"} color='#00acee'/>
      <RiInstagramFill className=' cursor-pointer' size={"25px"} color='#E4405F'/>
         
      </div>
        </div>
      </div>

      <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
        <div className="sm:flex">
          <div className="sm:flex-1">
            <h6 className="text-base font-medium text-white uppercase mb-2">Products</h6>
            <div>
              <a href="#" className="text-gray-400 py-1 block hover:underline">New Course</a>
              <a href="#" className="text-gray-400 py-1 block hover:underline">Featured Learnings</a>
            </div>
          </div>
          <div className="sm:flex-1 mt-4 sm:mt-0">
            <h6 className="text-base font-medium text-white uppercase mb-2">Services</h6>
            <div>
              <a href="#" className="text-gray-400 py-1 block hover:underline">Online Certificates</a>
              <a href="#" className="text-gray-400 py-1 block hover:underline">Newsletter</a>
              <a href="#" className="text-gray-400 py-1 block hover:underline">Leads</a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
        <h5 className="text-lg text-white font-medium mb-4">Explore New Course</h5>
        <button className="bg-theme-200 text-white  rounded py-2 px-6 md:px-12 transition-colors duration-300">Explore</button>
      </div>

    </div>

  </div>

  <div className="border-t border-solid border-gray-900 mt-4 py-4">
    <div className="container px-4 mx-auto">

      <div className="md:flex md:-mx-4 md:items-center">
        <div className="md:flex-1 md:px-4 text-center md:text-left">
          <p className="text-white">&copy; <strong>Beyond Excellence</strong></p>
        </div>
        <div className="md:flex-1 md:px-4 text-center md:text-right">
          <a href="#" className="py-2 px-4 text-white inline-block hover:underline">About </a>
          <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Terms</a>
          <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
          <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Careers</a>
        </div>
      </div>

    </div>
  </div>

</div>
</>
  )
}

export default Footer