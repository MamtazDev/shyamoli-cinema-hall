import React from 'react'

const StepperButtons = ({ children, onNext }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-[12px] justify-center mt-[32px] pb-[80px]">
                <button onClick={onNext} className='max-w-[462px] w-full bg-[#FF3D48] hover:bg-transparent hover:text-primary border border-[#FF3D48] rounded-[8px] shadow-button py-[16px] font-semibold text-white text-base   '>{children}</button>
            </div>
        </>
    )
}

export default StepperButtons