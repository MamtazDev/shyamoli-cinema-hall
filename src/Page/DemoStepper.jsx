import React, { useState } from "react";
import check from '../assets/check.svg'
import SelectMovie from "../components/Stepper/SelectMovie";
import BuyTickets from "../components/Stepper/BuyTickets/BuyTickets";
import AvailableSeats from "../components/Stepper/AvailableSeats/AvailableSeats";
import Details from "../components/Stepper/Details/Details";
import TicketSummary from "../components/Stepper/TicketSummary/TicketSummary";
import Payments from "../components/Stepper/Payments/Payments";
import Confirmation from "../components/Stepper/Confirmation/Confirmation";


const DemoStepper = () => {
    const steps = [
        { label: "Select Movie", component: <SelectMovie /> },
        { label: "Buy Tickets", component: <BuyTickets /> },
        { label: "Available Seats", component: <AvailableSeats /> },
        { label: "Details", component: <Details /> },
        { label: "Ticket Summary", component: <TicketSummary /> },
        { label: "Payments", component: <Payments /> },
        { label: "Confirmation", component: <Confirmation /> },
    ];

    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const handleNext = () => {
        currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
    };

    return (
        <>
            <div className='bg-[#141414] pt-[160px] text-white'>
                <div className='max-w-[1047px] w-full mx-auto '>
                    <div className="flex justify-between">
                        {steps?.map((step, i) => (
                            <div
                                key={i}
                                className={`step-item ${(i + 1 < currentStep || complete) ? "complete" : ""} ${currentStep === i + 1 ? "active" : ""}`}
                            >
                                <div className="step" style={{ border: ((i < currentStep - 1) || complete) || (i === currentStep - 1) ? "" : "3px solid #FF3D48" }}>
                                    {((i < currentStep - 1) || complete) ? <img src={check} alt="" /> : (i === currentStep - 1) ? <img src={check} alt="" /> : null}
                                </div>
                                <p className={`${((i < currentStep - 1) || complete) || (i === currentStep - 1) ? "text-white" : " text-[#FFFFFFCC]"} text-lg font-medium `}>{step.label}</p>
                            </div>
                        ))}
                    </div>
                    <div>{steps[currentStep - 1].component}</div>
                    {!complete && (
                        <button className="btn" onClick={handleNext}>
                            {currentStep === steps.length ? "Finish" : "Next"}
                        </button>
                    )}
                </div>
            </div>


        </>
    );
};

export default DemoStepper;

