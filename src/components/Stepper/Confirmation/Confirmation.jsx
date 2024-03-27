/* eslint-disable react/prop-types */
import React from "react";
import qr from "../../../assets/qr.svg";
import success from "../../../assets/success.png";
import ticketLogo from "../../../assets/ticket_logo.svg";
import ticketThumbnail from "../../../assets/ticket_thumbnail.png";
import qr_small from "../../../assets/qr_small.svg";

const Confirmation = () => {
  return (
    <>
      <div className="mt-[32px]">
        <h2 className="text-primary text-[30px] font-bold leading-[30px] mb-[36px] ">
          Booking Confirmation
        </h2>

        <div className="p-8 bg-[#1A1A1A] border border-[#262626] rounded-[12px] mb-[36px]">
          <div className="flex flex-col items-center">
            <div className="">
              <img src={success} alt="" />
            </div>
            <h2 className="text-[30px] font-bold leading-[36px] text-center ">
              Congratulations
            </h2>
            <p className="text-lg font-normal leading-[28px] text-center text-[#FFFFFFB7] mt-[9px]">
              You’ve successfully purchase tickets
            </p>
          </div>
        </div>

        <div className="p-8 bg-[#1A1A1A] border border-[#262626] rounded-[12px] mb-[36px]">
          <div className="max-w-[463px] mx-auto w-full rounded-[20px] bg-[#25282e] py-6 px-10">
            <div className="ticket_logo mb-4 flex justify-center pb-1">
              <img src={ticketLogo} alt="ticket-logo" />
            </div>

            <div className="ticket_info">
              <h2 className="text-xl font-bold leading-[36px] text-center pb-1">
                MOVIE TICKET
              </h2>

              <p className="text-base font-normal text-[#F8FAFC] text-center pb-1">
                Premium Ticket
              </p>

              <p className="text-base font-normal text-[#F8FAFC] text-center pb-6">
                Seat : F1
              </p>

              <div className="qr flex justify-center pb-3">
                <img src={qr} alt="qr" />
              </div>

              <p className="text-base font-normal text-[#F8FAFC] text-center">
                WPFR234
              </p>

              <div className="h-[1px] bg-[#FFFFFF29] my-[40px]"> </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="ticket_thumbnail flex items-center gap-3 pb-3">
                <div className="ticket_thumbnail_img">
                  <img src={ticketThumbnail} alt="ticket_thumbnail" />
                </div>
                <div className="move_info">
                  <p className="text-xs font-semibold text-white">
                    Mr-9 : Do or Die
                  </p>
                  <p className="text-sm font-normal text-[#DCDCDC]">
                    Shymoli Cinama Hall
                  </p>
                </div>
              </div>

              <div className="ticket_info_wrapper flex items-end justify-between">
                <div className="ticket_info">
                  <div className="pb-3">
                    <p className="text-[#9A9A9A]  text-sm font-normal leading-[20px] mb-[4px]">
                      Name
                    </p>
                    <p className=" text-sm font-normal leading-[20px]">
                      Md. Rashed
                    </p>
                  </div>

                  <div className="pb-3">
                    <p className="text-[#9A9A9A]  text-sm font-normal leading-[20px] mb-[4px]">
                      Session
                    </p>
                    <p className=" text-sm font-normal leading-[20px]">
                      1h 45m - 24/01/2024
                    </p>
                  </div>

                  <div>
                    <p className="text-[#9A9A9A]  text-sm font-normal leading-[20px] mb-[4px]">
                      Seat Number
                    </p>
                    <p className=" text-sm font-normal leading-[20px]">F1</p>
                  </div>
                </div>

                <div className="qr_small flex flex-col gap-10">
                  <p className="text-base font-semibold -rotate-90">WPFR235</p>
                  <img src={qr_small} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px]  ">
            <button className="max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base mb-[62px]">
              Download Ticket
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Confirmation;
