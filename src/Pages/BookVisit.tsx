import React from "react";
import { motion } from "framer-motion";

const BookVisit: React.FC = () => {
  return (
    <section className=" py-28 bg-[#0B0B0B] px-6 min-h-screen flex items-center">

      <div className=" mt-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 w-full">

        {/* LEFT SIDE (TEXT + MAP) */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col justify-between h-full"
>

  {/* TEXT BLOCK */}
  <div className="mb-10">

    <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
      Book Visit
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
      Experience The Location <br />
      <span className="text-yellow-400">Before You Invest</span>
    </h2>

    <p className="text-gray-400 max-w-md mb-8">
      Visit the site, explore connectivity, and understand the true
      potential of your investment with a guided tour.
    </p>

    {/* VALUE POINTS */}
    <div className="space-y-4 mb-8">

      {[
        "Guided site visit with expert assistance",
        "Explore connectivity & future growth potential",
        "Transparent pricing & on-spot consultation",
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="w-5 h-[2px] bg-yellow-400 mt-3"></div>
          <p className="text-gray-300 text-sm">{item}</p>
        </div>
      ))}

    </div>

    {/* TRUST STATS */}
    <div className="flex gap-8">

      <div>
        <h3 className="text-xl font-semibold text-white">1000+</h3>
        <p className="text-gray-500 text-xs">Happy Clients</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">25+</h3>
        <p className="text-gray-500 text-xs">Years Experience</p>
      </div>

    </div>

  </div>

  {/* MAP */}
  <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] h-[350px] md:h-[420px]">
    <iframe
      src="https://maps.google.com/maps?q=Hudkeshwar%20Road%20Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
    ></iframe>
  </div>

</motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >

          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
            Schedule Your Visit
          </h2>

          <p className="text-gray-500 mb-6 text-sm">
            Fill in your details and we’ll arrange everything for you.
          </p>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <select className="w-full border p-4 rounded-md focus:ring-2 focus:ring-yellow-400">
              <option>Select Project</option>
              <option>SEWA PRIME – II</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="border p-4 rounded-md" />
              <input type="time" className="border p-4 rounded-md" />
            </div>

            <select className="w-full border p-4 rounded-md">
              <option>Number of Visitors</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>

            <textarea
              placeholder="Pickup Location (Optional)"
              rows={3}
              className="w-full border p-4 rounded-md"
            ></textarea>

            <button
              className="w-full py-4 rounded-md font-semibold text-black
              bg-gradient-to-r from-yellow-400 to-yellow-500
              shadow-[0_0_20px_rgba(202,162,83,0.6)]
              hover:scale-105 transition duration-300"
            >
              Book Site Visit →
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default BookVisit;