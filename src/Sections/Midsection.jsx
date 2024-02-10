import React from 'react'

const Midsection = (data) => {
const {title,para,img,link,leftImage} = data.data
  return (
    <>
      <>
    <div className={`header-container w-screen flex ${leftImage?` md:gap-14`:` md:gap-0`} ${leftImage?`xl:flex-row-reverse`:`xl:flex-row`} ${leftImage?`md:flex-row-reverse`:`md:flex-row`} ${leftImage?`flex-col-reverse`:`flex-col-reverse`} w-screen  py-[52px] px-[70px]`}>
    <div className={`w-[100%] xl:mt-0 -mt-4 md:w-[60%] md:px-[70px] -ml-10 xl:w-[50%] px-0 xl:px-[70px] md:ml-4 ${leftImage?`xl:ml-0`:`xl:ml-[100px]`}`}>
            <h3 className='mt-[100px] uppercase text-md text-theme-200'>Language</h3>
        <div className="text-[30px] leading-[30px] mt-2 xl:text-[64px] xl:leading-[64px]  font-serif font-medium text-black">{title}</div>
<div className="w-[80vw] md:w-[300px] xl:w-[500px] ml-4 mt-4 text-[15px] text-[#505050]">{para}
</div>
<div className="w-[80vw] flex flex-row items-center justify-between pt-6">
    <button className='xl:py-[15px] ml-2 xl:px-[48px] px-[40px] py-[10px]  rounded-md bg-theme-200 text-white'><a href={`${link}`}>Explore</a></button>
</div>
    </div>
    <div className="xl:w-[40%] xl:mb-0 md:w-[40%]  -mb-10">
        <div className='xl:w-[500px]  w-[100%] md:w-[300px] border-4 rounded-full p-[20px]  xl:p-[40px] relative after:absolute after:top-0 after:left-0 after:w-[100%] after:h-[100%] after:border-t-[20px]  after:border-l-[16px] after:border-theme-200 after:rounded-full'>
                    <img  src={img} alt="" />
        </div>
    </div>

    </div>
    </>
    
    </>
  )
}

export default Midsection