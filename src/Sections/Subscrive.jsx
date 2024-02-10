import React from 'react'
import image from "../../public/images/3.png"
const Subscrive = () => {
    const leftImage = true;
  return (
     <>
    <div className={`header-container md:gap-14 flex ${leftImage?`xl:flex-row-reverse`:`xl:flex-row`} ${leftImage?`md:flex-row-reverse`:`md:flex-row`} ${leftImage?`flex-col-reverse`:`flex-col-reverse`} w-screen  py-[52px] px-[70px]`}>
    <div className={`w-[90%] xl:mt-0 -mt-4 -ml-10 md:px-[50px] md:w-[50%] xl:w-[50%] px-0 xl:px-[70px] ${leftImage?`xl:ml-0`:`xl:ml-[100px]`} ${leftImage?`md:ml-0`:`md:ml-[100px]`}`}>
        <div className="text-[30px] leading-[30px] xl:text-[64px] xl:leading-[64px] mt-[100px] font-serif font-medium text-black">Subscribe to our newsletter</div>
        <div className="w-[80vw] xl:w-[500px] md:w-[400px] ml-4 mt-4 text-[15px] text-[#505050]">
        <div className="flex justify-between mb-3 -ml-4 w-[100%] md:w-[400px] h-[50px]">
            <input className="mr-3 w-[100%] text-[#adadad] shadow-inner  rounded px-3 text-sm border-2 border-gray-700" placeholder="Enter your email" type="text" />
            <button className="shadow-lg bg-theme-200 text-white font-bold text-sm rounded px-4 w-[200px]  md:w-[250px]  xl:w-[250px] py-2">Subscribe Now</button>
        </div>
</div>

    </div>
    <div className="xl:w-[40%] md:w-[40%] w-[100%]  xl:mb-0 -mb-10">
        <div className='xl:w-[500px] w-[100%] border-4 rounded-full p-[20px] xl:p-[40px] relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:border-t-[20px]  after:border-l-[16px] after:border-theme-200 after:rounded-full'>
                    <img  src={image} alt="" />
        </div>
    </div>

    </div>
    </>
  )
}

export default Subscrive