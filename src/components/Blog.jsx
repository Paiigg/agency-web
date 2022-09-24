import React from 'react'
import Slider from 'react-slick'
import Subscribe from './Subscribe'
import Footer from './Footer'
import Blog1 from '../img/blog1.png'
import Blog2 from '../img/blog2.png'
import Blog3 from '../img/blog3.png'
import Blog4 from '../img/blog4.png'
import Profile1 from '../img/ellips1.png'
import Profile2 from '../img/ellips2.png'
import Profile3 from '../img/ellips3.png'
import Profile4 from '../img/ellips4.png'

const Blog = () => {

  const settings = {
      dots: false,
      
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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


  const blogCard = [
    {
      id: '1',
      image: Blog2,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the .',
      profile: Profile2,
      name: 'Name here',
      date: '22.09.22'
    },
    {
      id: '2',
      image: Blog3,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the .',
      profile: Profile3,
      name: 'Name here',
      date: '22.09.22'
    },
    {
      id: '3',
      image: Blog4,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the .',
      profile: Profile4,
      name: 'Name here',
      date: '22.09.22'
    },
    {
      id: '4',
      image: Blog2,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the .',
      profile: Profile2,
      name: 'Name here',
      date: '22.09.22'
    },
    {
      id: '5',
      image: Blog3,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the .',
      profile: Profile3,
      name: 'Name here',
      date: '22.09.22'
    },
    {
      id: '6',
      image: Blog4,
      tittle: 'Lorem Ipsum is simply dummy text of the printing.',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the .',
      profile: Profile4,
      name: 'Name here',
      date: '22.09.22'
    },
    
  ]







  return (
    <section>
      <div className='max-w-[1240px] mx-auto px-4'>
        <div className='flex flex-col gap-16 justify-center items-center py-20'>
          <div className='text-center flex flex-col justify-center items-center gap-10'>
            <h1 className='text-4xl font-bold lg:w-[315px]'>Latest News <span className='text-[#1090cb]'>Update</span></h1>
            <p className='text-slate-600'>Lorem Ipsum is simply dummy text of the printing .</p>
          </div>
         
          <div className='w-full lg:w-auto'>
            <input type="text" placeholder='Search' className='lg:w-[400px] w-full  bg-[#1090cb] bg-opacity-10 h-12 rounded-xl px-4 focus:outline-none'/>
              
          </div>
          <div className='grid lg:grid-cols-6 grid-cols-2 gap-10'>
            <div className='bg-[#1090cb] hover:bg-[#1090cb] hover:text-white bg-opacity-10 rounded-full w-[162px] h-[48px] flex justify-center items-center text-[#1090cb]'>
              <p>Lorem Ipsum</p>
            </div>
            <div className='bg-[#1090cb] hover:bg-[#1090cb] hover:text-white bg-opacity-10 rounded-full w-[162px] h-[48px] flex justify-center items-center text-[#1090cb]'>
              <p>Lorem Ipsum</p>
            </div>
            <div className='bg-[#1090cb] hover:bg-[#1090cb] hover:text-white bg-opacity-10 rounded-full w-[162px] h-[48px] flex justify-center items-center text-[#1090cb]'>
              <p>Lorem Ipsum</p>
            </div>
            <div className='bg-[#1090cb] hover:bg-[#1090cb] hover:text-white bg-opacity-10 rounded-full w-[162px] h-[48px] flex justify-center items-center text-[#1090cb]'>
              <p>Lorem Ipsum</p>
            </div>
            <div className='bg-[#1090cb] hover:bg-[#1090cb] hover:text-white bg-opacity-10 rounded-full w-[162px] h-[48px] flex justify-center items-center text-[#1090cb]'>
              <p>Lorem Ipsum</p>
            </div>
            <div className='bg-[#1090cb] hover:bg-[#1090cb] hover:text-white bg-opacity-10 rounded-full w-[162px] h-[48px] flex justify-center items-center text-[#1090cb]'>
              <p>Lorem Ipsum</p>
            </div>
            
            
          </div>

          

        </div>
        <div className='max-w-[1130px] mx-auto pb-20'>
            <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
              <img src={Blog1} alt="blog1" />
              <div>
                <h1 className='font-semibold text-2xl mb-10'>Lorem Ipsum is simply dummy text of the printing.</h1>
                <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the .</p>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-5 items-center'>
                    <img src={Profile1} alt="profile1" />
                    <div>
                      <p className='font-semibold'>Name Here</p>
                      <p className='text-slate-600'>22.09.22</p>
                    </div>
                  </div>
                  <p className='text-[#1090cb]'>Read More</p>
                </div>
              </div>
            </div>

        </div>

        <Slider {...settings}>
              {blogCard.map((card)=>(
                <div key={card.id} className='p-5 lg:p-0'>
                  <img src={card.image} className='lg:w-[350px] w-full mb-5' alt="" />
                  <div className='lg:w-[350px]'>
                    <h3 className='mb-5  font-semibold '>{card.tittle}</h3>
                    <p className=' mb-5 text-slate-600'>{card.text}</p>
                  </div>
                  <div className='flex justify-between items-center lg:w-[350px]'>
                    <div className='flex gap-5 items-center'>
                      <img src={card.profile} alt="profile1" />
                      <div>
                        <p className='font-semibold'>Name Here</p>
                        <p className='text-slate-600'>22.09.22</p>
                      </div>
                    </div>
                  </div>
                </div>

              ))}

        </Slider>

        <Slider {...settings}>
              {blogCard.map((card)=>(
                <div className='py-20'>
                  <div key={card.id} className='p-5  lg:p-0'>
                    <img src={card.image} className='lg:w-[350px] w-full mb-5' alt="" />
                    <div className='lg:w-[350px]'>
                      <h3 className='mb-5  font-semibold '>{card.tittle}</h3>
                      <p className=' mb-5 text-slate-600'>{card.text}</p>
                    </div>
                    <div className='flex justify-between items-center lg:w-[350px]'>
                      <div className='flex gap-5 items-center'>
                        <img src={card.profile} alt="profile1" />
                        <div>
                          <p className='font-semibold'>Name Here</p>
                          <p className='text-slate-600'>22.09.22</p>
                        </div>
                      </div>
                    </div>
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

export default Blog