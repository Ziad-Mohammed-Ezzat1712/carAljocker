// MostSearchedCars.jsx
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Bookmark } from "lucide-react";
import { FiChevronLeft, FiChevronRight, FiArrowUp } from "react-icons/fi";
import { FaGasPump, FaTachometerAlt, FaRegKeyboard } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const categories = [ "Sedan", "SUV", "Convertible", "Hatchback", "Coupe", "Sport"];

export default function RecommendedeCars() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cars, setCars] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get(
          "https://jokercarrentaldubai.com/eljoker/public/api/cars"
        );
    

        if (Array.isArray(res.data.data)) {
          setCars(res.data.data);
        } else {
          setCars([]);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
        setCars([]);
      }
    };
    fetchCars();
  }, []);


  const filteredCars =
    activeCategory === "All"
      ? cars
      : cars.filter(
          (car) =>
            car.specifications?.type?.name &&
            categories.includes(car.specifications.type.name) &&
            car.specifications.type.name === activeCategory
        );

  return (
    <div className="py-12 xl:px-0 bg-white overflow-hidden">
  
      <h2 className="text-[40px] md:text-[40px] font-semibold text-center text-[#050B20] mb-8">
      
Recommendede Cars for You

      </h2>

    
      <div className="flex justify-center gap-8 mb-8 border-b border-gray-200 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-2 text-lg font-medium transition-all ${
              activeCategory === cat
                ? "text-[#E63946] border-b-2 border-[#E63946]"
                : "text-gray-700 hover:text-[#E63946]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <SwiperSlide key={car.id}>
                <div className="bg-white rounded-2xl shadow p-4 flex flex-col relative border-[1px] border-gray-300">
                  {/* زر Bookmark */}
                  <button className="absolute top-10 right-5 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <Bookmark className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* صورة */}
                  {car.images && car.images.length > 0 ? (
                    <img
                      src={`https://jokercarrentaldubai.com/eljoker/public/storage/${car.images?.[0]?.location}`}
                      alt={car.full_name}
                      className="xl:w-[328px] h-[218px] xl:object-contain object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-[218px] bg-gray-200 rounded-lg flex items-center justify-center">
                      No Image
                    </div>
                  )}

                  {/* تفاصيل */}
                  <h3 className="text-lg font-bold text-[#0A0A23] mb-1">
                    {car.full_name}
                  </h3>
                  <p className="text-[16px] text-[#050B20] mb-1">
                    {car.trim?.name || "No description"}
                  </p>

                  <div className="flex justify-between border-t border-b border-gray-300 py-4">
                    <div>
                      <FaTachometerAlt className="text-xl mx-auto mb-2 text-gray-700" />
                      <p className="text-[16px]">
                        {car.performance?.mileage?.value || "N/A"}{" "}
                        {car.performance?.mileage?.unit || ""}
                      </p>
                    </div>

                    <div>
                      <FaGasPump className="text-xl mx-auto mb-2 text-gray-700" />
                      <p className="text-[16px]">
                        {car.performance?.fuel_economy?.unit || "N/A"}
                      </p>
                    </div>

                    <div>
                      <FaRegKeyboard className="text-xl mx-auto mb-2 text-gray-700" />
                      <p className="text-[16px]">
                        {car.specifications?.transmission_type?.name || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-5 items-center">
                    <button className="text-[#D72638] font-medium text-[18px]">
                      <Link
                        to={`/car/${car.id}`}
                        className="text-[#D72638] font-medium text-[18px]"
                      >
                        <span className="flex gap-x-1 cursor-pointer">
                          View Details
                          <FiArrowUp className="text-[20px] text-[#D72638] mt-1 rotate-[45deg]" />
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">
              No cars available in this category.
            </p>
          )}
        </Swiper>

        {/* أسهم تحت */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="w-20 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <FiChevronLeft className="text-2xl text-gray-700" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="w-20 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <FiChevronRight className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}


