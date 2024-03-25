import React, { useState } from "react";
import slectTicket from "../../../assets/premium.png";

const TicketType = ({
  selectPremium,
  selectDeluxe,
  handleSelectPremium,
  handleSelectDeluxe,
}) => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-[32px]">
        <button
          onClick={handleSelectPremium}
          className={`flex items-center gap-4 w-[485px] ${
            selectPremium === true
              ? "border-2 border-transparent bg-white"
              : "border-2 border-clr_bc "
          } py-10 px-12 rounded-lg`}>
          {selectPremium === true ? (
            <img src={slectTicket} alt="select-ticket" />
          ) : (
            <div className="w-[30px] h-[30px] bg-gray-800 rounded-full"></div>
          )}

          <div className="flex items-center justify-between gap-[100px] ">
            <h2
              className={`${
                selectPremium === true ? "text-black" : "text-white"
              } font-semibold text-[30px]`}>
              Premium
            </h2>
            <p
              className={`${
                selectPremium === true ? "text-black" : "text-white"
              } text-lg font-medium`}>
              BDT 300 TK
            </p>
          </div>
        </button>

        <button
          onClick={handleSelectDeluxe}
          className={`flex items-center gap-4 w-[485px] ${
            selectDeluxe === true
              ? "border-2 border-transparent bg-white"
              : "border-2 border-clr_bc "
          } py-10 px-12 rounded-lg`}>
          {selectDeluxe === true ? (
            <img src={slectTicket} alt="select-ticket" />
          ) : (
            <div className="w-[30px] h-[30px] bg-gray-800 rounded-full"></div>
          )}

          <div className="flex items-center justify-between gap-[100px] ">
            <h2
              className={`${
                selectDeluxe === true ? "text-black" : "text-white"
              } font-semibold text-[30px]`}>
              Deluxe
            </h2>
            <p
              className={`${
                selectDeluxe === true ? "text-black" : "text-white"
              } text-lg font-medium`}>
              BDT 300 TK
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TicketType;
