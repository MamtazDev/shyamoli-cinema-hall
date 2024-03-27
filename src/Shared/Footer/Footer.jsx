import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/footerLogo.png";
export const Footer = () => {
  const thisYear = new Date();
  return (
    <>
      <div className="bg-[#100425] pt-[80px] pb-[48px] text-white ">
        <div className="max-w-[1280px] w-full mx-auto ">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center mb-[36px]  lg:mx-0 mx-[20px]">
            <div className="flex flex-col items-start justify-center gap-[32px] ">
              <img src={logo} alt="logo" />
              <ul className="flex gap-[32px] text-base ">
                <li>
                  <Link to={"/show-time"}>Show Time</Link>
                </li>
                <li>
                  <Link to={"/booking"}>Booking</Link>
                </li>
                <li>
                  <Link to={"/about-us"}>About Us</Link>
                </li>
              </ul>
            </div>
            <div className="text-start lg:pt-0  pt-[30px]">
              <p className="text-sm font-semibold mb-[16px]">Stay up to date</p>
              <div className="flex lg:flex-row items-start gap-[16px]">
                <input
                  type="email"
                  className="bg-white focus-visible:outline-none text-[#667085] h-[40px] px-[14px] shadow-input rounded-[8px] border border-[#D0D5DD] "
                  placeholder="Enter your email"
                  name=""
                  id=""
                />
                <button className="text-white max-w-[200px] text-sm px-[16px] w-full bg-clr_12 hover:border-white hover:bg-transparent border border-clr_12 shadow-button lg:py-[9px] py-[9px] rounded-[8px] transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#153107] mb-[32px]"></div>
          <div className="flex lg:justify-between  lg:mx-0 mx-[20px] justify-center lg:items-start text-base lg:flex-row flex-col text-[#E2E8F0] lg:gap-0 gap-[30px]">
            <p className="text-base font-normal text-[#CBD5E1]">
              <Link
                className="mr-1 cursor-text"
                to={"https://iamashiqur.vercel.app/"}
                target="_blank">
                ©
              </Link>
              {thisYear.getFullYear()} Shymoli Cinema Hall. All rights reserved.
            </p>
            <ul className="flex gap-[16px] text-base font-normal">
              <Link to="/terms">
                <li>Terms</li>
              </Link>
              <Link to="/privacy">
                <li>Privacy</li>
              </Link>
              <Link to="/cookies">
                <li>Cookies</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
