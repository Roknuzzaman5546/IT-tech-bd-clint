import Main from '@/Layouts/Main';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import './About.css'
import NavLink from '@/Components/NavLink';
import { MdOutlineEmail } from "react-icons/md";
import { FaHouseDamage } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";

const AboutUs = ({ auth }) => {
    return (
        <Main auth={auth}>
            <Head title='About-us'></Head>
            {/* About us banner */}
            <div className="aboutbgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" w-full mx-auto py-8 text-left">
                        <div className="mt-2 ml-5">
                            <NavLink href={route('/')} active={route().current('/')} className='navAfter relative font-medium text-base text-white mx-2'>Home /</NavLink>
                            <NavLink href={route('about.us')} active={route().current('about.us')} className="">About us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='  w-4/5 mx-auto'>
                {/* About us header section */}
                <h2 className=' text-3xl font-bold font-rancho text-center my-16'>About us</h2>
                {/* Our comany section */}
                <div className=' flex justify-center items-center gap-1'>
                    <img className=' w-1/2 h-[500px] rounded-lg' src={'/assets/about/about-1.jpg'} alt="" />
                    <div className=' w-1/2 text-left pl-8'>
                        <h2 className=' text-2xl font-bold font-rancho text-left'>Our Company</h2>
                        <p className=' space-y-2 text-gray-600 font-rancho mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque culpa a, laudantium autem, in totam vel doloremque nobis repudiandae asperiores dolores corporis alias iure cupiditate. Blanditiis voluptatum autem amet! </p>
                    </div>
                </div>
                {/* Our mission */}
                <div className=' flex justify-center items-center gap-0'>
                    <div className=' w-1/2 text-left pr-8'>
                        <h2 className=' text-2xl font-bold font-rancho text-left'>Our Company</h2>
                        <p className=' space-y-2 text-gray-600 font-rancho mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque culpa a, laudantium autem, in totam vel doloremque nobis repudiandae asperiores dolores corporis alias iure cupiditate. Blanditiis voluptatum autem amet! </p>
                    </div>
                    <img className=' w-1/2 h-[500px] rounded-lg' src={'/assets/about/about-2.jpg'} alt="" />
                </div>
                {/* Our vision */}
                <div className=' flex justify-center items-center gap-0'>
                    <img className=' w-1/2 h-[500px] rounded-lg' src={'/assets/about/about-3.jpg'} alt="" />
                    <div className=' w-1/2 text-left pl-8'>
                        <h2 className=' text-2xl font-bold font-rancho text-left'>Our vision</h2>
                        <p className=' space-y-2 text-gray-600 font-rancho mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque culpa a, laudantium autem, in totam vel doloremque nobis repudiandae asperiores dolores corporis alias iure cupiditate. Blanditiis voluptatum autem amet! </p>
                    </div>
                </div>
            </div>
            {/* count section */}
            <div className=' bg-[#f4f3ee]  my-10'>
                <div className=' md:w-11/12 mx-auto w-full flex md:flex-row flex-col justify-center items-center'>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>10+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <MdOutlineEmail className=' text-4xl' />
                        </div>
                        <p className=' text-gray-500'>years</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10 md:border-l-2 border-l-0 md:border-t-0 border-t-2'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>100+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <FaUserFriends className=' text-3xl' />
                        </div>
                        <p className=' text-gray-500'>Clints</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10 md:border-l-2 border-l-0 md:border-t-0 border-t-2'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>50+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <FaHouseDamage className=' text-3xl' />
                        </div>
                        <p className=' text-gray-500'>Shops</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2 md:w-[20%] w-full py-10 md:border-l-2 border-l-0 md:border-t-0 border-t-2'>
                        <h4 className=' text-2xl font-extrabold text-[#3730A3] font-rancho'>20M+</h4>
                        <div className=' bg-white h-20 w-20 rounded-full flex flex-col items-center justify-center'>
                            <GoLink className=' text-3xl' />
                        </div>
                        <p className=' text-gray-500'>Shops</p>
                    </div>
                </div>
            </div>
            {/* Our teacher */}
            <h2 className=' text-3xl font-bold font-rancho text-center my-16'>Our team</h2>
            <div className=' md:w-4/5 w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
                <div>
                    <div className="aboutteamimg-1 cursor-pointer rounded-md overflow-hidden">
                        <div className="h-80 bg-transparent hover:bg-[#2b2b2bb2] transition-colors duration-500 ease-in-out">
                        </div>
                    </div>
                    <h2 className=' text-xl font-extrabold mt-2 mb-1'>Johnny walker</h2>
                    <h3 className='mb-2 font-bold text-gray-500'>Web designer</h3>
                    <hr />
                    <p className=' mt-2 font-bold text-gray-500 space-y-1'>Vestibulum porttitor egestas orci, vitae ullamcorper risus rutrum massa quis.</p>
                </div>
                <div>
                    <div className="aboutteamimg-2 cursor-pointer rounded-md overflow-hidden">
                        <div className="h-80 bg-transparent hover:bg-[#2b2b2bb2] transition-colors duration-500 ease-in-out">
                        </div>
                    </div>
                    <h2 className=' text-xl font-extrabold mt-2 mb-1'>Azim iyafu</h2>
                    <h3 className='mb-2 font-bold text-gray-500'>Web designer</h3>
                    <hr />
                    <p className=' mt-2 font-bold text-gray-500 space-y-1'>Vestibulum porttitor egestas orci, vitae ullamcorper risus rutrum massa quis.</p>
                </div>
                <div>
                    <div className="aboutteamimg-3 cursor-pointer rounded-md overflow-hidden">
                        <div className="h-80 bg-transparent hover:bg-[#2b2b2bb2] transition-colors duration-500 ease-in-out">
                        </div>
                    </div>
                    <h2 className=' text-xl font-extrabold mt-2 mb-1'>Nixim monir</h2>
                    <h3 className='mb-2 font-bold text-gray-500'>Web designer</h3>
                    <hr />
                    <p className=' mt-2 font-bold text-gray-500 space-y-1'>Vestibulum porttitor egestas orci, vitae ullamcorper risus rutrum massa quis.</p>
                </div>
                <div>
                    <div className="aboutteamimg-4 cursor-pointer rounded-md overflow-hidden">
                        <div className="h-80 bg-transparent hover:bg-[#2b2b2bb2] transition-colors duration-500 ease-in-out">
                        </div>
                    </div>
                    <h2 className=' text-xl font-extrabold mt-2 mb-1'>Yang chu</h2>
                    <h3 className='mb-2 font-bold text-gray-500'>Web designer</h3>
                    <hr />
                    <p className=' mt-2 font-bold text-gray-500 space-y-1'>Vestibulum porttitor egestas orci, vitae ullamcorper risus rutrum massa quis.</p>
                </div>
            </div>
        </Main>
    );
};

export default AboutUs;
