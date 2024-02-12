import React, { useState } from "react";
import check from '../assets/check.svg'
import SelectMovie from "../components/Stepper/SelectMovie";
import BuyTickets from "../components/Stepper/BuyTickets/BuyTickets";
import AvailableSeats from "../components/Stepper/AvailableSeats/AvailableSeats";
import Details from "../components/Stepper/Details/Details";
import TicketSummary from "../components/Stepper/TicketSummary/TicketSummary";
import Payments from "../components/Stepper/Payments/Payments";
import Confirmation from "../components/Stepper/Confirmation/Confirmation";
import back from '../assets/back.svg';

const DemoStepper = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const handleNext = () => {
        currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const steps = [
        { label: "Select Movie", component: <SelectMovie complete={complete} handleNext={handleNext} currentStep={currentStep} /> },
        { label: "Buy Tickets", component: <BuyTickets complete={complete} handleNext={handleNext} currentStep={currentStep} /> },
        { label: "Available Seats", component: <AvailableSeats complete={complete} handleNext={handleNext} currentStep={currentStep} /> },
        { label: "Details", component: <Details complete={complete} handleNext={handleNext} currentStep={currentStep} /> },
        { label: "Ticket Summary", component: <TicketSummary complete={complete} handleNext={handleNext} currentStep={currentStep} /> },
        { label: "Payments", component: <Payments complete={complete} handleNext={handleNext} currentStep={currentStep} /> },
        { label: "Confirmation", component: <Confirmation complete={complete} handleNext={handleNext} currentStep={currentStep} /> },
    ];

    return (
        <>
            <div className='bg-[#141414] pt-[160px] text-white'>
                <div className='max-w-[1280px] w-full mx-auto '>

                    <div className="flex justify-between max-w-[1047px] mx-auto">
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
                    {currentStep !== 1 && (
                        <button className="text-lg border-0 btn mt-[36px]" onClick={handleBack}><img src={back} alt="back" />Back</button>
                    )}
                    
                    <div>{steps[currentStep - 1].component}</div>

                </div>
            </div>
        </>
    );
};

export default DemoStepper;
