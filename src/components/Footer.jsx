import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='max-w-[1240px] mx-auto mt-20 px-5 lg:flex lg:flex-row justfy-around'>
        <div className='flex flex-col justify-between h-40 mb-10  lg:w-4/12 mr-5'>
          <h1 className='text-xl font-bold text-sky-500'>LOGOIPSUM</h1>
          <p className='text-slate-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className='text-slate-700'>@faiqlw_</p>

        </div>
        <div className='flex flex-col justify-between h-40 mb-10 lg:w-2/12'>
          <h1 className='text-xl font-semibold'>About Us</h1>
          <ul>
            <li>Lorem</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>

        </div>
        <div className='flex flex-col justify-between h-40 mb-10 lg:w-3/12 '>
          <h1 className='text-xl font-semibold'>Contact Us</h1>
          <p className='text-slate-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className='text-slate-700'>+6285546423149</p>

        </div>
        <div className='flex flex-row lg:justify-end justify-center items-start h-40 mb-10  gap-5 lg:w-3/12 '>
         
          <i className='bx bxl-facebook bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
          <i className='bx bxl-instagram-alt bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
          <i className='bx bxl-twitter bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
          <i className='bx bxl-linkedin bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
        </div>

      </div>
      <div className='border border-t-slate-200 text-center py-7'>
        <p className='text-md text-slate-700'>Copyright ® 2022 Paig All rights Rcerved</p>
      </div>
    </div>
  )
}

export default Footer