import React from "react";
import { Link } from "react-router-dom";
import { nowShowing } from "../../utils/data";
import ticketImg from "../../assets/ticket.svg";
import eyeIcon from "../../assets/eye-icon.svg";

const NowShowoing = () => {
  return (
    <div className="bg-black pt-[80px] pb-[96px] ">
      <div className="max-w-[1280px] w-full mx-auto">
        <h1 className="text-white text-[36px] font-bold text-center mb-[36px]">
          Now Showing
        </h1>

        <div className="grid grid-cols-12 gap-5">
          {nowShowing.map((showItem, index) => (
            <div className="col-span-12 lg:col-span-3 lg:mb-0 mb-6" key={index}>
              <div className="relative parant">
                <Link to="/movie-details">
                  <img
                    className="w-full"
                    src={showItem.movePoster}
                    alt={showItem.movieName}
                  />
                </Link>

                <div className="bottom-[24px] left-[16px] absolute">
                  <p className="hover_txt text-[24px] hover:text-primary text-white font-bold pb-2">
                    {showItem.movieName}
                  </p>
                  <button className="p-2 text-xs font-semibold bg-clr_12 rounded text-white flex items-center gap-2">
                    <img src={ticketImg} alt="ticket" />
                    Get Tickets
                  </button>
                </div>

                <div className="w-full h-full backdrop-filter backdrop-blur-md absolute top-0 left-0 child cursor-pointer px-5 rounded-lg ">
                  <div className="absolute bottom-6">
                    <h2 className="text-clr_09 text-2xl font-semibold pb-2">
                      {showItem.movieName}
                    </h2>

                    <p className="text-base font-normal text-clr_f0 pb-2">
                      Released: {showItem.movieRelesedDate}
                    </p>

                    <p className="text-base font-normal text-clr_f0 pb-2">
                      {showItem.movieDuration} • {showItem.type} •
                      {showItem.category}
                    </p>

                    <div className="btn_group flex items-center gap-2">
                      <button className="p-2 text-sm font-semibold bg-clr_12 rounded text-white flex items-center gap-2">
                        <img src={ticketImg} alt="ticket" />
                        Get Tickets
                      </button>
                      <button className="p-2 text-sm font-semibold bg-clr_12 rounded text-white flex items-center gap-2">
                        <img src={eyeIcon} alt="ticket" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NowShowoing;
