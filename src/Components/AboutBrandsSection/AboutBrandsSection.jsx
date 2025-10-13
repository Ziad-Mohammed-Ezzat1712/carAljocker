  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { FiArrowUp } from "react-icons/fi";
  import { Link } from "react-router-dom";
  import Brands from './../Brands/Brands';

  export default function AboutBrandsSection() {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios
        .get("/api/brands/")
        .then((res) => {
        console.log("Brands API Response:", res.data);
          if (res.data && Array.isArray(res.data.data.items)) {
            setBrands(res.data.data.items);
          } else {
            setBrands([]);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching brands:", err);
          setLoading(false);
        });
    }, []);


    if (loading) {
      return (
        <div className="text-center py-10">
          <p>Loading brands...</p>
        </div>
      );
    }

    

    return (
      <div className="max-w-[1450px] mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Explore Our Premium Brands</h2>
          <Link
    to="/brands"
    className="text-[#D72638] flex gap-x-1 cursor-pointer text-[18px] font-semibold items-center gap-1"
  >
    Show All Brands 
    <FiArrowUp className="text-[20px] text-[#D72638] mt-1 rotate-[45deg]" />
  </Link>
        </div>

        
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {brands.slice(0, 6).map((brand) => (
              <div
                key={brand.id}
                className="border rounded-xl flex flex-col items-center p-4 hover:shadow-md transition"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-[120px] w-[180px] object-contain mb-3"
                />
                <p className="font-medium text-[16px]">{brand.name}</p>
              </div>
            ))}
          </div>
      
      </div>
    );
  }


