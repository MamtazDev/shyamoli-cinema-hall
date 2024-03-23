import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export const Footer = () => {
  return (
    <>
      <div className="bg-[#100425] pt-[80px] pb-[48px] text-white ">
        <div className="max-w-[1280px] w-full mx-auto ">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center mb-[36px]  lg:mx-0 mx-[20px]">
            <div className="flex flex-col items-start justify-center gap-[32px] ">
              <img src={logo} alt="logo" />
              <ul className="flex gap-[32px] text-base ">
                <li>Show Time</li>
                <li>Booking</li>
                <li>About Us</li>
              </ul>
            </div>
            <div className="text-start lg:pt-0  pt-[30px]">
              <p className="text-sm font-semibold mb-[16px]">Stay up to date</p>
              <div className="flex lg:flex-row items-start gap-[16px]">
                <input
                  type="email"
                  className="bg-white h-[40px] px-[14px] shadow-input rounded-[8px] border border-[#D0D5DD] "
                  placeholder="Enter your email"
                  name=""
                  id=""
                />
                <button className="text-white max-w-[200px] text-sm px-[16px] w-full bg-clr_12 border border-clr_12 shadow-button lg:py-[9px] py-[9px] rounded-[8px] ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#153107] mb-[32px]"></div>
          <div className="flex lg:justify-between  lg:mx-0 mx-[20px]   justify-center lg:items-start text-base  lg:flex-row flex-col  text-[#E2E8F0] lg:gap-0 gap-[30px]">
            <p className="">© 2024 Shymoli Cinema Hall. All rights reserved.</p>
            <ul className="flex gap-[16px] text-base font-normal">
              <Link to="#">
                {" "}
                <li>Show Time</li>
              </Link>
              <Link to="#">
                {" "}
                <li>Booking</li>
              </Link>
              <Link to="#">
                {" "}
                <li>About Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
