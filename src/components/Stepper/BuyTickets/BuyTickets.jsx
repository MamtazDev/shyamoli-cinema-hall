/* eslint-disable react/prop-types */

import { useState } from "react";
import StepperButtons from "../StepperButtons";
import TicketQuantity from "./TicketQuantity";
import TicketType from "./TicketType";
import "./Tickets.css";
import AvailableSeats from "../AvailableSeats/AvailableSeats";

const BuyTickets = ({ complete, handleNext }) => {
  const [selectPremium, setSelectPremium] = useState(false);
  const [selectDeluxe, setSelectDeluxe] = useState(false);
  const handleSelectPremium = () => {
    setSelectPremium(true);
    setSelectDeluxe(false);
  };

  const handleSelectDeluxe = () => {
    setSelectDeluxe(true);
    setSelectPremium(false);
  };

  return (
    <>
      <div className="mt-[32px]  lg:mx-0 mx-[16px] ">
        <h2 className="text-primary text-[30px] font-bold leading-[30px] mb-[36px] ">
          Buy Tickets
        </h2>
        <div className="p-[32px] bg-[#1A1A1A]  border border-[#262626] rounded-[12px]">
          <div className="text-center text-[24px] font-semibold mb-[24px] ">
            <p>Select Ticket Type</p>
          </div>
          <div>
            <TicketType
              selectPremium={selectPremium}
              selectDeluxe={selectDeluxe}
              handleSelectPremium={handleSelectPremium}
              handleSelectDeluxe={handleSelectDeluxe}
            />
          </div>
        </div>
        {/* ticket quantity */}
        {selectPremium || selectDeluxe ? <TicketQuantity /> : null}
        {selectPremium || selectDeluxe ? <AvailableSeats /> : null}
        {!complete && (
          <StepperButtons onNext={handleNext}>
            {selectPremium || selectDeluxe
              ? "Purchase Ticket (BDT 600TK)"
              : "Next"}
          </StepperButtons>
        )}
      </div>
    </>
  );
};

export default BuyTickets;
