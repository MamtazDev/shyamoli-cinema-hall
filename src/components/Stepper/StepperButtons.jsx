import React from 'react'

const StepperButtons = ({ children, onNext }) => {
    return (
        <div> <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px] pb-[80px]">
            <button onClick={onNext} className='max-w-[462px] w-full bg-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base   '>{children}</button>

        </div></div>
    )
}

export default StepperButtons