import React from 'react'
import './Condition.css'
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAddLocationAlt } from 'react-icons/md'
import NavLink from '../../Shared/NavLink';
import mailImg from '../../../assets/condition/mail.jpg'
import callImg from '../../../assets/condition/call.jpg'
import locationImg from '../../../assets/condition/location.jpg'
import conditionImg from '../../../assets/condition/condition.jpg'

const Condition = () => {
    return (
        <div >
            {/* faq banner image */}
            <div className="conditionbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" md:max-w-screen-2xl w-11/12 mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink to={'/'} className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink to={'/condition'} className="">Terms & Condition</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-4xl font-bold font-rancho text-center my-20'>Terms & conditions</h2>
            {/* terms heading part */}
            <div className='md:max-w-screen-2xl w-11/12 mx-auto flex md:flex-row flex-col justify-around items-center gap-10'>
                <img className=' md:w-1/2 w-full h-[500px] rounded-md mr-10' src={conditionImg} alt="" />
                <div className=' md:w-1/2 w-full'>
                    <h2 className=' text-2xl font-bold text-black font-rancho border-b mb-8 pb-5'>Restriction</h2>
                    <div className=' flex items-start gap-2'>
                        <p className=' bg-gray-600 p-1'></p>
                        <p className=' text-gray-500 tex-2xl space-y-2'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                    <div className=' flex items-start gap-2 my-5'>
                        <p className=' bg-gray-600 p-1'></p>
                        <p className=' text-gray-500 tex-2xl space-y-2 '>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                    <div className=' flex items-start gap-2'>
                        <p className=' bg-gray-600 p-1'></p>
                        <p className=' text-gray-500 tex-2xl space-y-2'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
            </div>
            {/*  Terms & condition  moddle part */}
            <div className=' bg-[#f4f3ee]  my-16'>
                <div className=' md:max-w-screen-2xl w-11/12 mx-auto flex md:flex-row flex-col justify-around items-center gap-10'>
                    <div className=' py-16 md:w-full w-11/12'>
                        <div>
                            <h2 className=' text-xl font-bold text-black'>Introduction words</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>There are many variations of passages of Lorem Ipsum available, by injected, or words which don't look even slightly believable.</p>
                            </div>
                        </div>
                        <div className=' border-t border-gray-400 mt-8 pt-8'>
                            <h2 className=' text-xl font-bold text-black'>Your content</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>There are many variations of passages of Lorem Ipsum available, by injected, or words which don't look even slightly believable.</p>
                            </div>
                        </div>
                        <div className=' border-t border-gray-400 mt-8 pt-8'>
                            <h2 className=' text-xl font-bold text-black'>No majority</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        <div className=' border-t border-gray-400 mt-8 pt-8'>
                            <h2 className=' text-xl font-bold text-black'>Introduction words</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' py-16 md:w-full w-11/12'>
                        <div>
                            <h2 className=' text-xl font-bold text-black'>Maxim placate</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>There are many variations of passages of Lorem Ipsum available, by injected, or words which don't look even slightly believable.</p>
                            </div>
                        </div>
                        <div className=' border-t border-gray-400 mt-8 pt-8'>
                            <h2 className=' text-xl font-bold text-black'>Variation terms</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>There are many variations of passages of Lorem Ipsum available, by injected, or words which don't look even slightly believable.</p>
                            </div>
                        </div>
                        <div className=' border-t border-gray-400 mt-8 pt-8'>
                            <h2 className=' text-xl font-bold text-black'>Sever ability</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                        <div className=' border-t border-gray-400 mt-8 pt-8'>
                            <h2 className=' text-xl font-bold text-black'>Maxim placate</h2>
                            <div className=' flex items-center gap-3 mt-5'>
                                <p className=' bg-gray-500 h-2 w-2'></p>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat as necessary, making this the first true generator on the Internet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-center my-20 text-4xl font-bold font-rancho'>Need Help</h2>
            {/* Need help section */}
            <div className='md:max-w-screen-2xl w-11/12 mx-auto flex md:flex-row flex-col gap-8 mb-32'>
                <div className=' flex flex-col items-center justify-center shadow-2xl rounded-lg'>
                    <img className='rounded-t-lg' src={mailImg} alt="" />
                    <div className=' flex flex-col items-center justify-center gap-2 py-8'>
                        <div className='bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center shadow-2xl'><TfiEmail className=' text-3xl' /></div>
                        <h3 className=' text-xl font-bold font-rancho text-black mt-2'>Chat with us</h3>
                        <p className=' text-gray-500'>Send us an email</p>
                    </div>
                </div>
                <div className=' flex md:flex-col flex-col-reverse items-center justify-center rounded-lg shadow-top-md '>
                    <div className=' flex flex-col items-center justify-center gap-2 py-8'>
                        <div className='bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center shadow-2xl'><IoCallOutline className=' text-3xl' /></div>
                        <h3 className=' text-xl font-bold font-rancho text-black mt-2'>Speak with us</h3>
                        <p className=' text-gray-500'>Give us a call toady</p>
                    </div>
                    <img className=' rounded-b-lg' src={callImg} alt="" />
                </div>
                <div className=' flex flex-col items-center justify-center shadow-2xl rounded-lg'>
                    <img className=' rounded-t-lg' src={locationImg} alt="" />
                    <div className=' flex flex-col items-center justify-center gap-2 py-8'>
                        <div className='bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center shadow-2xl'><MdOutlineAddLocationAlt className=' text-3xl' /></div>
                        <h3 className=' text-xl font-bold font-rancho text-black mt-2'>Locate a store</h3>
                        <p className=' text-gray-500'>Describe your project</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Condition
