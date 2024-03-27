import React from "react";
import selectMovie from "../../../assets/selectMovie.png";
import i1 from "../../../assets/i1.png";
import i2 from "../../../assets/i2.png";
import i3 from "../../../assets/i4.svg";
import i4 from "../../../assets/i6.png";
import i5 from "../../../assets/i5.png";
import amount from "../../../assets/amount.svg";
import StepperButtons from "../StepperButtons";
import { ticketSummery } from "../../../utils/data";

const TicketSummary = ({ complete, handleNext }) => {
  return (
    <>
      <div className="mt-[32px]">
        <h2 className="text-primary text-[30px] font-bold leading-[30px] mb-[36px] ">
          Ticket Summary
        </h2>

        <div className="p-[32px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px] flex justify-between">
          {ticketSummery.map((ts_data, index) => (
            <div className="lg:max-w-[567px] w-full" key={index}>
              {/* ticekt summery */}
              <div className="p-[24px] border border-[#FFFFFF21] rounded-[8px] ">
                <div className="flex gap-[32px] items-start">
                  <img
                    className="h-[258px]"
                    src={selectMovie}
                    alt="selectMovie"
                  />
                  <div className="w-full">
                    <div className="flex items-center justify-between h-[40px]">
                      <div className="flex items-center  gap-[8px]">
                        <img src={i1} alt="" />
                        <p className="text-[#E2E8F0] text-sm font-normal leading-[20px] ">
                          Movie Name
                        </p>
                      </div>
                      <p className="text-clr_09 text-sm font-medium leading-[20px]">
                        {ts_data.movieName}
                      </p>
                    </div>
                    <div className="h-[1px] bg-[#2E2E2E] w-full my-[4px]"></div>

                    {/* duration */}

                    <div className="flex items-center justify-between h-[40px]">
                      <div className="flex items-center  gap-[8px]">
                        <img src={i2} alt="" />
                        <p className="text-[#E2E8F0] text-sm font-normal leading-[20px] ">
                          Durations
                        </p>
                      </div>
                      <p className="text-clr_09 text-sm font-medium leading-[20px]">
                        {ts_data.durations}
                      </p>
                    </div>
                    <div className="h-[1px] bg-[#2E2E2E] w-full my-[4px]"></div>

                    <div className="flex items-center justify-between h-[40px]">
                      <div className="flex items-center  gap-[8px]">
                        <img src={i1} alt="" />
                        <p className="text-[#E2E8F0] text-sm font-normal leading-[20px] ">
                          Show Date
                        </p>
                      </div>
                      <p className="text-clr_09 text-sm font-medium leading-[20px]">
                        {ts_data.showDate}
                      </p>
                    </div>
                    <div className="h-[1px] bg-[#2E2E2E] w-full my-[4px]"></div>

                    <div className="flex items-center justify-between h-[40px]">
                      <div className="flex items-center  gap-[8px]">
                        <img src={i2} alt="" />
                        <p className="text-[#E2E8F0] text-sm font-normal leading-[20px] ">
                          Show Time
                        </p>
                      </div>
                      <p className="text-clr_09 text-sm font-medium leading-[20px]">
                        {ts_data.showTime}
                      </p>
                    </div>
                    <div className="h-[1px] bg-[#2E2E2E] w-full my-[4px]"></div>

                    <div className="flex items-center justify-between h-[40px]">
                      <div className="flex items-center  gap-[8px]">
                        <img src={i3} alt="" />
                        <p className="text-[#E2E8F0] text-sm font-normal leading-[20px] ">
                          Seat Type
                        </p>
                      </div>
                      <p className="text-clr_09 text-sm font-medium leading-[20px]">
                        {ts_data.seatType}
                      </p>
                    </div>
                    <div className="h-[1px] bg-[#2E2E2E] w-full my-[4px]"></div>

                    <div className="flex items-center justify-between h-[40px]">
                      <div className="flex items-center  gap-[8px]">
                        <img src={i4} alt="" />
                        <p className="text-[#E2E8F0] text-sm font-normal leading-[20px] ">
                          Seat Number
                        </p>
                      </div>
                      <p className="text-clr_09 text-sm font-medium leading-[20px]">
                        {ts_data.seatType}
                      </p>
                    </div>
                    <div className="h-[1px] bg-[#2E2E2E] w-full my-[4px]"></div>

                    <div className="flex items-center justify-between h-[40px]">
                      <div className="flex items-center  gap-[8px]">
                        <img src={i5} alt="" />
                        <p className="text-[#E2E8F0] text-sm font-normal leading-[20px] ">
                          Ticket Prize
                        </p>
                      </div>
                      <p className="text-clr_09 text-sm font-medium leading-[20px]">
                        {ts_data.ticketPrize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-[24px] border border-[#FFFFFF21] rounded-[8px] my-[32px] flex justify-between ">
          <div className="flex gap-[8px] items-center">
            <img src={amount} alt="" />
            <p className="text-sm font-normal leading-[20px] text-[#E2E8F0]">
              Total Amount
            </p>
          </div>
          <p className="text-clr_09 text-2xl font-bold leading-[20px]">
            600 tk
          </p>
        </div>

        {!complete && (
          <StepperButtons onNext={handleNext}>Confirm Purchase</StepperButtons>
        )}
      </div>
    </>
  );
};

export default TicketSummary;
