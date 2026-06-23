import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/Logo.png';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-black text-white px-2 md:px-30 pt-30 pb-10  border-b overflow-hidden">
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {/* Logo */}
          <div className="w-[80%] flex flex-col gap-7 items-start ">
            <img src={logo} alt="Logo" className="h-20 w-40 object-contain" />
             <p className='text-white '>Since 2020, we’ve been Dubai’s go-to car rental partner 🚀. With over 10,000 happy clients, we deliver the best cars at the best prices — making your rental smooth, simple, and trustworthy. </p>
          </div>

          {/* Need Help */}
          <div className="flex flex-col items-start sm:items-start ">
            <h2 className="font-semibold text-lg mb-4">Legal</h2>
            <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Terms and Conditions </p>
            <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Privacy Policy</p>
           
          </div>
  {/* Blog Posts */}
        
           <div className="flex flex-col items-start sm:items-start ">
         
              <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
           <Link to="/"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Home </p></Link>
            <Link to="/ourcars"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Our Cars </p></Link>
            <Link to="contact"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Contact </p></Link>
            <Link to="/about"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">About </p></Link>
            <Link to="/blog"> <p className="mb-2 font-medium text-[16px] cursor-pointer hover:underline">Blogs </p></Link>
    </div>


        
            {/* ContactUs */}
             <div className="flex flex-col items-start sm:items-start  gap-x-2 space-y-3 ">
       
             <h2 className="font-semibold text-lg mb-4">Contact Us</h2>

      {/* Address */}
      <p className="flex items-center gap-2 font-medium text-[16px]">
        <FaMapMarkerAlt className="text-[#D72638] text-2xl" />
        Al khabeesi building, Office no M5-189, Al khabeesi deira, Dubai, U.AE
      </p>



      {/* Email */}
      <p className="flex items-center gap-2 font-medium text-[16px]">
        <FaEnvelope className="text-[#D72638] text-xl" />
       HR@jokercarrentaldubai.com
      </p>
      <p className="flex items-center gap-2 font-medium text-[16px]">
    <FaPhone className="text-[#D72638] text-xl rotate-90" />
    +971567567467
  </p>
  <p className="flex items-center gap-2 font-medium text-[16px]">
    <FaPhone className="text-[#D72638] text-xl rotate-90" />
    0097142236476
  </p>
  <p className="flex items-center gap-2 font-medium text-[16px]">
    <FaPhone className="text-[#D72638] text-xl rotate-90 " />
    0097142201395
  </p>
              </div>

        </div>
            <div className='  flex flex-row-reverse md:justify-start justify-end md:gap-23 gap-x-12 mt-10'>
                 <Link to="https://www.facebook.com/profile.php?id=61578290960070" target="_blank" className=" md:px-5 pr-5">
              <i className="fab fa-facebook text-[#DB2C33] hover:text-white text-[25px]"></i>
            </Link>
            <Link to="https://www.instagram.com/eljokerdrivedubai/?next=%2F" target="_blank" className=" ">
              <i className="fa-brands fa-square-instagram text-[#DB2C33] hover:text-white text-[25px]"></i>
            </Link>
             <Link to="https://www.tiktok.com/@eljoker.drive?_t=ZS-8zyEPuwv5vD&_r=1" target="_blank" className=" ">
              <i className="fa-brands fa-tiktok text-[#DB2C33] hover:text-white text-[25px]"></i> </Link>
             <Link to="https://www.snapchat.com/add/eljoker.drive?share_id=kgf13llUJ7E&locale=ar-EG" target="_blank" className=" ">
              <i className="fa-brands fa-snapchat text-[#DB2C33] hover:text-white text-[25px]"></i>   </Link>
     
            </div>

             </footer>

      {/* Copyright Bottom Bar */}
      <div className="bg-black p-6 text-white text-center md:text-left">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-lg font-semibold">@ 2025 Al Joker . All rights reserved.</h1>
           <div className=' ' >

        </div>
        </div>
       
      </div>
    </>
  );
}
