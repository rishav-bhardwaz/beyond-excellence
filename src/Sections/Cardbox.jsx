import React from 'react'
import Card from '../Components/Card'

const Cardbox = () => {
    const data = [
        {
            code:"#F9D307",
            title:"Expert-led courses"
        },
        {
            code:"#6EE7B7",
            title:"Interactive Learning"
        },
        {
            code:"#EE1739",
            title:"Flexible Options"
        },
        {
            code:"#7148FC",
            title:"Affordable and accessible"
        },
        {
            code:"#FF36AB",
            title:"Thriving community"
        },
        {
            code:"#654EB0",
            title:"Real-world application"
        }
    ]
  return (
    <>
    <div className='w-screen xl:h-[80vh] md:h-auto'>
            <div className='text-center xl:text-[64px] md:text-[64px] text-[40px] font-semibold'>Courses Offered</div>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 pt-10'>
                <Card data={data[0]}/>
                <Card data={data[1]}/>
                <Card data={data[2]}/>
                <Card data={data[3]}/>
                <Card data={data[4]}/>
                <Card data={data[5]}/>
            </div>

    </div>
    </>
  )
}

export default Cardbox