
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarSlider from '../../../Images/CarSlidar.png';
import CarSlider2 from '../../../Images/CarSlidar6.jpg';
import CarSlider3 from '../../../Images/CarSlidar3.jpg';
import CarSlider4 from '../../../Images/CarSlidar5.jpg';

import "swiper/css";
import "swiper/css/navigation";
import "../HeroSlider/sliderCustom.css"; // ملف CSS المخصص للأزرار
import { LanguageContext } from "../../Context/LanguageContext";

export default function BookingForm() {
  const { isArabic } = useContext(LanguageContext);

  const slides = [
    {
      id: 1,
      title: isArabic ? "وفر كثير مع تأجير سياراتنا" : "Save big with our car rental",
      subtitle: isArabic
        ? "اكتشف أفضل عروض تأجير السيارات اليومية والأسبوعية والشهرية"
        : "Discover the Best Cheap Car Rental Deals with Daily, Weekly and Monthly Offers",
      img: CarSlider
    },
    {
      id: 2,
      title: isArabic ? "سيارات فاخرة بأسعار مناسبة" : "Luxury Cars at Affordable Rates",
      subtitle: isArabic
        ? "قد السيارة التي تحلم بها بأقل من المتوقع"
        : "Drive the car of your dreams for less than you think",
      img: CarSlider2
    },
    {
      id: 3,
      title: isArabic ? "قد بأناقة وراحة" : "Drive in Style and Comfort",
      subtitle: isArabic
        ? "اختر من بين مجموعة واسعة من السيارات المميزة"
        : "Choose from our wide range of premium vehicles",
      img: CarSlider4
    },
  ];

  return (
    <div className="relative w-full overflow-hidden z-40 xl:mt-[-60px]  mt-[0px] mb-[-50px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="xl:h-[880px] md:h-[680px] h-[350px] xl:rounded-b-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full bg-center bg-cover xl:bg-cover bg-no-repeat flex flex-col justify-center items-center text-center px-4"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* خلفية داكنة */}
              <div className="absolute inset-0 bg-black/40 xl:rounded-b-2xl"></div>

              {/* النص */}
              <div className="relative xl:top-[-150px] md:top-[-100px] sm:top-[-100px] top-[-70px] z-10">
                <p className="text-white font-medium text-[18px] md:text-[18px] mb-2">
                  {slide.subtitle}
                </p>
                <h2 className="text-[#D72638] font-bold xl:text-[60px] text-[30px] md:text-[60px]">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التنقل */}
      
    </div>
  );
}






// import React from 'react';
// import bg from "../../../Images/CarSlidar.png";

// const BookingForm = () => (
//   <div
//     className="lg:h-[800px] bg-cover bg-bottom flex items-center xl:mt-[-50px]  mt-[0px] justify-center px-4"
//     style={{ backgroundImage: `url(${bg})` }}
//   >
//     <div className="bg-white h-auto md:h-[488px] mx-auto my-14 bg-opacity-95 p-6 md:p-10 rounded-lg w-full max-w-[1650px] shadow-lg">
//   <h3 className="text-[20px] font-semibold mb-6">Book a Car</h3>
  
//   <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
 
//     <div className="md:col-span-6">
//       <label className="block text-[16px] font-semibold mb-1">Pickup Location</label>
//       <select className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2">
//         <option>Dubai Airport T1</option>
//       </select>
//     </div>

//     <div className="md:col-span-6">
//       <label className="block text-[16px] font-semibold mb-1">Drop Off Location</label>
//       <select className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2">
//         <option>Dubai Airport T1</option>
//       </select>
//     </div>


//     <div className="md:col-span-3">
//       <label className="block text-[16px] font-semibold mb-1">Pickup Date</label>
//       <input type="date" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
//     </div>

//     <div className="md:col-span-3">
//       <label className="block text-[16px] font-semibold mb-1">Pick Time</label>
//       <input type="time" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
//     </div>

//     <div className="md:col-span-3">
//       <label className="block text-[16px] font-semibold mb-1">Drop Off Date</label>
//       <input type="date" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
//     </div>

//     <div className="md:col-span-3">
//       <label className="block text-[16px] font-semibold mb-1">Drop Off Time</label>
//       <input type="time" className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2" />
//     </div>


//     <div className="md:col-span-12">
//       <label className="block text-[16px] font-semibold mb-1">Category</label>
//       <select className="w-full border border-gray-300 text-[18px] text-[#B0B0B0] rounded-md p-2">
//         <option>Any</option>
//       </select>
//     </div>
//   </div>


//   <button className="mt-6 w-full bg-[#D72638] hover:bg-red-700 text-white text-[20px] font-semibold py-5 rounded-md transition">
//     Search
//   </button>
// </div>

//   </div>
// );

// export default BookingForm;
