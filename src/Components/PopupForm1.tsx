import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

const PopupForm1 = ({ onClose }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50 px-4">

      <div className="bg-gradient-to-b mt-20 from-black to-[#1a1a1a] p-8 rounded-2xl w-[90%] md:w-[420px] shadow-2xl text-center relative border border-yellow-500/20
      transform animate-popup">

        {/* Close */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-400 hover:text-yellow-400 transition"
        >
          ✕
        </button>

        {/* Headline */}
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">
          Exclusive Limited Offer
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 mb-5 text-sm">
          Premium properties. Priority access. Special pricing — just for you.
        </p>

        {/* Form */}
        <form className="space-y-3 text-left">

          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-white focus:border-yellow-500 outline-none"
          />

          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-white focus:border-yellow-500 outline-none"
          />

          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-white focus:border-yellow-500 outline-none"
          />

          {/* Budget */}
          <select className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-gray-400 focus:border-yellow-500 outline-none">
            <option>Select Budget</option>
            <option>20L - 40L</option>
            <option>40L - 80L</option>
            <option>80L - 1Cr+</option>
          </select>

          {/* Property Type */}
          <select className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-gray-400 focus:border-yellow-500 outline-none">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Commercial</option>
          </select>

          {/* CTA */}
          <button className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition">
            Book Premium Visit →
          </button>
        </form>

        {/* Trust line */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          🔒 Your details are secured. No spam. Only expert guidance.
        </p>

      </div>
    </div>
  );
};

export default PopupForm1;