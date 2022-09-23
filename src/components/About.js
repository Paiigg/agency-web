import React from 'react'
import gambar1 from '../img/gambar1.png'
import gambar3 from '../img/gambar3.png'
import gambar4 from '../img/gambar4.png'
import human1 from '../img/human1.png'
import human2 from '../img/human2.png'
import human3 from '../img/human3.png'
import CodingImage from '../img/coding.svg'
import Immersive from '../img/immersive.svg'
import Seotag from '../img/seo-tag.svg'
import ContentImage from '../img/content.svg'
import Subscribe from './Subscribe'
import Footer from './Footer'
import Slider from "react-slick";



const About = () => {

  const fiturAbout = [
    {
      id: "1",
      tittle: "Web Aplication",
      image: ContentImage,
      style: 'bg-violet-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center p-5',
      text: "lorem ipsum is simply"
    },
    {
      id: "2",
      tittle: "SEO",
      image: Seotag,
      style: 'bg-lime-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center p-5',
      text: "lorem ipsum is simply"
    },
    {
      id: "3",
      tittle: "Mobile Aplication",
      image: CodingImage,
      style: 'bg-rose-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center p-5',
      text: "lorem ipsum is simply"
    },
    
    {
      id: "4",
      tittle: "AR/VR",
      image: Immersive,
      style: 'bg-sky-100 w-20 h-20  mt-4 mr-2 rounded-lg flex justify-center items-center p-5',
      text: "lorem ipsum is simply"
    },
    
]

  const aboutCard = [
    {
      id: "1",
      image: human1,
      tittle: 'CEO',
      name: 'John Kabras',
    },
    {
      id: "2",
      image: human2,
      tittle: 'COO',
      name: 'Philips shene moris',
    },
    {
      id: "3",
      image: human3,
      tittle: 'Teach Lead',
      name: 'Equarn shamir  mohomad',
    },
    {
      id: "4",
      image: human1,
      tittle: 'UI/UX',
      name: 'Janka indrajith',
    },
    {
      id: "5",
      image: human2,
      tittle: 'Programmer',
      name: 'John Kabras',
    },
    {
      id: "6",
      image: human3,
      tittle: 'Designer',
      name: 'John Kabras',
    },
  ]

  let settings = {
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





  return (
    <>
    <section className='text-left'>
      
      <div className='max-w-[1240px] mx-auto'>
        <div className='flex flex-col lg:flex-row py-16 justify-between items-center'>
          <div className='flex flex-col lg:flex-row px-5 w-full'>
            <img src={gambar1} alt="human/1 " className='' />
          </div>
          <div className='px-4 py-2 '>
            <h3 className='text-xl text-[#1090CB] mb-5'>About Us</h3>
            <h1 className='text-3xl font-semibold leading-tight mb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem.</h1>
            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, corrupti esse quasi deleniti et ipsum.</p>
          </div>
        </div>

        <div className='w-[90%] mx-auto mt-14 flex flex-col md:flex-row gap-5 justify-between'>
          <img src={gambar3} alt="gambar3" className='' />
          <img src={gambar4} alt="gambar4" />
        </div>
        
        <div className='py-28 px-5 '>
          <h1 className='text-[#1090CB] text-3xl font-semibold lg:w-[805px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas.</h1>
          <p className='text-slate-400 lg:w-[1010px] mt-12'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
        </div>

        <div className='pb-28 pt-16'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='lg:w-[500px] px-4 flex flex-col gap-10'>
              <div className='w-[55px] h-[5px] bg-sky-500'></div>
              <h1 className='text-3xl font-semibold'>Lorem Ipsum is simply dummy text of the printing. </h1>
              <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.</p>
              <button type='button' className='border-[#1090CB] border-2 text-[#1090CB] hover:shadow-lg bg-white py-2 px-4 rounded-lg w-[150px] xl:w-[190px]'>Contact Us</button>
            </div>
            <div className='shadow-2xl mt-5  rounded-l-lg grid lg:grid-cols-2 px-16  lg:w-[700px] lg:absolute right-0'>
              {fiturAbout.map((about)=> (
                <div key={about.id} className='flex items-center py-10 '>
                  <img src={about.image} alt="" className={about.style} />
                  <p className='font-semibold lg:text-xl text-md pt-4'>{about.tittle}</p>
                </div>
                
              ))}
            </div>
          </div>

        </div>

        
          <div className='pb-20'>
            <h1 className='font-semibold text-xl px-4 mb-10'>Our Team</h1>
            <Slider {...settings}>
              {aboutCard.map((card)=>(
                <div key={card.id} className='p-5 lg:p-0'>
                  <img src={card.image} className='lg:w-[280px] w-full mb-5' alt="" />
                  <p className='mb-5 text-slate-400'>{card.tittle}</p>
                  <h3 className='font-semibold mb-5'>{card.name}</h3>
                </div>

              ))}

            </Slider>
          </div>
      </div>

    <Subscribe/>
    <Footer/>
    </section>
    </>


  )
}

export default About