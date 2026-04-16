import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
}

const PopupForm2 = ({ onClose }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md px-4">

      {/* Modal */}
      <div className="relative w-full max-w-md bg-gradient-to-b from-black to-[#111] p-7 md:p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_40px_rgba(0,0,0,0.8)] animate-fadeIn">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-yellow-400 transition text-lg"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-yellow-400 tracking-wide">
            Find Your Perfect Property
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Share a few details — our team will handle the rest.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-xs text-gray-500">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs text-gray-500">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-xs text-gray-500">Preferred Location</label>
            <input
              type="text"
              placeholder="e.g. Pune, Mumbai, Nagpur"
              className="w-full mt-1 px-4 py-3 rounded-lg bg-[#0d0d0d] border border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500 outline-none transition"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="text-xs text-gray-500">Property Type</label>
            <select
              defaultValue=""
              className="w-full mt-1 px-4 py-3 rounded-lg bg-[#0d0d0d] border border-gray-700 text-gray-400 focus:text-white focus:border-yellow-500 outline-none transition"
            >
              <option value="" disabled hidden>
                Select property type
              </option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Commercial Space</option>
              <option>Plot / Land</option>
            </select>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full mt-3 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg
            hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(202,162,83,0.5)] active:scale-95 transition"
          >
            Get Free Consultation →
          </button>

        </form>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center mt-5">
          🔒 Your details are secure. No spam. Only relevant updates.
        </p>

      </div>
    </div>
  );
};

export default PopupForm2;