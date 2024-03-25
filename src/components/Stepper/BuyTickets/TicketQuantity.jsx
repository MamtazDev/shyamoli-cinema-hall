import React, { useState } from "react";

const TicketQuantity = () => {
  const [count, setCount] = useState(2);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="p-[24px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px] mt-[32px]">
        <div className="text-center text-[24px] font-semibold mb-[24px] ">
          <p>Ticket Quantity</p>
        </div>
        <div className="mx-auto p-[6px] border border-[#3C3C3C] rounded-[12px]  w-[174px] flex gap-[16px] items-center justify-between ">
          <button
            className="p-[14px] border border-[#1F1F1F] bg-[#323232] rounded-[8px]"
            onClick={decrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none">
              <path d="M5.5 11.8481V13.8481H19.5V11.8481H5.5Z" fill="#F8FAFC" />
            </svg>
          </button>

          <p className="bg-transparent">{count}</p>

          <button
            className="p-[14px] border border-[#1F1F1F] bg-[#323232] rounded-[8px]"
            onClick={increment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none">
              <path
                d="M11.5 11.8481V5.84814H13.5V11.8481H19.5V13.8481H13.5V19.8481H11.5V13.8481H5.5V11.8481H11.5Z"
                fill="#F8FAFC"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default TicketQuantity;
