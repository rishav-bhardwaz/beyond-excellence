
const Card = (data) => {
    const {code,title} = data.data
    // code.replace(/,/g, '')
    // console.log(code);
  return (
    <>
        <div className={`w-[400px] h-[200px] items-center  cursor-pointer  bg-gray-800 rounded-lg border-4 relative after:transition after:delay-75 after:ease-in  after:absolute after:-top-3  after:rounded-3xl after:-right-4 overflow-hidden hover:after:w-[150%] hover:after:h-[150%]  after:w-[30%]  after:bg-theme-200  after:h-[30%]  flex m-auto justify-center text-center`}>
            <div className="w-10/12 divide-y divide-gray">
                <div className="py-14 relative z-50 text-white px-0 font-bold font-sans text-3xl">
                  {title}
                </div>
        
               
            </div>
        </div>
    
    </>
  )
}

export default Card