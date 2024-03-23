import React, { useRef } from "react";
import CenterMode from "./CenterMode";

const Gallary = () => {
  const ref = useRef();
  return (
    <>
      <div className="bg-black pb-[80px] pt-[80px] ">
        <h1 className="text-white text-[36px] font-bold text-center mb-[36px]">
          Our Gallery
        </h1>
        <CenterMode />
      </div>
    </>
  );
};

export default Gallary;
