import React from 'react'
import logo from '../../assets/logo.png'

import AuthButton from './AuthButton'
import { Link } from 'react-router-dom'

const VerifyPhone = () => {
    return (
        <>
            <div className='p-[24px] bg-[#1C1C1C]  mx-auto items-center lg:max-w-[550px] w-full mb-[112px] '>
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <img className='mb-[78px]' src={logo} alt="logo" />
                        <h2 className='text-white text-[24px] font-semibold mb-[36px] text-center leading-[32px] '>Verify Phone Number</h2>
                    </div>

                    <form className='text-sm text-[#EAEAEA]  font-medium'>
                        <div className='flex flex-col w-full mb-[16px]'>
                            <label className='mb-[8px]'>Phone Number</label>
                            <div className='flex  gap-[18px] justify-start'>
                                {[0, 1, 2, 3, 4, 5].map(() => (
                                    <>
                                        <input
                                            type="text"
                                            value="7"
                                            className='flex text-[20px] h-[50px] rounded-[8px] border border-[#D9D9D9] bg-[#232323] w-[69px] placeholder:text-[#9CA4AB]'
                                            style={{ textAlign: 'center' }}
                                        />

                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="mt-[20px] mb-[36px]">
                            <AuthButton>Verify</AuthButton>
                        </div>
                        <div className="text-center">
                            <div className='text-base text-[#9CA4AB] font-medium '>

                                Didn’t get code?
                                <button type='button' className='text-primary' > Resend Code</button></div>
                        </div>


                    </form>
                </div>

            </div>



        </>
    )
}

export default VerifyPhone