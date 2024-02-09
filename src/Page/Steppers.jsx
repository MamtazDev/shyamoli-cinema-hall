import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import check from '../assets/check.svg'
import SelectMovie from '../components/Stepper/SelectMovie';

const Steppers = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { title: 'Select Movie', completed: false, component: <StepOne onNext={() => handleNextStep()} /> },
        { title: 'Buy Tickets', completed: false, component: <StepTwo onNext={() => handleNextStep()} /> },
        { title: 'Available Seats', completed: false, component: <StepThree onNext={() => handleNextStep()} /> },
        { title: 'Details', completed: false, component: <StepFour onNext={() => handleNextStep()} /> },
        { title: 'Ticket Summary', completed: false, component: <StepOne onNext={() => handleNextStep()} /> },
        { title: 'Payments', completed: false, component: <StepTwo onNext={() => handleNextStep()} /> },
        { title: 'Confirmation', completed: false, component: <StepThree onNext={() => handleNextStep()} /> },
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
            <div className='max-w-[1280px] w-full mx-auto '>
                <Stepper
                    steps={steps.map((step, index) => ({
                        title: step.title,
                        ...(step.completed && { icon: <img src={check} alt="Checkmark" /> }),
                    }))}
                    activeStep={activeStep}
                    onClick={handleStepClick}
                    activeColor='#FF3D48'
                    completeColor='#FF3D48'
                    circleFontSize={0}
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
    return (
        <div>
            <SelectMovie onNext={onNext} />
            {/* <button onClick={onNext}>Purchase Now</button> */}
        </div>
    );
};

const StepTwo = ({ onNext }) => {
    return (
        <div>
            <p>Step Two Content</p>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

const StepThree = ({ onNext }) => {
    return (
        <div>
            <p>Step Three Content</p>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

const StepFour = ({ onNext }) => {
    return (
        <div>
            <p>Step Four Content</p>
            <button onClick={onNext}>Next</button>
        </div>
    );
};
