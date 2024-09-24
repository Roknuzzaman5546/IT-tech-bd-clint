import React from 'react'
import './ContactUs.css'
import { MdOutlineAddLocationAlt } from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import NavLink from '../../Shared/NavLink'

const ContactUs = () => {
    return (
        <div>
            {/* contact banner image */}
            <div className="contactbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink to={'/'} className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink to={'/contact'} className="">Contact us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-4xl font-bold font-rancho text-center my-20'>Get in touch</h2>
            {/* get in touch card part */}
            <div className=' md:w-4/5 w-11/12 mx-auto flex md:flex-row flex-col mb-10 gap-8'>
                <div className=' flex flex-col justify-center items-center gap-5 shadow-custom py-10 px-6 text-center rounded-lg'>
                    <div className='bg-gray-800 cursor-pointer text-white h-20 w-20 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-white hover:text-black hover:-translate-y-1 shadow-2xl hover:shadow-custom'>
                        <TfiEmail className='text-4xl' />
                    </div>
                    <p className='text-gray-500 cursor-pointer font-semibold transition-colors duration-300 hover:text-blue-800'>
                        7882, Reliance GIDC Chowk bazzar, New York
                    </p>
                </div>
                <div className=' flex flex-col justify-center items-center gap-5 shadow-custom py-10 px-6 text-center rounded-lg'>
                    <div className='bg-gray-800 cursor-pointer text-white h-20 w-20 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-white hover:text-black hover:-translate-y-1 shadow-2xl hover:shadow-custom'>
                        <IoCallOutline className='text-4xl' />
                    </div>
                    <p className='text-gray-500 cursor-pointer font-semibold transition-colors duration-300 hover:text-blue-800'>
                        (+00) 1 23 45 67 89
                        (+1) 1 23 45 67 89
                    </p>
                </div>
                <div className=' flex flex-col justify-center items-center gap-5 shadow-custom py-10 px-6 text-center rounded-lg'>
                    <div className='bg-gray-800 cursor-pointer text-white h-20 w-20 rounded-full flex items-center justify-center transition-transform duration-300 hover:bg-white hover:text-black hover:-translate-y-1 shadow-2xl hover:shadow-custom'>
                        <MdOutlineAddLocationAlt className='text-4xl' />
                    </div>
                    <p className='text-gray-500 cursor-pointer font-semibold transition-colors duration-300 hover:text-blue-800'>
                        demo@support.com
                        support@spacingtech.com
                    </p>
                </div>
            </div>
            {/* Contact form page */}

            <h2 className=' text-4xl font-bold font-rancho text-center my-20'>Drop us message</h2>
            <div className=' md:w-1/2 w-11/12 mx-auto mb-20'>
                <form>
                    {/* name */}
                    <div className=' mt-5'>
                        <p className=' font-bold text-black'>Name</p>
                        <input class="focus:outline-0 focus:ring-0 focus:border-gray-300 border-2 border-gray-300 rounded-lg w-full mt-2" type="text" name="" id="" placeholder="Name" />
                    </div>
                    {/* email adress */}
                    <div className=' mt-5'>
                        <p className=' font-bold text-black'>Email adress</p>
                        <input class="focus:outline-0 focus:ring-0 focus:border-gray-300 border-2 border-gray-300 rounded-lg w-full mt-2" type="text" name="" id="" placeholder="email adress" />
                    </div>
                    {/* phone number */}
                    <div className=' mt-5'>
                        <p className=' font-bold text-black'>Phone</p>
                        <input class="focus:outline-0 focus:ring-0 focus:border-gray-300 border-2 border-gray-300 rounded-lg w-full mt-2" type="text" name="" id="" placeholder="Phone" />
                    </div>
                    {/* message */}
                    <div className=' mt-5'>
                        <p className=' font-bold text-black'>Message</p>
                        <input class="focus:outline-0 focus:ring-0 pb-32 focus:border-gray-300 border-2 border-gray-300 rounded-lg w-full mt-2" type="text" name="" id="" placeholder="message" />
                    </div>
                    <input className=' mt-2 bg-gray-800 py-3 px-5 text-white font-bold cursor-pointer btn hover:bg-gray-800' type="submit" value="Send" />
                </form>
            </div>
        </div >
    )
}

export default ContactUs
