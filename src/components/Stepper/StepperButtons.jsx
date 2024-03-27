import React from "react";

const StepperButtons = ({ children, onNext, paddingY }) => {
  return (
    <>

        <button
          onClick={onNext}
          className="w-full bg-clr_12 hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-all duration-300 rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base">
          {children}
        </button>

    </>
  );
};

export default StepperButtons;
