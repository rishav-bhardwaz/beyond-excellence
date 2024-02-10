import React, { useState } from 'react'

const Model = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <>
<div className="flex items-center justify-center h-screen">
  <button className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-700 transition font-medium duration-500"onClick={()=>setToggle(!toggle)}>SHOW MODAL</button>
</div>
<div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${toggle ? `block`:`hidden`}`} id="modal">
  <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <label className="font-medium text-gray-800">Name</label>
        <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
        <label className="font-medium text-gray-800">Url</label>
        <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
      </div>
      <div className="bg-gray-200 px-4 py-3 text-right">
        <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={()=>setToggle(!toggle)}><i className="fas fa-times"></i> Cancel</button>
        <button type="button" className="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"><i className="fas fa-plus"></i> Create</button>
      </div>
    </div>
  </div>
</div> 
</> )
}

export default Model