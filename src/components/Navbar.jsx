import React,{useState, useEffect} from 'react'
import {BiMenu, BiX} from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const NavList = [
        {
         tittle: "Home",
         link: "/",
        },
        {
         tittle: "About Us",
         link: "/about",
        },
        {
         tittle: "Services",
         link: "/service",
        },
        {
         tittle: "Blog",
         link: "/blog",
        },
        {
         tittle: "Contact Us",
         link: "/contact",
        }
        
    ]
    const [nav, setNav] = useState(false)
    

    const handleNav = () => {
        setNav(!nav);
    };
   

  return (
    <header className='sticky top-0 w-full bg-white z-10'>
        <nav className='shadow-md '>
            <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4'>
                <Link to='/'  className='text-xl font-bold text-[#1090CB]'>LOGOIPSUM</Link>
                <ul  className='hidden md:flex '>
                    
                {NavList.map((list,index)=> (
                    <li   className='p-4 hover:text-[#1090CB]'  key={index}>
                        <Link to={list.link} >{list.tittle}</Link>
                    </li>
                ))}
                </ul>
                <div  onClick={handleNav} className='block md:hidden'>
                    {nav ? <BiX size={30}/> : <BiMenu size={30}/>} 
                </div>
                <div className={nav ? 'fixed top-12 right-0 mt-6 text-left w-[60%] shadow-lg rounded ease-in-out duration-500 bg-white z-50' : 'fixed right-[-100%] mt-6 '}>
                    <ul className='p-4 uppercase'>
                    {NavList.map((list,index)=> (
                    <li className='p-4 font-semibold' key={index}>
                        <Link to={list.link}>{list.tittle}</Link>
                    </li>
                    ))}
                    </ul>

                </div>
                

            </div>

        </nav>
    </header>
    
  )
}

export default Navbar

