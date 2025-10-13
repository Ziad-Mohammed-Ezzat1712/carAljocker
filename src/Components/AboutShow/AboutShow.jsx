import React, { useState } from "react";
import { FiPlay, FiCheck } from "react-icons/fi";
import carImg1 from "../../../Images/carImg1.jpg"; // غيرها بالمسار عندك
import { FiArrowUp } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function AboutShow() {
    const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="max-w-[1450px] mx-auto   rounded-xl ">
      {/* الجزء العلوي */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100">
        {/* الصورة */}
    <div className="relative rounded-2xl overflow-hidden">
      {/* الصورة وزر التشغيل */}
      <img
        src={carImg1}
        alt="Car"
        className="w-full h-full object-cover"
      />
      <button
        className="absolute inset-0 flex items-center justify-center"
        onClick={() => setShowVideo(true)}
      >
        <div className="bg-[#D72638] cursor-pointer text-white p-6 rounded-full shadow-lg hover:scale-105 transition-transform">
          <FiPlay size={32} />
        </div>
      </button>

      {/* Overlay للفيديو */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl">
            {/* زر الإغلاق */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500 transition"
            >
              <IoClose />
            </button>

           <div className="">
  <iframe
    className="w-[800px] h-[600px] rounded-2xl"
    src="https://drive.google.com/file/d/1C3OCLQrDMyv2zrDSRPcx25N8tUOH_DKW/preview"
    title="Drive video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

          </div>
        </div>
      )}
    </div>
        {/* المحتوى */}
        <div className=" rounded-2xl  p-8">
          <h2 className="text-[40px] font-semibold text-[#050B20] mb-4">
            Get A Fair Price For Your Car Rent To Us Today
          </h2>
          <p className="text-[#050B20] mb-6 text-[16px]">
            We are committed to providing our customers with exceptional service,
            competitive pricing, and a wide range of cars.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <FiCheck className="text-[#D72638]  mt-1 bg-[#FDEBEE] w-4 h-4 rounded-full" />
              <span className="text-[15px] text-[#050B20] font-medium">Choose from a variety of models to match your style and budget.</span>
            </li>
            <li className="flex items-start gap-2">
             <FiCheck className="text-[#D72638] mt-1 bg-[#FDEBEE] w-4 h-4 rounded-full" />
              <span className="text-[15px] text-[#050B20] font-medium" >Rent for a day, a week, or a month — it’s up to you.</span>
            </li>
            <li className="flex items-start gap-2">
             <FiCheck className="text-[#D72638] mt-1 bg-[#FDEBEE] w-4 h-4 rounded-full" />
              <span className="text-[15px] text-[#050B20] font-medium">Quick and simple process to reserve your car in minutes.</span>
            </li>
          </ul>
<Link to={"/ourcars"}>
  
          <button className="bg-[#D72638] text-[18px] flex gap-x-1 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Get Started  <FiArrowUp className="text-[20px] text-white mt-1 rotate-[45deg]" />
          </button>
</Link>
        </div>
      </div>

      {/* الإحصائيات */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        <div>
          <h3 className="text-[20px] font-semibold">1000k</h3>
          <p className="text-[16px]">CARS FOR Rent</p>
        </div>
        <div>
          <h3 className="text-[20px] font-semibold">500</h3>
          <p className="text-[16px]">DEALER REVIEWS</p>
        </div>
        <div>
          <h3 className="text-[20px] font-semibold">200</h3>
          <p className="text-[16px]">VISITORS PER DAY</p>
        </div>
        <div>
          <h3 className="text-[20px] font-semibold">150</h3>
          <p className="text-[16px]">VERIFIED DEALERS</p>
        </div>
      </div>
    </div>
  );
}

