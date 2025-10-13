import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchAllBrands = async () => {
    try {
      let allBrands = [];
      let currentPage = 1;
      let lastPage = 1;

      do {
        const res = await axios.get(`/api/brands/?page=${currentPage}`);
        const { items, pagination } = res.data.data;

        allBrands = [...allBrands, ...items];
        lastPage = pagination.last_page;
        currentPage++;
      } while (currentPage <= lastPage);

      setBrands(allBrands);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching brands:", err);
      setLoading(false);
    }
  };

  fetchAllBrands();
}, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading brands...</p>
      </div>
    );
  }

  return (
    <div className="bg-white max-w-10xl lg:rounded-[60px] relative xl:z-40 lg:z-40 mt-[-50px] lg:mt-[-30px] mb-[-50px] mx-auto px-4 py-10">
      <div className="max-w-[1450px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">All Brands</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {brands.map((brand) => (
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
    </div>
  );
}
