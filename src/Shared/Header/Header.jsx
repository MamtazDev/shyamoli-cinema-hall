import React from 'react'

import logo from '../../assets/logo.png'


const Header = () => {

  // lg:left-[16%] fixed top-0 z-30
  return (
    <div className='absolute z-50 w-full'>
      <div className={`w-full text-white  `} >
        <div className="navbar  mx-auto h-[82px] max-w-[1280px] ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="justify-end btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#">Home</a></li>
                <li><a href="#">Show Times</a></li>
                <li><a href="#">Buy Tickets</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#" className="border border-[#FF3D48] bg-[#FF3D48] hover:text-[#FF3D48] hover:border-[#FF3D48] hover:bg-transparent px-[16px] py-[10px] rounded-[8px] shadow-button"> Get Started</a></li>
              </ul>
            </div>
            <a className="text-xl btn btn-ghost">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-end ">
            <ul className="lg:flex hidden gap-[24px] text-base  font-semibold ">
              <li><a href="#">Home</a></li>
              <li><a href="#">Show Times</a></li>
              <li><a href="#">Buy Tickets</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#" className="border border-[#FF3D48] bg-[#FF3D48] hover:text-[#FF3D48] hover:border-[#FF3D48] hover:bg-transparent px-[16px] py-[10px] rounded-[8px] shadow-button " > Get Started</a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header