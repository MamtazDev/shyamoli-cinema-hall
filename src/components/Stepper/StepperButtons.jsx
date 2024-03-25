import React from "react";

const StepperButtons = ({ children, onNext }) => {
  return (
    <>
      <div className="py-10">
        <button
          onClick={onNext}
          className="w-full bg-clr_12 hover:bg-transparent hover:text-white border border-transparent hover:border-clr_12 rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base">
          {children}
        </button>
      </div>
    </>
  );
};

export default StepperButtons;
