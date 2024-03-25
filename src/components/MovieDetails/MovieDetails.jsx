import React from "react";
import show3 from "../../assets/movied1.png";
import star from "../../assets/star.svg";
import halfStar from "../../assets/starHelf.svg";
import "./MovieDetails.css";
import MovieDetailsCard from "./MovieDetailsCard";

const MovieDetails = () => {
  return (
    <div>
      <div className="bg-[#141414]">
        <div className="max-w-[1280px] w-full mx-auto pt-[160px] pb-[80px] ">
          <p className="text-primary text-[30px] font-bold  mb-[36px]  lg:mx-0 mx-[24px] ">
            Movie Details{" "}
          </p>

          <div className="grid grid-cols-12 gap-[32px]  lg:mx-0 mx-[24px]">
            <div className="col-span-12 lg:col-span-4">
              <div className="p-[24px] bg-[#1A1A1A]">
                <div className="movie_poster">
                  <img className="mb-[24px] w-full" src={show3} alt="" />
                </div>
                <div className="movie_details p-6 border border-clr_26 rounded-xl">
                  <p className="text-clr_1e text-2xl font-bold pb-3">
                    MR-9: Do or Die
                  </p>

                  <div className="flex flex-wrap items-center gap-2 bg-[#141414] text-white text-lg text-medium leading-[28px] pb-3">
                    <p>IMDb :</p>
                    <div className="flex gap-[2px] items-center ">
                      <img src={star} alt="redStar" />
                      <img src={star} alt="redStar" />
                      <img src={star} alt="redStar" />
                      <img src={star} alt="redStar" />
                      <img src={halfStar} alt="redStar" />
                    </div>
                    <p>8.5/10</p>
                  </div>

                  <div className="movie_type flex flex-wrap gap-2 pb-6">
                    <p className="text-base font-normal border border-[#262626] rounded-lg py-2 px-[14px] text-[#F1F5F9]">
                      Action
                    </p>
                    <p className="text-base font-normal border border-[#262626] rounded-lg py-2 px-[14px] text-[#F1F5F9]">
                      Drama
                    </p>
                    <p className="text-base font-normal border border-[#262626] rounded-lg py-2 px-[14px] text-[#F1F5F9]">
                      Thriller
                    </p>
                  </div>

                  <table className="w-full">
                    <tr>
                      <td className="pb-3">
                        <p className="text-lg text-clr_99 font-normal">
                          Director
                        </p>
                      </td>
                      <td className="pb-3">
                        <p className="text-lg font-medium text-white">
                          Asif Akbar
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pb-3">
                        <p className="text-lg text-clr_99 font-normal">
                          Duration
                        </p>
                      </td>
                      <td className="pb-3">
                        <p className="text-lg font-medium text-white">
                          2 hours 39 minutes
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="pb-3">
                        <p className="text-lg text-clr_99 font-normal">
                          Released Date
                        </p>
                      </td>
                      <td className="pb-3">
                        <p className="text-lg font-medium text-white">
                          8 November, 2023
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <MovieDetailsCard />
            </div>
          </div>
        </div>
      </div>
      {/* <UpComingShow /> */}
    </div>
  );
};

export default MovieDetails;
