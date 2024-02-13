import React from 'react'

import logo from '../../assets/logo.png'
import bar from '../../assets/bar.svg'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className='absolute z-50 w-full'>
      <div className={`w-full text-white  ${location.pathname =='/' ? "" :"bg-[#1b1b1b]"} `} >
        <div className="navbar lg:flex  mx-auto h-[82px] lg:max-w-[1280px] w-full ">
          <div className="flex flex-row-reverse justify-between lg:flex-row lg:navbar-start sm:flex-row">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex justify-end btn btn-ghost lg:hidden">
              
              <img src={bar} alt="" />
              </div>
              <ul tabIndex={0} className="absolute right-[10px] flex justify-center items-center gap-[20px] bg-primary menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-[400px] ">
                <li><Link to="/">Home </Link></li>
                <li><Link to="/buyTickets">Buy Tickets</Link></li>
                <li><Link to="/gallary">Gallery</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
                <li><Link to="/downloadTicket" className="border border-[#FF3D48] bg-[#FF3D48] hover:text-[#FF3D48] hover:border-[#FF3D48] hover:bg-transparent px-[16px] py-[10px] rounded-[8px] shadow-button"> Get Started</Link></li>
              </ul>
            </div>
            <Link to="/" className="text-xl btn btn-ghost">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-end ">
            <ul className="lg:flex hidden gap-[24px] text-base  font-semibold ">
              <li><Link to="/" className=''>Home {pathname == "/" && <div className='border border-[#FF3D48] h-[2px] mt-[8px]' ></div>}</Link></li>
              <li><Link to="/buyTickets">Buy Tickets {pathname == "/buyTickets" && <div className='border border-[#FF3D48] h-[2px] mt-[8px]' ></div>}</Link></li>
              <li><Link to="/gallary">Gallery {pathname == "/gallary" && <div className='border border-[#FF3D48] h-[2px] mt-[8px]' ></div>}</Link></li>
              <li><Link to="/contactUs">Contact Us {pathname == "/contactUs" && <div className='border border-[#FF3D48] h-[2px] mt-[8px]' ></div>}</Link></li>
              <li><Link to="/downloadTicket" className="border border-[#FF3D48] bg-[#FF3D48] hover:text-[#FF3D48] hover:border-[#FF3D48] hover:bg-transparent px-[16px] py-[10px] rounded-[8px] shadow-button " > Get Started</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header