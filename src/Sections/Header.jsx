import React from 'react'
import image from '../../public/images/bgHeader.png'
import bg from '../../public/images/bg.png'
const Header = () => {
  return (
    <>
    <div style={{background:`URL(${bg})no-repeat`}} className="header-container h-auto  md:py-10 md:px-4 flex xl:items-center mb-10  w-screen flex-col-reverse  xl:py-[52px] xl:px-[70px] xl:flex-row md:flex-row">
    <div className="md:w-[100%] xl:w-[90%] md:px-[20px] py-[0px] -mt-28 xl:mt-0 xl:py-0  xl:px-[70px]">
        <div className="text-[20px] ml-4 leading-[55px] tracking-[0px] xl:text-[80px] md:text-[30px] md:pt-10 xl:leading-[78px] mt-[100px] font-serif  font-medium text-theme-200"> 
          Grow, Nurture, Retarget
        </div>
    <div className="w-[80vw] md:w-[300px] md:text-[13px] md:-mt-2 xl:w-[500px] ml-4 mt-4 text-[15px] text-[#505050]">
          Optimize the business performance, let it grow,
          nurture the potential leads & retarget the existing
          ones.</div>
    </div>
    <div className="w-[100%]">
        <img className='' src={image} alt="" />
    </div>
    </div>
    </>
  )
}

export default Header