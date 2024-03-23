import React from "react";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.svg";

const Connect = () => {
  return (
    <>
      <div className="connect_page ">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:mx-0 mx-[24px]">
          <div className="text-white text-base font-medium flex flex-col lg:px-0 px-[20px] gap-[12px] lg:w-[487px] w-full lg:mb-0 mb-[50px] ">
            <h3 className="text-white text-[36px] font-bold mb-[24px]">
              Let’s connect
            </h3>
            <div className="flex items-center  gap-[12px]">
              <img src={phone} alt="" />
              <p>02-581-51-775</p>
            </div>
            <div className="flex items-center gap-[12px]">
              <img src={email} alt="" />
              <p>shyamolicinema@gmail.com</p>
            </div>
            <div className="flex  items-center gap-[12px]">
              <img src={location} alt="" />
              <p>Shymoli Square Shopping Mall, Mirpur Rd, Dhaka</p>
            </div>
          </div>

          <form className="lg:p-[40px] p-[20px] lg:mx-0 mx-[20px]  contact_form  flex flex-col gap-[24px] text-white ">
            <div className="flex flex-col gap-[4px] lg:w-[488px] w-[100%]">
              <label className="text-sm text-[#E2E8F0]">Your name</label>
              <input
                type="text"
                className="ps-[10px]  bg-transparent border rounded-[6px] h-[48px] border-[#CBD5E1] "
              />
            </div>
            <div className="flex flex-col gap-[4px] lg:w-[488px] w-[100%]">
              <label className="text-sm text-[#E2E8F0]  ">Email address</label>
              <input
                type="email"
                className="ps-[10px]  bg-transparent border rounded-[6px] h-[48px] border-[#CBD5E1] "
              />
            </div>
            <div className="flex flex-col gap-[4px] lg:w-[488px] w-[100%]">
              <label className="text-sm text-[#E2E8F0]">Phone number</label>
              <input
                type="number"
                className="ps-[10px]  bg-transparent border rounded-[6px] h-[48px] border-[#CBD5E1] "
              />
            </div>
            <div className="flex flex-col gap-[4px] lg:w-[488px] w-[100%]">
              <label className="text-sm text-[#E2E8F0]">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="ps-[10px]  bg-transparent border rounded-[6px] h-[112px] border-[#CBD5E1]"></textarea>
            </div>
            <button className="text-white max-w-[200px] w-full bg-clr_12 border border-clr_12 hover:bg-transparent hover:text-white shadow-button py-[12px] rounded-[8px] ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Connect;
