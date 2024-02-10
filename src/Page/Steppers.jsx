/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import check from '../assets/check.svg'
import SelectMovie from '../components/Stepper/SelectMovie';
import BuyTickets from '../components/Stepper/BuyTickets/BuyTickets';
import AvailAbleMovieTime from '../components/Stepper/AvailAbleMovieTime';
import AvailableSeats from '../components/Stepper/AvailableSeats/AvailableSeats';
import Details from '../components/Stepper/Details/Details';

const Steppers = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { title: 'Select Movie', completed: false, icon: <img src={check} alt="Checkmark" />, component: <StepOne onNext={() => handleNextStep()} /> },
        { title: 'Buy Tickets', completed: false, icon: <img src={check} alt="Checkmark" />, component: <StepTwo onNext={() => handleNextStep()} /> },
        { title: 'Available Seats', completed: false, icon: <img src={check} alt="Checkmark" />, component: <StepThree onNext={() => handleNextStep()} /> },
        { title: 'Details', completed: false, icon: <img src={check} alt="Checkmark" />, component: <StepFour onNext={() => handleNextStep()} /> },
        { title: 'Ticket Summary', completed: false, icon: <img src={check} alt="Checkmark" />, component: <StepOne onNext={() => handleNextStep()} /> },
        { title: 'Payments', completed: false, icon: <img src={check} alt="Checkmark" />, component: <StepTwo onNext={() => handleNextStep()} /> },
        { title: 'Confirmation', completed: false, icon: <img src={check} alt="Checkmark" />, component: <StepThree onNext={() => handleNextStep()} /> },
        { title: 'Select Movie', completed: false, component: <StepOne onNext={() => handleNextStep()} /> },

    ];

    const handleNextStep = () => {
        const updatedSteps = [...steps];
        updatedSteps[activeStep].completed = true;
        setActiveStep(activeStep + 1);
    };

    const handlePrevStep = () => {
        setActiveStep(activeStep - 1);
    };

    const handleStepClick = (stepIndex) => {
        setActiveStep(stepIndex);
    };

    const getStepContent = (stepIndex) => {
        return steps[stepIndex].component;
    };
    return (

        <div className='bg-[#141414] pt-[160px] text-white'>
            {/* <img src={check} alt="Checkmark" /> */}
            <div className='max-w-[1280px] w-full mx-auto '>
                <Stepper
                    steps={steps.map((step, index) => ({
                        title: step.title,
                        ...(step.completed && { icon: step.icon }),
                    }))}
                    activeStep={activeStep}
                    onClick={handleStepClick}
                    // activeColor='#1b1b1b'
                    defaultColor='#1b1b1b'
                    activeBorderColor="#FF3D4880"
                    defaultBorderColor="#FF3D4880"
                    defaultBorderWidth="3px"
                    circleFontSize={0}
                    completeTitleColor="#FFFFFF80"
                    activeTitleColor="#FFFFFF80"

                />
                <div className="buttons-container">
                    {activeStep > 0 && <button onClick={handlePrevStep}>Back</button>}
                    {getStepContent(activeStep)}
                </div>
            </div>
        </div>
    );
};

export default Steppers;

const StepOne = ({ onNext }) => {
    return (<SelectMovie onNext={onNext} />);
};

const StepTwo = ({ onNext }) => {
    return (
        <div>
            <BuyTickets onNext={onNext} />
        </div>
    );
};

const StepThree = ({ onNext }) => {
    return (
        <div>
            <AvailableSeats onNext={onNext} />
        </div>
    );
};

const StepFour = ({ onNext }) => {
    return (
        <div>
            <Details onNext={onNext} />
        </div>
    );
};
