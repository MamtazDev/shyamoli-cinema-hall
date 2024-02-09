import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import openEye from '../../assets/openeye.png'
import closeEye from '../../assets/closeeye.png'
import LoginWithButtons from './LoginWithButtons'

const Login = () => {

  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <>
      <div className='p-[24px] bg-[#1C1C1C]  mx-auto items-center lg:max-w-[550px] w-full mb-[112px] '>
        <div>
          <div className="flex flex-col items-center justify-center">
            <img className='mb-[78px]' src={logo} alt="logo" />
            <h2 className='text-white text-[24px] font-semibold mb-[36px] text-center leading-[32px] '>Hey there, welcome <br /> back</h2>
          </div>

          <form className='text-sm text-[#EAEAEA]  font-medium'>
            <div className='flex flex-col w-full mb-[16px]'>
              <label className='mb-[8px]'>Email</label>
              <input type="email" className='ps-[16px] h-[52px] rounded-[8px]  bg-[#141414] w-full placeholder:text-[#9CA4AB]' placeholder='Enter your name' />
            </div>
            <div className='relative flex flex-col w-full mb-[16px]'>
              <label className=' mb-[8px]'>Password</label>
              <input type={passwordShow ? "text" : "password"} className='ps-[16px] h-[52px] rounded-[8px] placeholder:text-[#9CA4AB]  bg-[#141414] w-full' placeholder='Enter your name' />
              <img
                onClick={() => setPasswordShow(!passwordShow)}
                className="absolute cursor-pointer right-4 top-[45px]"
                src={passwordShow ? openEye : closeEye}
                alt=""
              />
            </div>

            <div className='text-right'>
              <p className='text-[#FF3D48]  text-sm font-medium '>Forgot Password</p>
            </div>

            {/*  login with buttons  */}
            <LoginWithButtons  dividerW="193px" action="Login" text="Or login with" />

          </form>
        </div>

      </div>



    </>
  )
}

export default Login