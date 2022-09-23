import React from 'react'
import HomeImage from '../img/Group 6.svg'
import ActiImage from '../img/acti.svg'
import Mockup from '../img/mockup.png'
import Focus from '../img/focus.png'
import CodingImage from '../img/coding.svg'
import Immersive from '../img/immersive.svg'
import Seotag from '../img/seo-tag.svg'
import ContentImage from '../img/content.svg'
import Logo1 from '../img/beneoshop.svg'
import Logo2 from '../img/caspio.svg'
import Logo3 from '../img/HyperGrid.svg'
import Logo4 from '../img/leotrippi.svg'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Home = () => {

  const fiturHome = [
    {
      id: "1",
      tittle: "Web Aplication",
      image: ContentImage,
      style: 'bg-violet-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "lorem ipsum is simply"
    },
    {
      id: "2",
      tittle: "SEO",
      image: Seotag,
      style: 'bg-lime-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "lorem ipsum is simply"
    },
    {
      id: "3",
      tittle: "AR/VR Solution",
      image: Immersive,
      style: 'bg-sky-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "lorem ipsum is simply"
    },
    {
      id: "4",
      tittle: "Mobile Aplication",
      image: CodingImage,
      style: 'bg-rose-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "lorem ipsum is simply"
    },
    
]










  return (
    <section className='text-left'>
      {/* start hero */}
      <div className="hero bg-[#1090CB] bg-opacity-10 h-auto px-4 ">
        <div className='lg:flex py-16  max-w-[1240px] mx-auto relative'>
          <div className='md:w-1/2 mb-[100px]'>
            <div className=" py-3 mb-3">
              <h1 className='text-5xl font-bold '>Experienced <span className='text-[#1090CB]'>mobile and web</span> applications and website builders measuring.</h1>
            <p className='font-base mt-3 mb-3'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            </div>
            
            <div className="flex gap-4 ">
              <button className='bg-[#1090CB] py-2 px-4 rounded-lg w-[150px] hover:shadow-lg hover:bg-opacity-80 text-white xl:w-[190px]'>Contact Us</button>
              <button className='border-[#1090CB] border-2 text-[#1090CB] hover:shadow-lg bg-white py-2 px-4 rounded-lg w-[150px] xl:w-[190px]'>View More</button>
            </div>

          </div>
          <div className='lg:w-1/2 md:absolute  top-[-200px] right-0'>
            <img src={HomeImage} alt="HomeImage" className='max-w-full py-5' />
          </div>  
        </div>
      </div>
      {/* end hero */}

      {/* start fitur */}

      <div className="fitur bg-white">
        <div className="max-w-[1240px] mx-auto py-11">
          <div className='flex flex-wrap '>

          {fiturHome.map((fitur) => (
            <div key={fitur.id}   className='px-4 flex items-center w-full md:w-1/4'>
              <div className= {fitur.style}  >
                <img src={fitur.image} alt="fitur" />
              </div>
              <div className='flex flex-col '>
                <div className='font-semibold mt-3'>{fitur.tittle}</div>
                <p className='text-slate-500'>{fitur.text}</p>
                
              </div>

            </div>

          ))}
        </div>
          </div>
       
        

      </div>
      {/* end fitur */}

      {/* main start */}

      <div className="main  max-w-[1240px] mx-auto mt-28">
        <div className="title flex flex-col justify-center items-center  text-center px-4">
          <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam.</h1>
          <p className='md:w-[800px] text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quae ullam voluptatum ipsum. Quibusdam exercitationem, minus voluptatibus nesciunt possimus aliquam!</p>
        </div>
        <div className=' px-4 grid md:grid-cols-2 items-center mt-5'>
          <div className=''>
            <h1 className='font-semibold mb-3 text-2xl lg:text-4xl'><span className='text-[#1090CB] '>Lorem ipsum </span>dolor sit amet consectetur adipisicing.</h1>
            <p className='text-slate-500'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
          </div>
          <div>
            <img className=' bg-sky-500' src={ActiImage} alt="" />
          </div>
        </div>

      </div>

      {/* main end */}
      <div className="main  max-w-[1240px] mx-auto ">
        <div className=' px-4 flex flex-col md:flex-row-reverse justify-between items-center'>
          <div className='md:w-1/2'>
            <h1 className='font-semibold mb-3 text-2xl lg:text-4xl'><span className='text-[#1090CB] '>Lorem ipsum </span>dolor sit amet consectetur adipisicing.</h1>
            <p className='text-slate-500'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
          </div>
          <div className='md:w-1/2'>
            <img className='' src={Mockup} alt="" />
          </div>
        </div>

      </div>

      <div className="main  max-w-[1240px] mx-auto mb-28 ">
        <div className=' px-4 flex flex-col md:flex-row items-center mt-5 relative'>
          <div className='md:w-1/2 py-20'>
            <h1 className='font-semibold mb-3 text-2xl lg:text-4xl'><span className='text-[#1090CB] '>Lorem ipsum </span>dolor sit amet consectetur adipisicing.</h1>
            <p className='text-slate-500'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
          </div>
          <div className='md:w-1/2 md:absolute md:top-0 md:right-[150px]'>
            <img className='w-[800px] ' src={Focus} alt="" />
          </div>
        </div>

      </div>

      <div className="testi  max-w-[1240px] mx-auto md:grid md:grid-cols-2 md:gap-10">
        <div className='text-center xl:w-full w-[80%] mx-auto mb-5  bg-sky-100 rounded-lg px-12 py-16 lg:h-[460px] shadow-md'>
          <div className='py-10'>
            <h1 className='font-semibold text-3xl mb-3'>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className='text-slate-500 lg:w-[475px] mx-auto py-9'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            <button className='bg-[#1090CB] mb-5 py-2 px-4 rounded-lg w-[150px] hover:shadow-lg hover:bg-opacity-80 text-white xl:w-[190px]'>View More</button>

          </div>
        </div>
        <div className='text-center xl:w-full w-[80%] mx-auto mb-5  bg-sky-500 rounded-lg px-12 py-16 lg:h-[460px] shadow-md'>
          <div className='py-10 text-white'>
            <h1 className='font-semibold text-3xl mb-3'>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className=' lg:w-[475px] mx-auto py-9'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            <button className='bg-white mb-5 py-2 px-4 rounded-lg w-[150px] hover:shadow-lg hover:bg-opacity-80 text-[#1090CB] xl:w-[190px]'>View More</button>

          </div>
        </div>
      </div>

      <div className="company">
        <div className='w-[90%] mx-auto py-10'>

            <h1 className='text-3xl font-semibold text-center'>You Will Be In Good Company</h1>
            <div className='flex flex-wrap justify-around items-center'>
              <img src={Logo1} alt="" />
              <img src={Logo2} alt="" />
              <img src={Logo3} alt="" />
              <img src={Logo4} alt="" />
            </div>
        </div>
      </div>

      <Subscribe/>
      <Footer/>

      


      
      
    </section>
    
  )
}

export default Home