import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Props {
  onClose: () => void;
}

const PopupForm = ({ onClose }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm px-4">

      {/* Modal */}
      <div className="mt-20 relative w-full max-w-md bg-gradient-to-b from-[#1a1a1a] to-black text-white rounded-2xl shadow-2xl p-6 border border-yellow-500/20 
      transform animate-popup">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-yellow-400">
            Need Help Finding the Right Property?
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Get expert guidance tailored to your budget and location.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Your Name</label>
            <input
              type="text"
              placeholder="John Smith"
              className="w-full mt-1 p-3 rounded-lg bg-[#111] border border-gray-700 focus:border-yellow-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full mt-1 p-3 rounded-lg bg-[#111] border border-gray-700 focus:border-yellow-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-400">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full mt-1 p-3 rounded-lg bg-[#111] border border-gray-700 focus:border-yellow-500 outline-none"
            />
          </div>

          {/* Budget (NEW - smart addition) */}
          <div>
            <label className="text-sm text-gray-400">Budget Range</label>
            <select className="w-full mt-1 p-3 rounded-lg bg-[#111] border border-gray-700 text-gray-400 focus:border-yellow-500 outline-none">
              <option>Select Budget</option>
              <option>20L - 40L</option>
              <option>40L - 80L</option>
              <option>80L - 1Cr+</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            Get Expert Call →
          </button>

        </form>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 100% secure. Our expert will contact you shortly.
        </p>
      </div>
    </div>
  );
};

export default PopupForm;