import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    Type_Of_Car: "",
    email: "",
    inquiry: "",
    budget: "",
    pickupLocation: "",
    dropoffLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_vdgsi2q", 
        "template_ug4dvju", 
        {
          fullName: formData.fullName,
          phone: formData.phone,
          Type_Of_Car: formData.Type_Of_Car,
          email: formData.email,
          inquiry: formData.inquiry,
          budget: formData.budget,
          pickupLocation: formData.pickupLocation,
          dropoffLocation: formData.dropoffLocation,
        },
        "ygBCeaEhrid7z-vcq" // 🟢 استبدلها بـ Public Key بتاعك
      )
      .then(
        () => {
          alert("✅ تم إرسال الرسالة بنجاح!");
          setFormData({
            fullName: "",
            phone: "",
            Type_Of_Car: "",
            email: "",
            inquiry: "",
            budget: "",
            pickupLocation: "",
            dropoffLocation: "",
          });
        },
        (error) => {
          console.error("❌ Error:", error);
          alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
        }
      )
      .finally(() => setLoading(false));
  };

  const dubaiAreas = [
    "Downtown Dubai",
    "Business Bay",
    "Dubai Marina",
    "Jumeirah Beach Residence (JBR)",
    "Jumeirah Lakes Towers (JLT)",
    "Deira",
    "Bur Dubai",
    "Al Barsha",
    "Palm Jumeirah",
    "Jumeirah",
    "Dubai Silicon Oasis",
    "Al Quoz",
    "Dubai Creek Harbour",
    "Mirdif",
    "Dubai Hills",
    "Arabian Ranches",
    "Motor City",
    "Sports City",
    "Discovery Gardens",
    "Al Karama",
    "Al Satwa",
    "Al Nahda",
    "Umm Suqeim",
    "International City",
    "Al Warqa",
    "Bluewaters Island",
    "Dubai Festival City",
    "Meydan",
    "Jumeirah Village Circle (JVC)",
    "Jumeirah Village Triangle (JVT)",
    "Dubai Investment Park (DIP)",
  ];

  return (
    <div className="bg-white max-w-10xl xl:rounded-[60px] relative z-40 xl:mt-[-50px] mt-[0px] mb-[-50px] mx-auto px-4 py-10">
      <div className="mb-6 px-5 lg:px-6 xl:px-40 max-w-[1500px]">
        <p className="text-[20px] font-medium">
          <span className="text-[#D72638]">Home</span> / Contact Us
        </p>
        <h2 className="text-[40px] font-semibold mt-1">Contact Us</h2>
      </div>

      <div className="mb-6 px-5 mx-auto lg:px-6 xl:px-40 max-w-[1500px]">
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none "
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none "
              placeholder="+971 50 123 4567"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Type Of Car</label>
            <input
              type="text"
              name="Type_Of_Car"
              value={formData.Type_Of_Car}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none "
              placeholder="Enter Name Of Car"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Pickup Location</label>
            <select
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 bg-white focus:outline-none "
              required
            >
              <option value="">Select pickup location</option>
              {dubaiAreas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Drop-off Location</label>
            <select
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 bg-white focus:outline-none "
              required
            >
              <option value="">Select drop-off location</option>
              {dubaiAreas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Select Your Budget (AED)</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 bg-white focus:outline-none "
              required
            >
              <option value="">Choose your budget range</option>
              <option value="100-500">100 - 500 AED</option>
              <option value="500-1000">500 - 1000 AED</option>
              <option value="1000-1500">1000 - 1500 AED</option>
              <option value="1500-2000">1500 - 2000 AED</option>
              <option value="2000-2500">2000 - 2500 AED</option>
              <option value="2500-3000">2500 - 3000 AED</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none "
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Inquiry</label>
            <textarea
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 h-28 focus:outline-none "
              placeholder="Write your inquiry here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-[18px] font-medium cursor-pointer bg-[#D72638] text-white py-3 rounded-lg hover:bg-[#ea293c] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="px-5 mx-auto lg:px-6 xl:px-40 max-w-[1500px] mt-10">
        <h3 className="text-[28px] font-semibold mb-4">Our Location</h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.2283375443963!2d55.33728318498917!3d25.262903183865664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE1JzQ2LjUiTiA1NcKwMjAnMDYuMyJF!5e0!3m2!1sar!2seg!4v1758638066384!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
