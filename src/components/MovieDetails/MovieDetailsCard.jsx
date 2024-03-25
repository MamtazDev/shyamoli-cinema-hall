/* eslint-disable react/no-unescaped-entities */
import React from "react";
import available from "../../assets/available.png";
import Cast from "./Cast";
import { Link } from "react-router-dom";

const MovieDetailsCard = () => {
  return (
    <>
      <div className="flex flex-col gap-[32px]">
        <div className="p-[24px] bg-[#1A1A1A] text-white border border-[#262626] rounded-[12px] ">
          {/* <h4 className="text-[24px] font-bold leading-[32px] mb-[12px]  ">
            MR-9: Do or Die{" "}
          </h4>
          <p className="text-base font-normal   leading-[24px] text-[#F1F5F9] flex gap-[16px] mb-[24px]">
            Movie • Thriller/Mystery <span>2h 15m</span>
          </p> */}
          <div>
            <h6 className="text-lg text-[#999] mb-[12px]">Description</h6>
            <p className="text-lg font-normal leading-[28px] text-white ">
              Masud Rana is a Secret Agent with code name MR-9 of the Bangladesh
              Counter Intelligence Agency, for over 55 years has appeared in the
              widely popular novels written by Qazi Anwar Husain, with over 550
              and counting novels published in the series to date by his
              publishing company Sheba Prokashoni. This film is adapted from the
              original first novel "Masud Rana: Dhonghsho Pahar" (Demolition
              Hill)
            </p>
          </div>
        </div>

        {/*  */}
        <div className="p-[24px] bg-[#1A1A1A] text-white border border-[#262626] rounded-[12px] flex flex-col gap-[24px]">
          {/* <div>
            <h6 className="text-lg text-[#999] mb-[12px] flex gap-[4px] items-center">
              <img src={date} alt="" /> Released Year
            </h6>
            <p className="text-[20px] font-medium leading-[28px] text-white ">
              2023
            </p>
          </div> */}

          <div>
            <h6 className="text-lg text-[#999] mb-[12px] flex gap-[4px] items-center">
              <img src={available} alt="" /> Available Languages
            </h6>
            <div className="flex gap-[10px] items-center">
              <button className="py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] ">
                English
              </button>
              <button className="py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] ">
                Bangla
              </button>
              <button className="py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] ">
                Hindi
              </button>
            </div>
          </div>
          {/* rating */}
          {/* <div>
            <h6 className="text-lg text-[#999] mb-[12px] flex gap-[4px] items-center">
              <img src={greyStar} alt="greystar" />
              Ratings
            </h6>
            <div className=" bg-[#141414] border border-[#262626] rounded-[8px] p-[16px]  text-lg text-medium leading-[28px] ">
              <p>IMDb</p>
              <div className="flex gap-[2px] items-center ">
                <img src={redStar} alt="redStar" />
                <img src={redStar} alt="redStar" />
                <img src={redStar} alt="redStar" />
                <img src={redStar} alt="redStar" />
                <img src={halfStar} alt="redStar" />
                <p>4.5</p>
              </div>
            </div>
          </div> */}
          {/*  */}
          {/* <div>
            <h6 className="text-lg text-[#999] mb-[12px] flex gap-[4px] items-center">
              <img src={gernes} alt="" />
              Gernes
            </h6>
            <div className="flex gap-[10px] items-center">
              <button className="py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] ">
                Action
              </button>
              <button className="py-[8px] px-[14px] bg-[#141414] border border-[#262626] rounded-[8px] text-lg text-normal leading-[28px] ">
                Adventure
              </button>
            </div>
          </div> */}
        </div>

        {/* cast */}
        <div className="p-[24px] bg-[#1A1A1A] text-white border border-[#262626] rounded-[12px] flex flex-col gap-[24px] ">
          <Cast />
        </div>

        {/* available show time */}

        <div className="available_showtime">
          <div className="pb-6">
            <p className="text-lg text-[#999] font-normal leading-[28px]  ">
              Available Show Time
            </p>
          </div>
          <div className="bnt_grup flex gap-4">
            <button className="text-clr_4f hover:text-black hover:bg-white border hover:border-transparent border-clr_4f px-5 py-[14px] text-lg rounded transition-all duration-300">
              12:00 PM
            </button>
            <button className="text-clr_4f hover:text-black hover:bg-white border hover:border-transparent border-clr_4f px-5 py-[14px] text-lg rounded transition-all duration-300">
              12:00 PM
            </button>
            <button className="text-clr_4f hover:text-black hover:bg-white border hover:border-transparent border-clr_4f px-5 py-[14px] text-lg rounded transition-all duration-300">
              12:00 PM
            </button>
            <button className="text-clr_4f hover:text-black hover:bg-white border hover:border-transparent border-clr_4f px-5 py-[14px] text-lg rounded transition-all duration-300">
              12:00 PM
            </button>
          </div>
        </div>
        {/* available show time end*/}

        <Link
          to="/buyTickets"
          className="bg-clr_12 block text-center hover:bg-transparent border border-clr_12 hover:border-white hover:text-white py-[16px] w-full rounded-[8px] shadow-button text-white text-lg font-semibold ">
          Get Ticket
        </Link>
      </div>
    </>
  );
};

export default MovieDetailsCard;
