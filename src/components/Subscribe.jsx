import React from 'react'

const Subscribe = () => {
  return (
    <div className="subscribe bg-[#1090CB] bg-opacity-10">
        <div className="max-w-[1240px]  mx-auto flex flex-col justify-center items-center">
          <h1 className='text-3xl mt-36 font-semibold lg:w-[515px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <div className="input mt-20 mb-36 flex flex-col justify-center w-full px-5 lg:flex-row gap-5">
            <input type="text" placeholder='Enter Your Email  ' className='lg:w-[545px]  h-16 rounded-xl px-4 focus:outline-none'/>
            <button className='bg-[#1090CB] py-2 px-4 rounded-lg h-16 lg:w-[150px] w-full hover:shadow-lg hover:bg-opacity-80 text-white xl:w-[190px]'>Subscribe</button>
          </div>
        </div>
      </div>
  )
}

export default Subscribe