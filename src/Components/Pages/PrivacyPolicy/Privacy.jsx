import React from 'react'
import { RiSecurePaymentFill } from "react-icons/ri";
import './Privacy.css'
import NavLink from '../../Shared/NavLink';
import privacyImg from '../../../assets/privacy/privecy-policy.jpg'

const Privacy = () => {
    return (
        <div >
            {/* Privacy banner image */}
            <div className="privacyBgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink to={'/'} className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink to={'/privacy'} className="">Privacy policy</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className=' text-4xl font-bold font-rancho text-center my-20'>Privacy policy</h2>

            {/* privecy policy */}
            <div className='lg:max-w-[1600px] md:max-w-[1400px] max-w-[700px] mx-auto'>
                {/* privecy banner */}
                <div className=' w-11/12 mx-auto flex justify-center items-center gap-5'>
                    <div className=' w-1/2'>
                        <div className=' w-4/5'>
                            <p className=' flex justify-start items-center gap-1 font-bold text-gray-500 pb-7'>
                                <span className=' bg-gray-500 p-1'></span>
                                There are many variations of passages of Lorem Ipsum available.
                            </p>
                            <p className=' flex justify-start items-center gap-1 font-bold text-gray-500 py-7 border-t border-gray-500'>
                                <span className=' bg-gray-500 p-1'></span>
                                There are many variations of passages of Lorem Ipsum available.
                            </p>
                            <p className=' flex justify-start items-center gap-1 font-bold text-gray-500 py-7 border-t border-gray-500'>
                                <span className=' bg-gray-500 p-1'></span>
                                There are many variations of passages of Lorem Ipsum available.
                            </p>
                            <p className=' flex justify-start items-center gap-1 font-bold text-gray-500 py-7 border-t border-gray-500'>
                                <span className=' bg-gray-500 p-1'></span>
                                There are many variations of passages of Lorem Ipsum available.
                            </p>
                            <p className=' flex justify-start items-center gap-1 font-bold text-gray-500 py-7 border-t border-gray-500'>
                                <span className=' bg-gray-500 p-1'></span>
                                There are many variations of passages of Lorem Ipsum available.
                            </p>
                        </div>
                    </div>
                    <div className=' w-[41.7%]'>
                        <img className=' rounded-lg min-h-[450px] h-[600px] ' src={privacyImg} alt="" />
                    </div>
                </div>
                {/* privecy middle section */}
            </div>
            <div className=' bg-[#f4f3ee]  my-16'>
                <div className='lg:max-w-[1600px] md:max-w-[1400px] max-w-[700px] mx-auto'>
                    <div className=' md:w-5/6 mx-auto w-full flex md:flex-row flex-col justify-around items-center gap-10'>
                        <div className=' py-16 w-11/12 mx-auto'>
                            <div className=' flex items-center gap-3 rounded-lg bg-white py-5 pl-5'>
                                <RiSecurePaymentFill className=' text-3xl' />
                                <p className=' text-xl font-bold font-rancho'>Secure payment</p>
                            </div>
                            <div className=' flex items-center gap-3 rounded-lg py-5 pl-5'>
                                <RiSecurePaymentFill className=' text-3xl' />
                                <p className=' text-xl font-bold font-rancho'>Secure payment</p>
                            </div>
                        </div>
                        <div className=' py-16 w-11/12 mx-auto'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy
