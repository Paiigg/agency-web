import React from 'react'
import Footer from './Footer'
import Subscribe from './Subscribe'
import Speaker from '../img/speaker.svg'
import CodingImage from '../img/coding.svg'
import Immersive from '../img/immersive.svg'
import Seotag from '../img/seo-tag.svg'
import ContentImage from '../img/content.svg'
import TriDImage from '../img/gambar3d.png'
import Slider from "react-slick";
import project1 from '../img/project1.png'
import project2 from '../img/project2.png'
import project3 from '../img/project3.png'

const Services = () => {

  const fiturServices = [
    {
      id: "1",
      tittle: "Web Aplication",
      image: ContentImage,
      style: 'bg-violet-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "The simplest but robust technology to accompany with you"
    },
    {
      id: "2",
      tittle: "SEO",
      image: Seotag,
      style: 'bg-lime-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "The simplest but robust technology to accompany with you"
    },
    {
      id: "3",
      tittle: "AR/VR Solution",
      image: Immersive,
      style: 'bg-sky-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "The simplest but robust technology to accompany with you"
    },
    {
      id: "4",
      tittle: "Mobile Aplication",
      image: CodingImage,
      style: 'bg-rose-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center',
      text: "The simplest but robust technology to accompany with you"
    },
    
]

  const settings = {
      dots: true,
      
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode:false,
            infinite:false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  const serviceCard = [
    {
      id: '1',
      image: project1,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu'
    },
    {
      id: '2',
      image: project2,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu'
    },
    {
      id: '3',
      image: project3,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu'
    },
    {
      id: '1',
      image: project1,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu'
    },
    {
      id: '2',
      image: project2,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu'
    },
    {
      id: '3',
      image: project3,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu'
    },
    
  ]


  return (
    <section className='service text-left overflow-x-hidden'>
      <div className='bg-[#1090CB] bg-opacity-10 py-20 lg:h-[90vh]'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='md:w-[440px] px-4 text-center mx-auto flex flex-col justify-center items-center gap-10'>
            <div className='bg-white rounded-full w-[135px] h-[135px]  flex justify-center items-center'>
              <img src={Speaker} alt="speaker" className='' />
            </div>
            <div>
              <h1 className='text-3xl'>Our <span className='text-[#1090cb] font-semibold'>Services</span></h1>
              <p className='text-slate-600 mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>

          </div>

          <div className='bg-white lg:w-[1100px] w-[90%] shadow-xl rounded-xl lg:absolute right-0 left-0 mx-auto lg:grid grid-cols-2 px-4'>
            {fiturServices.map((service)=>(
              <div key={service.id} className='flex items-center w-[500px] mx-auto py-10'>
                <div className={service.style}>
                  <img src={service.image} alt="" />

                </div>
                <div className='flex flex-col pt-3'>
                  <h2 className=' font-semibold'>{service.tittle}</h2>
                  <p className='text-sm w-[220px] lg:w-[300px]'>{service.text}</p>
                  
                </div>
              </div>

            ))}

          </div>

        </div>
      </div>

      <div className=' max-w-[1240px] mx-auto py-14 px-4'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
          <div className='flex flex-col gap-10 lg:w-[800px] lg:mt-60'>
            <h1 className='text-3xl font-semibold'><span className='text-[#1090cb]'>Lorem Ipsum</span> is simply dummy text of the printing. </h1>
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens </p>
            <button type='button' className='border-[#1090CB] border-2 text-[#1090CB] hover:shadow-lg bg-white py-2 px-4 rounded-lg w-[150px] xl:w-[190px]'>Contact Us</button>
          </div>

          <div>
            <img src={TriDImage} className='w-full lg:mt-60' alt="3d" />
          </div>

        </div>
      </div>

      <div className='bg-[#1090cb] py-28'>
        <div className='max-w-[1240px] mx-auto  flex flex-col lg:flex-row gap-10 justify-around items-center'>
            <div className='text-white flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>999</h1>
              <p>Happy Clients</p>
            </div>
            <div className='text-white flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>11</h1>
              <p>Completed Project</p>
            </div>
            <div className='text-white flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>7M</h1>
              <p>Transaction</p>
            </div>
            <div className='text-white flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>10K+</h1>
              <p>Customers</p>
            </div>

          

        </div>

      </div>


      <div className='py-20 max-w-[1240px] mx-auto'>
            <h1 className='font-semibold text-xl px-4 mb-10'>Our Latest Project</h1>
            <Slider {...settings}>
              {serviceCard.map((card)=>(
                <div key={card.id} className='p-5 lg:p-0'>
                  <img src={card.image} className='lg:w-[250px] w-full mb-5' alt="" />
                  <div className='lg:w-[250px]'>
                    <h3 className='mb-5  font-semibold '>{card.tittle}</h3>
                    <p className=' mb-5 text-slate-600'>{card.text}</p>

                  </div>
                </div>

              ))}

            </Slider>
          </div>




      <Subscribe/>
      <Footer/>

    </section>
  )
}

export default Services