import React from 'react'
import ContactImg from '../img/contact.svg'
import World from '../img/world.svg'
import Footer from './Footer'

const Contact = () => {
  return (
    <section>
      <div className='max-w-[1240px] mx-auto px-4'>
        <div className='flex flex-col-reverse md:flex-row py-20 justify-around items-center'>
          <div className=''>
            <img src={ContactImg} alt="" />
            <h1 className='text-4xl font-bold py-10'>Let's Collaborate</h1>
            <p className='text-slate-600'>Lorem Ipsum is simply dummy text of the printing .</p>
          </div>
          <img src={World}  className='' alt="" />
        </div>

        <div className=' flex flex-col md:flex-row items-center gap-10 justify-around py-20'>
          <div className='flex flex-row justify-center items-center gap-5'>
              <i className='bx bxl-facebook bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
              <i className='bx bxl-instagram-alt bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
              <i className='bx bxl-twitter bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
              <i className='bx bxl-linkedin bg-white rounded-full shadow-lg w-9 h-9 flex items-center justify-center'></i>
            
          </div>
          <div className='flex items-center gap-3'>
            <i className='bx bxs-phone text-2xl'></i>
            <p>+62 4444 5555 6</p>
          </div>
          <div className='flex flex-col md:flex-row items-center  gap-3'>
            <i className='bx bx-current-location text-2xl'></i>
            <p>but also the leap into electronic typesetting</p>
          </div>

        </div>
      </div>
      <div className=' px-4 py-20 bg-[#1090cb] bg-opacity-10'>
        <div className='max-w-[1240px] mx-auto'>

          <div className='text-center '>
            <h2 className='text-2xl font-semibold'>Say Hello!</h2>
            <p>Lorem Ipsum is simply dummy text of the printing .</p>

          </div>
          <form className="w-full max-w-lg mx-auto py-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-first-name" type="text" placeholder="Jane"/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-last-name" type="text" placeholder="Doe"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500" id="grid-email" type="email" placeholder="Enter Your Email"/>
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
            <div className="mb-3  w-full">
              <label for="exampleFormControlTextarea1" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >Message</label>
              <textarea
                className="
                  h-[230px]
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className='bg-[#1090CB] py-2 px-4 rounded-lg w-[150px] hover:shadow-lg hover:bg-opacity-80 text-white xl:w-[190px]'>Get In Touch</button>
          </form>
          
        </div>

      </div>

      <Footer/>
    </section>
  )
}

export default Contact