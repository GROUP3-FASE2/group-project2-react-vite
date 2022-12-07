import React from "react";
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-dark-alta">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-orange-alta px-2 mb-16 text-sm text-white rounded rotate-12 absolute">
        Page Not Found
      </div >
      <div className='text-white text-xl text-center'>
        <p>We're sorry, the page you are looking doesn't exist or an other error occurred. <br /> Please go back or contact us 08123456789.</p>        
      </div>
      <button className="mt-5" onClick={()=>navigate(-1)}>
        <a
          className="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-white group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            GO BACK
          </span>
        </a>
      </button>
    </div>
  )
}

export default PageNotFound