/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../../assets/back.svg";
import markMovie from "../../assets/mark.svg";
import show from "../../assets/selectMovie.png";
import selected from "../../assets/selectmovieIcon.png";
import AvailAbleMovieTime from "./AvailAbleMovieTime";
import DateSelect from "./DateSelect";
import "./SelectMovie.css";
import StepperButtons from "./StepperButtons";

const SelectMovie = ({ complete, handleNext }) => {
  const [selectMovie, setSelectMovie] = useState(false);
  const handleSelect = () => {
    setSelectMovie(!selectMovie);
  };

  return (
    <>
      <div className="mt-[36px] pb-[80px] lg:mx-0 mx-[24px]">
        <Link to="/movie-details">
          <button className="text-lg border-0  mb-[32px] flex gap-[4px] ">
            <img src={back} alt="back" /> <p>Back</p>{" "}
          </button>
        </Link>
        <div className="header flex justify-between items-center pb-10">
          <h2 className="text-primary text-[30px] font-bold leading-[30px]">
            Select Movie
          </h2>
          <p className="text-xl font-semibold text-white flex items-center gap-4">
            <img src={markMovie} alt="mark" />2 Selected
          </p>
        </div>

        {[1].map((data) => (
          <>
            <div
              key={data}
              className="grid grid-cols-12 gap-[32px] border-b border-b-clr_26 pb-9">
              <div
                onClick={handleSelect}
                className="col-span-12 lg:col-span-3 ">
                <div
                  className={` border-[2px]  rounded-[20px] cursor-pointer ${
                    selectMovie ? "border-clr_12 " : "border-transparent"
                  } relative lg:h-[440px] h-full`}>
                  <img className="w-full" src={show} alt="show" />
                  <div className="absolute right-[-3px] top-[-2px] w-[80px] flex justify-center items-center">
                    {selectMovie && <img src={selected} alt="selected" />}
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <div>
                  <div className="p-[24px] bg-[#1A1A1A] rounded-[12px] border border-[#262626] ">
                    <h2 className="mb-[8px] text-[24px] font-bold leading-[32px] ">
                      MR-9: Do or Die{" "}
                    </h2>
                    <p className="text-base font-normal   leading-[24px] text-[#F1F5F980] flex gap-[16px]">
                      Movie • Thriller/Mystery <span>2h 15m</span>
                    </p>
                  </div>
                  <DateSelect />
                  <AvailAbleMovieTime />
                </div>
              </div>
            </div>
          </>
        ))}
        {!complete && (
          <StepperButtons onNext={handleNext}>Purchase Now</StepperButtons>
        )}
      </div>
    </>
  );
};

export default SelectMovie;
