import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import service1 from "../assets/service2.jpg";
import project1 from "../assets/project1.jpg";
import project7 from "../assets/project7.jpg";
import project3 from "../assets/project3.jpg";
import gate from "../assets/gate.jpg";
import project4 from "../assets/project4.jpg";
import project2 from "../assets/project2.jpg";
import { useNavigate } from "react-router-dom";


const Advantages: React.FC = () => {

    
     const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    const navigate = useNavigate();

  return (
    <>
      <section className="relative mt-5 h-[100vh] flex items-center justify-center overflow-hidden text-white">

  {/* BACKGROUND IMAGE (ZOOM ANIMATION) */}
  <motion.img
    src={service1}
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 6, ease: "easeOut" }}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

    {/* TAGLINE */}
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4"
    >
      The SEWA Advantage
    </motion.p>

    {/* HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="text-3xl md:text-4xl font-semibold leading-tight mb-4"
    >
      More Than Land —{" "}
      <span className="text-yellow-400">
        A Smart Investment Choice
      </span>
    </motion.h1>

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
      className="text-gray-200 max-w-xl mx-auto text-base md:text-lg mb-8"
    >
      Combining trust, location, infrastructure, and future growth —
      we offer land investments designed for long-term value.
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3 }}
      className="flex justify-center gap-4 flex-wrap"
    >

      <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:scale-105 transition">
        Explore Projects
      </button>

      <button className="px-6 py-3 border border-white/30 text-white rounded-md hover:bg-white/10 transition">
        Book Site Visit →
      </button>

    </motion.div>

  </div>

  {/* SCROLL INDICATOR (OPTIONAL BUT PREMIUM)
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
    className="absolute bottom-8 flex flex-col items-center"
  >
    <div className="w-[2px] h-10 bg-gray-400 relative overflow-hidden">
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-full h-1/2 bg-yellow-400"
      />
    </div>
  </motion.div> */}

</section>
<section className="relative py-28 bg-black text-white px-6">

  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">
      <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
        Our Philosophy
      </p>

      {/* SINGLE LINE HEADING */}
      <h2 className="text-3xl md:text-5xl font-semibold whitespace-nowrap">
        Driven by Purpose <span className="text-yellow-400">Defined by Direction</span>
      </h2>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 items-center">

      {/* VISION */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-right pr-6"
      >
        <h3 className="text-xl font-semibold mb-3 text-yellow-400">Vision</h3>

        <p className="text-gray-400 max-w-sm ml-auto">
          To shape future-ready communities that deliver long-term value,
          combining sustainable development with smart investment opportunities.
        </p>
      </motion.div>

      {/* CENTER LINE */}
      <div className="hidden md:flex justify-center">
        <div className="relative w-[2px] h-56 bg-white/20">

          {/* DOT PERFECTLY INSIDE */}
          <motion.div
            animate={{ y: [0, 200, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"
          />

        </div>
      </div>

      {/* MISSION */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left pl-6"
      >
        <h3 className="text-xl font-semibold mb-3 text-yellow-400">Mission</h3>

        <p className="text-gray-400 max-w-sm">
          To deliver legally secure, thoughtfully planned land developments
          with modern infrastructure — ensuring transparency and long-term value.
        </p>
      </motion.div>

    </div>

  </div>
</section>

      {/* TRUST SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-yellow-500 uppercase text-xs mb-4 tracking-[4px]">
              Our Legacy
            </p>

            <h2 className="text-4xl font-semibold mb-6 text-black">
              25+ Years of Trust & Transparency
            </h2>

            <p className="text-gray-600 mb-4">
              With decades of experience, SEWA Infrastructure has built
              a reputation for delivering secure and value-driven land investments.
            </p>

            <p className="text-gray-600 mb-6">
              All projects are legally compliant and RERA approved,
              ensuring complete peace of mind.
            </p>

            <div className="flex gap-10">
              <div>
                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-gray-500 text-sm">Years</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">1000+</h3>
                <p className="text-gray-500 text-sm">Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.img
            src={aboutImg}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* PROJECT SECTION */}
<section className="py-28 bg-[#0B0B0B] text-white px-6">

  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-semibold mb-14">
      Ongoing Project
    </h2>

    {/* PROJECT CARD */}
    <div className="relative group overflow-hidden rounded-2xl">

      {/* IMAGE */}
      <img
        src={project1}
        className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

      {/* CONTENT ON IMAGE */}
      <div className="absolute bottom-8 left-8 text-left">

        <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          SEWA PRIME – II
        </h3>

        <p className="text-gray-300 text-sm mb-1">
          Kirnapur, Hudkeshwar Road, Nagpur
        </p>

        <p className="text-yellow-400 font-semibold">
          ₹2100 – ₹2200 / sq.ft
        </p>

      </div>

      {/* TAG */}
      <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-1 text-xs font-semibold rounded-full">
        Ongoing
      </div>

    </div>

  </div>
</section>

      {/* AMENITIES */}
<section className="py-28 bg-white px-6">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">
      <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-4">
        Amenities
      </p>

      <h2 className="text-3xl md:text-5xl font-semibold text-black">
        Infrastructure That <span className="text-yellow-500">Adds Value</span>
      </h2>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

      {[
        { name: "Entrance Gate", img: gate },
        { name: "Street Lights", img: project4 },
        { name: "Cement Roads", img: project3 },
        { name: "Plantation", img: project7 },
      ].map((item, i) => (

        <div
          key={i}
          className="relative group overflow-hidden rounded-2xl h-[260px]"
        >

          {/* IMAGE */}
          <img
            src={item.img}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>

          {/* CONTENT */}
          <div className="absolute bottom-6 left-6">

            {/* NUMBER */}
            <p className="text-white/50 text-sm mb-1">
              {`0${i + 1}`}
            </p>

            {/* TITLE */}
            <h3 className="text-white text-lg font-semibold">
              {item.name}
            </h3>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* LOCATION */}
<section className="py-28 bg-[#0B0B0B] text-white px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
        Location Advantage
      </p>

      <h2 className="text-3xl md:text-5xl font-semibold mb-6">
        Positioned for Growth — <br />
        <span className="text-yellow-400">Connected to Everything</span>
      </h2>

      <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
        Located near Hudkeshwar Road, one of Nagpur’s fastest growing corridors —
        offering seamless connectivity, upcoming infrastructure, and strong future appreciation.
      </p>

      {/* POINTS */}
      <div className="space-y-6">

        {[
          "Close to Schools & Colleges",
          "Nearby Hospitals & Daily Essentials",
          "Excellent Highway Connectivity",
        ].map((item, i) => (

          <div key={i} className="flex items-start gap-4">

            {/* LINE INDICATOR */}
            <div className="w-6 h-[2px] bg-yellow-400 mt-3"></div>

            <p className="text-gray-300">{item}</p>

          </div>

        ))}

      </div>

    </div>

    {/* RIGHT IMAGE / MAP */}
    <div className="relative">

      <img
        src={project2}
        className="rounded-2xl w-full h-[400px] object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      {/* FLOAT CARD */}
      <div className="absolute bottom-6 left-6 bg-white text-black px-6 py-4 rounded-lg shadow-xl">
        <p className="text-sm text-gray-500">Prime Zone</p>
        <h3 className="font-semibold">Hudkeshwar Road</h3>
      </div>

    </div>

  </div>

</section>

{/* WHY INVEST */}
<section className="py-28 bg-white px-6">

  <div className="max-w-7xl mx-auto text-center">

    {/* HEADER */}
    <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-4">
      Investment Value
    </p>

    <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6">
      Why Land is the <span className="text-yellow-500">Smartest Investment</span>
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      With limited supply and increasing demand, land offers unmatched stability,
      appreciation, and long-term wealth creation opportunities.
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "High Appreciation",
          desc: "Land value consistently grows over time, especially in developing areas.",
        },
        {
          title: "Low Maintenance",
          desc: "Unlike buildings, land requires minimal upkeep and no recurring costs.",
        },
        {
          title: "Secure Investment",
          desc: "A tangible asset with strong long-term returns and ownership security.",
        },
      ].map((item, i) => (

        <div
          key={i}
          className="group p-8 rounded-2xl border bg-white hover:shadow-xl transition duration-500 text-left"
        >

          {/* NUMBER */}
          <div className="text-gray-200 text-4xl font-bold mb-4">
            {`0${i + 1}`}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-yellow-500 transition">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>

          {/* HOVER LINE */}
          <div className="mt-6 h-[2px] w-0 bg-yellow-500 group-hover:w-full transition-all duration-500"></div>

        </div>

      ))}

    </div>

  </div>

</section>

     {/* CTA */}
<section className="py-28 bg-black text-white px-6 relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,162,83,0.12),transparent_60%)]"></div>

  <div className="max-w-5xl mx-auto text-center relative z-10">

    {/* HEADING */}
    <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
      Ready to Secure Your Plot —{" "}
      <span className="text-yellow-400">Before Prices Rise?</span>
    </h2>

    {/* SUBTEXT */}
    <p className="text-gray-400 mb-10 max-w-xl mx-auto">
      Book a site visit today and experience the location, infrastructure,
      and investment potential firsthand.
    </p>

    {/* CTA BUTTON */}
    <button
      onClick={() => navigate("/bookvisit")}
      className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-md
      shadow-[0_0_20px_rgba(202,162,83,0.5)]
      hover:scale-110 hover:shadow-[0_0_35px_rgba(202,162,83,0.8)]
      transition duration-300"
    >
      Book Site Visit →
    </button>

  </div>

</section>
    </>
  );
};

export default Advantages;