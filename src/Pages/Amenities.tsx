import React from "react";
import { motion } from "framer-motion";
import project2 from "../assets/project2.jpg"

const amenities = [
  {
    title: "Grand Entrance Gate",
    desc: "A well-designed entrance that enhances security and gives a premium first impression.",
    icon: "🏡",
  },
  {
    title: "Street Lighting",
    desc: "Properly installed street lights ensuring safety, visibility, and modern infrastructure.",
    icon: "💡",
  },
  {
    title: "Cement Roads",
    desc: "Durable and well-planned cement roads for smooth connectivity across the project.",
    icon: "🛣️",
  },
  {
    title: "Roadside Plantation",
    desc: "Green surroundings with planned plantation for a peaceful and eco-friendly environment.",
    icon: "🌳",
  },
];

const Amenities: React.FC = () => {
  return (
    <>

{/* HERO */}
<section className="relative h-[75vh] flex items-center overflow-hidden text-white">

  {/* BACKGROUND IMAGE */}
  <img
    src={project2}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* LEFT GRADIENT (IMPORTANT FIX) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    <div className="max-w-2xl">

      {/* TAG */}
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4"
      >
        Amenities
      </motion.p>

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-semibold leading-tight"
      >
        Designed for Comfort — <br />
        <span className="text-yellow-400">
          Built for Better Living
        </span>
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 mt-5 text-sm md:text-base max-w-md"
      >
        Thoughtfully planned infrastructure that enhances everyday living
        while maximizing long-term investment value.
      </motion.p>

    </div>
  </div>

</section>
{/* 🌿 LIFESTYLE EXPERIENCE - MOTION */}
<section className="py-28 bg-[#0B0B0B] text-white px-6 overflow-hidden">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
        Lifestyle Experience
      </p>

      <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
        More Than Amenities — <br />
        <span className="text-yellow-400">
          A Better Way of Living
        </span>
      </h2>

      <p className="text-gray-400 mb-10 max-w-md">
        Every detail is intentionally designed to enhance everyday living —
        combining infrastructure, nature, and future-ready planning into one seamless experience.
      </p>

      {/* FEATURES LIST */}
      <div className="space-y-6">
        {[
          "Wide internal roads for smooth access",
          "Street lighting for safety & comfort",
          "Green plantation for peaceful living",
          "Planned layout for long-term growth",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 group"
          >

            <motion.div
              className="w-10 h-[2px] bg-yellow-400 mt-3"
              whileHover={{ width: 70 }}
              transition={{ duration: 0.3 }}
            />

            <p className="text-gray-300 text-sm group-hover:text-white transition">
              {item}
            </p>

          </motion.div>
        ))}
      </div>

    </motion.div>

    {/* RIGHT PANEL */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >

        {/* TOP BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 border-b border-white/10 pb-6"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Smart Planning
          </h3>
          <p className="text-gray-400 text-sm">
            Every plot is designed with structure and clarity, ensuring maximum usability and organized development.
          </p>
        </motion.div>

        {/* MIDDLE GRID */}
        <div className="grid grid-cols-2 gap-6 mb-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm text-yellow-400 mb-1">
              Infrastructure
            </h4>
            <p className="text-gray-400 text-xs">
              Developed roads, lighting, and essential groundwork already in place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm text-yellow-400 mb-1">
              Connectivity
            </h4>
            <p className="text-gray-400 text-xs">
              Strategically located near growth corridors for easy access and value appreciation.
            </p>
          </motion.div>

        </div>

        {/* BOTTOM BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Future Growth Potential
          </h3>
          <p className="text-gray-400 text-sm">
            Positioned in rapidly developing zones, ensuring long-term returns and rising demand over time.
          </p>
        </motion.div>

      </motion.div>

      {/* GLOW */}
      <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/10 to-transparent blur-2xl opacity-40 -z-10"></div>

    </motion.div>

  </div>

</section>

      {/* 💰 VALUE IMPACT SECTION */}
<section className="py-28 bg-white px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-4">
        Why It Matters
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 leading-tight">
        Built for Living — <br />
        <span className="text-yellow-500">
          Designed for Appreciation
        </span>
      </h2>

      <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
        Every element is intentionally developed to do more than serve today — 
        it enhances safety, improves daily living, and drives long-term property value.
      </p>

      {/* POINTS */}
      <div className="space-y-5">
        {[
          "Higher resale value with developed infrastructure",
          "Safe, well-lit environment for everyday comfort",
          "Green surroundings that improve lifestyle quality",
          "Ready-to-use plots with structured layouts",
        ].map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 group"
          >
            <span className="text-yellow-500 mt-1 text-lg">✔</span>

            <p className="text-gray-700 group-hover:text-black transition">
              {point}
            </p>
          </motion.div>
        ))}
      </div>

    </motion.div>

    {/* RIGHT PREMIUM PANEL */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >

      {/* MAIN CARD */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-black text-white p-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden"
      >

        {/* TOP LABEL */}
        <p className="text-yellow-400 uppercase tracking-[4px] text-xs mb-3">
          Investment Insight
        </p>

        {/* TITLE */}
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Smart Investment Advantage
        </h3>

        {/* TEXT */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          Developed plots consistently outperform raw land —
          offering faster appreciation, better usability, and stronger buyer demand.
        </p>

        {/* PRICE BLOCK */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-yellow-400 text-4xl md:text-5xl font-bold"
          >
            ₹2100<span className="text-lg text-gray-400">/sq.ft</span>
          </motion.div>

          <p className="text-gray-500 text-sm mt-2">
            Starting price with strong growth potential
          </p>
        </div>

        {/* MINI METRICS */}
        <div className="flex gap-8 text-sm text-gray-400">
          <div>
            <p className="text-yellow-400 font-semibold">High Demand</p>
            <p>Growing location</p>
          </div>
          <div>
            <p className="text-yellow-400 font-semibold">Fast Growth</p>
            <p>Value appreciation</p>
          </div>
        </div>

        {/* BACKGROUND GLOW */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>

      </motion.div>

      {/* OUTER GLOW */}
      <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/10 to-transparent blur-2xl rounded-2xl -z-10"></div>

    </motion.div>

  </div>
</section>
{/* VALUE PROPOSITION SECTION */}
<section className="py-24 bg-black text-white px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <p className="text-yellow-400 uppercase tracking-[5px] text-base mb-4">
      Investment Value
    </p>

    <h2 className="text-2xl font-semibold mb-6 leading-tight">
      Where Smart Planning Meets <br />
      <span className="text-yellow-400">Future Growth</span>
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-base">
      Every element is designed to offer long-term value — from strategic
      location to ready infrastructure — making it a strong and secure
      investment choice.
    </p>

    {/* STATS */}
    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          value: "₹2100/sq.ft",
          label: "Competitive Pricing",
        },
        {
          value: "25+ Years",
          label: "Trusted Experience",
        },
        {
          value: "High Growth",
          label: "Location Advantage",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group"
        >
          {/* SAME SIZE */}
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2 group-hover:scale-105 transition">
            {item.value}
          </h3>

          <p className="text-gray-400 text-base">
            {item.label}
          </p>

          <div className="w-0 h-[2px] bg-yellow-400 mx-auto mt-3 group-hover:w-10 transition-all duration-300"></div>
        </motion.div>
      ))}

    </div>

  </div>
</section>

     {/* HIGHLIGHT STRIP */}
<section className="py-24 bg-white px-6">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-16">
      <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-3">
        Key Advantages
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold text-black">
        Why This Investment <span className="text-yellow-500">Stands Out</span>
      </h2>
    </div>

    {/* STRIP */}
    <div className="grid md:grid-cols-4 gap-6">

      {[
        {
          title: "Well Planned Layout",
          desc: "Optimized space design ensuring usability and long-term value.",
        },
        {
          title: "Future Growth Location",
          desc: "Situated in rapidly developing zones with strong appreciation potential.",
        },
        {
          title: "Affordable Pricing",
          desc: "Strategic pricing that makes entry easy with high upside.",
        },
        {
          title: "Investment Friendly",
          desc: "Ideal for both first-time buyers and long-term investors.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group relative p-6 rounded-2xl border border-gray-200 hover:border-yellow-400 transition overflow-hidden"
        >

          {/* HOVER GLOW */}
          <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition"></div>

          {/* TOP LINE */}
          <div className="w-10 h-[2px] bg-yellow-500 mb-4 group-hover:w-16 transition-all duration-300"></div>

          {/* TITLE */}
          <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-yellow-500 transition">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>

  </div>
</section>

    </>
  );
};

export default Amenities;