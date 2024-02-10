import React from 'react'
import "./style.css"
const Language = () => {
  return (
    <>
    <div className='main'>
      <section className="page-section  catalogue-section">
        <div className="container  w-[100%] flex flex-col items-center justify-center">
            <h1 className='text-[40px] font-medium'>Why learn a foreign language ?</h1>
            <ol>
                <li >
                    <div className="icon"><i className="fa-solid fa-bicycle"></i></div>
                    <div className="title">Expand</div>
                    <div className="descr">your career horizons.</div>
                </li>
                <li >
                    <div className="icon"><i className="fa-solid fa-car"></i></div>
                    <div className="title">Boost</div>
                    <div className="descr">your academic success.</div>
                </li>
                <li >
                    <div className="icon"><i className="fa-solid fa-helicopter"></i></div>
                    <div className="title">Travel</div>
                    <div className="descr"> deeper</div>
                </li>
                <li >
                    <div className="icon"><i className="fa-solid fa-plane"></i></div>
                    <div className="title">Build</div>
                    <div className="descr">bridges.</div>
                </li>
                <li >
                    <div className="icon"><i className="fa-solid fa-rocket"></i></div>
                    <div className="title">Enhance</div>
                    <div className="descr"> cognitive abilities.</div>
                </li>
                <li >
                    <div className="icon"><i className="fa-solid fa-bus"></i></div>
                    <div className="title">Cultural</div>
                    <div className="descr">appreciation.</div>
                </li>
            </ol>
            <div className="credits">
                <a target="_blank" href="https://www.freepik.com/premium-vector/vector-infographic-design-template-with-icons-8-options-steps_10571883.htm"></a>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default Language