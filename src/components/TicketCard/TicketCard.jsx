import React from 'react'
import logo from '../../assets/logo.png'
import qr from '../../assets/qr.svg'
import qr1 from '../../assets/qrRotate.svg'
import show from '../../assets/selectMovie.png'
import show2 from '../../assets/img2.png'
import './TicketCard.css';

const TicketCard = () => {
    return (

        <div className='flex lg:flex-row flex-col gap-[32px]  justify-center'>
            <div className='ticket_card'>
                <div className='flex flex-col items-center'>
                    <img className='mb-[16px]' src={logo} alt="logo" />
                    <h2 className='text-[24px] leading-[32px]  font-bold  mb-[4px]'>MOVIE TICKET</h2>
                    <p className='text-[16px] leading-[24px] text-[#F8FAFC] font-normal  mb-[4px]'>Premium Ticket</p>
                    <p className='text-[16px] leading-[24px] text-[#F8FAFC] font-normal  mb-[4px]'>Seat : F1</p>
                    {/* qr */}
                    <div className='my-[24px] text-center'>

                        <img src={qr} alt="qr" />
                        <p className='text-base text-[#e5e6e8] mt-[12px] font-semibold '>WPFR234</p>
                    </div>
                    <div className='bg-[#3D3C3C] h-[1px] w-[274px] mb-[24px] '></div>
                </div>

                <div className='px-[40px]'>
                    {/* details */}
                    <div className='flex items-center gap-[12px]  mb-[20px]'>
                        <img src={show} className='w-[55px] h-[69px]' alt="show" />
                        <div>
                            <h3 className='text-[#fff] text-sm leading-[20px] font-semibold'>Mr-9 : Do or Die</h3>
                            <p className='text-[#DCDCDC] text-sm leading-[20px] font-normal'>Shymoli Cinama Hall</p>
                        </div>
                    </div>
                    {/* information */}
                    <div className='flex items-end justify-between'>
                        <div className='flex flex-col gap-[12px]'>
                            <div>
                                <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Name</p>
                                <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>John Weak</h3>
                            </div>
                            <div>
                                <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Mobile</p>
                                <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>+8801457825478</h3>
                            </div>
                            <div>
                                <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Session</p>
                                <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>1h 45m - 24/01/2024</h3>
                            </div>
                            <div>
                                <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Seat Number</p>
                                <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>F1</h3>
                            </div>
                        </div>

                        <div className='relative'  >
                            <img className='w-[56px] h-[56px]' src={qr1} alt="" />
                            <p className="absolute bottom-[100px] left-[-8px]" style={{ transform: "rotate(270deg)" }}>WPFR235</p>
                        </div>

                    </div>
                </div>

            </div>
            
            <div className='ticket_card'>
            <div className='flex flex-col items-center'>
                <img className='mb-[16px]' src={logo} alt="logo" />
                <h2 className='text-[24px] leading-[32px]  font-bold  mb-[4px]'>MOVIE TICKET</h2>
                <p className='text-[16px] leading-[24px] text-[#F8FAFC] font-normal  mb-[4px]'>Premium Ticket</p>
                <p className='text-[16px] leading-[24px] text-[#F8FAFC] font-normal  mb-[4px]'>Seat : F1</p>
                {/* qr */}
                <div className='my-[24px] text-center'>

                    <img src={qr} alt="qr" />
                    <p className='text-base text-[#e5e6e8] mt-[12px] font-semibold '>WPFR234</p>
                </div>
                <div className='bg-[#3D3C3C] h-[1px] w-[274px] mb-[24px] '></div>
            </div>

            <div className='px-[40px]'>
                {/* details */}
                <div className='flex items-center gap-[12px]  mb-[20px]'>
                    <img src={show2} className='w-[55px] h-[69px]' alt="show" />
                    <div>
                        <h3 className='text-[#fff] text-sm leading-[20px] font-semibold'>হুব্বা (Hubba)</h3>
                        <p className='text-[#DCDCDC] text-sm leading-[20px] font-normal'>Shymoli Cinama Hall</p>
                    </div>
                </div>
                {/* information */}
                <div className='flex items-end justify-between'>
                    <div className='flex flex-col gap-[12px]'>
                        <div>
                            <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Name</p>
                            <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>John Weak</h3>
                        </div>
                        <div>
                            <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Mobile</p>
                            <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>+8801457825478</h3>
                        </div>
                        <div>
                            <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Session</p>
                            <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>1h 45m - 24/01/2024</h3>
                        </div>
                        <div>
                            <p className='text-[#9A9A9A] mb-[4px] text-sm leading-[20px] font-normal'>Seat Number</p>
                            <h3 className='text-[#fff] text-sm leading-[20px] font-medium'>F1</h3>
                        </div>
                    </div>

                    <div className='relative'  >
                        <img className='w-[56px] h-[56px]' src={qr1} alt="" />
                        <p className="absolute bottom-[100px] left-[-8px]" style={{transform:"rotate(270deg)"}}>WPFR235</p>
                    </div>

                </div>
            </div>

        </div>
        </div>
    )
}

export default TicketCard
