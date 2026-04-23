import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/about.jpg";
import Hero from "../assets/hero.jpg"
// import heroVideo from "../assets/hero-video.mp4";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project7 from "../assets/project7.jpg";
import project4 from "../assets/project4.jpg";
import gate from "../assets/gate.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    review:
      "Investing with Sewa Infrastructure was one of the best decisions I made. The transparency and commitment they offer is truly unmatched.",
  },
  {
    name: "Priya Deshmukh",
    review:
      "From site visit to final purchase, everything was handled so professionally. You actually feel confident investing here.",
  },
  {
    name: "Rahul Verma",
    review:
      "The location and planning of their projects are just perfect. I can already see the value growing over time.",
  },
  {
    name: "Sneha Patil",
    review:
      "What I loved most is their honest guidance. No pressure, just genuine advice and support throughout.",
  },
];



const About: React.FC = () => {

  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);


 const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const navigate = useNavigate();

  return (
    <>

<section className="relative h-screen flex items-center overflow-hidden">

  {/* Background */}
  <motion.img 
    src={Hero}
    initial={{ scale: 1.3 }}
    animate={{ scale: 1 }}
    transition={{ duration: 8, ease: "easeOut" }}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlays */}
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(202,162,83,0.12),transparent_60%)]"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    
    <div className="max-w-2xl text-left">

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4"
      >
        Crafted for the Exceptional
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[2px] bg-yellow-400 mb-6"
      />

      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
      >
        Spaces That Don’t Just Exist — <br />
        <span className="text-yellow-400">They Influence Lifestyle</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed"
      >
        Built for visionaries who demand more than just a home.  
        Every structure is a blend of intention, elegance, and future-forward design.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="flex flex-wrap items-center gap-6"
      >

       <button
  onClick={() => scrollToSection("projects")}
  className="relative px-8 py-3 rounded-md font-semibold text-black
  bg-gradient-to-r from-yellow-400 to-yellow-600
  shadow-[0_0_25px_rgba(202,162,83,0.5)]
  transition duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(202,162,83,0.8)]"
>
  Explore Collection
</button>

        {/* Secondary CTA - Glass Style */}
        <button onClick={() => navigate("/bookvisit")}
         className="px-8 py-3 rounded-md border border-white/20 text-white
        backdrop-blur-lg bg-white/5
        transition duration-300 hover:bg-white/10 hover:scale-105">
          Book a Private Tour →
        </button>

      </motion.div>

    </div>
  </div>

  {/* Scroll Indicator */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
    className="absolute bottom-10 right-10 flex flex-col items-center"
  >

    <div className="w-[2px] h-12 bg-gray-500 relative overflow-hidden">
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-full h-1/2 bg-yellow-400"
      />
    </div>
  </motion.div>

</section>

      {/* COMPANY INFO */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-500 uppercase tracking-[4px] text-xs mb-4">
              Who We Are
            </p>

            <h2 className="text-4xl font-semibold mb-6 text-black">
              SEWA Infrastructure
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              With over <strong>25+ years of experience</strong>, SEWA Infrastructure
              has built a strong reputation in real estate by delivering trusted
              land investments and value-driven developments.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We specialize in plotted developments designed with essential
              infrastructure like cement roads, street lights, and green
              plantation to ensure long-term value and livability.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our projects are strategically located near growth corridors like
              Hudkeshwar Road, Nagpur, making them ideal for both investment and
              future residential development.
            </p>

            {/* INFO BOX */}
            <div className="mt-8 bg-gray-100 p-6 rounded-xl">
              <p className="text-sm text-gray-500">Registered Office</p>
              <p className="font-semibold text-black">
                Pipla Fatha, Hudkeshwar Road, Nagpur-440037
              </p>

              <p className="text-sm text-gray-500 mt-3">RERA ID</p>
              <p className="font-semibold text-black">P50500078793</p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutImg}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

  <section className="py-28 bg-[#0B0B0B] text-white px-6">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">
      <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
        Our Developments
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
        Spaces That Deliver <br />
        <span className="text-yellow-400">Long-Term Value</span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
        Each project reflects precision planning, strategic location, and a commitment to quality that stands the test of time.
      </p>
    </div>

    {/* 🔥 HORIZONTAL PROJECT CARDS */}
    <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4">

      {[
        {
          title: "Completed",
          name: "SEWA PRIME",
          location: "Dhamna",
          image: project1,
        },
        {
          title: "Completed",
          name: "SEWA PRIME – I",
          location: "Ghogali",
          image: project3,
        },
        {
          title: "Ongoing",
          name: "SEWA PRIME – II",
          location: "Kirnapur, Nagpur",
          image: project2,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl min-w-[300px] md:min-w-[360px] snap-start"
        >

          {/* IMAGE */}
          <img
            src={item.image}
            className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          {/* STATUS BADGE */}
          <div className="absolute top-5 left-5">
            <span
              className={`px-3 py-1 text-[10px] uppercase tracking-[3px] rounded-full ${
                item.title === "Ongoing"
                  ? "bg-yellow-500 text-black"
                  : "bg-white/10 text-white border border-white/20"
              }`}
            >
              {item.title}
            </span>
          </div>

          {/* CONTENT */}
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-1 group-hover:text-yellow-400 transition">
              {item.name}
            </h3>

            <p className="text-gray-300 text-sm">
              {item.location}
            </p>
          </div>

          {/* HOVER LINE */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>

        </motion.div>
      ))}

    </div>
  </div>
</section>


      {/* AMENITIES - LUXURY STYLE */}
<section className="py-32 bg-white px-6">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-24">
      <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-4">
        Amenities
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
        Designed for <span className="text-yellow-500">Better Living</span>
      </h2>

      <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
        Every detail is thoughtfully planned to enhance comfort, security, and everyday living.
      </p>
    </div>

    {/* 🔥 GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Entrance Gate",
          desc: "A grand and secure entry designed to create a lasting first impression.",
          image: gate,
        },
        {
          title: "Street Lights",
          desc: "Well-lit internal roads ensuring safety and visibility at all hours.",
          image: project4,
        },
        {
          title: "Cement Roads",
          desc: "Strong and durable infrastructure for smooth internal connectivity.",
          image: project3,
        },
        {
          title: "Roadside Plantation",
          desc: "Lush greenery that enhances air quality and overall lifestyle.",
          image: project7,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl"
        >

          {/* IMAGE */}
          <img
            src={item.image}
            className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute bottom-6 left-6 right-6">

            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500">
              {item.desc}
            </p>

          </div>

          {/* HOVER LINE */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

{/* TESTIMONIALS */}
<section className="py-28 bg-white px-6 overflow-hidden">
  <div className="max-w-4xl mx-auto text-center">

    {/* HEADER */}
    <p className="text-yellow-500 uppercase tracking-[6px] text-[11px] mb-4">
      Testimonials
    </p>

    <h2 className="text-3xl md:text-5xl font-semibold text-black mb-14 leading-tight">
      What Our <span className="text-yellow-500">Clients Say</span>
    </h2>

    {/* SLIDER */}
    <div className="relative min-h-[200px] flex items-center justify-center">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute text-center px-6 max-w-2xl"
        >

          {/* QUOTE ICON */}
          <div className="text-yellow-400 text-4xl mb-4">“</div>

          {/* REVIEW */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-light">
            {testimonials[index].review}
          </p>

          {/* NAME */}
          <h3 className="text-black font-semibold text-lg tracking-wide">
            {testimonials[index].name}
          </h3>

          {/* SUB LINE */}
          <div className="w-10 h-[2px] bg-yellow-400 mx-auto mt-3"></div>

        </motion.div>
      </AnimatePresence>

    </div>

    {/* DOT INDICATORS */}
    <div className="flex justify-center gap-3 mt-12">
      {testimonials.map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === index
              ? "w-8 bg-yellow-500"
              : "w-2 bg-gray-300 opacity-60"
          }`}
        />
      ))}
    </div>

  </div>
</section>

{/* 🚀 CTA SECTION */}
<section className="py-20 bg-black text-white px-6 text-center">
  <div className="max-w-3xl mx-auto">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
      Discover Why Sewa Prime <br />
      <span className="text-yellow-400">Stands Apart</span>
    </h2>

    {/* SUBTEXT */}
    <p className="text-gray-400 mb-8 text-sm md:text-base">
      Explore the key advantages that make this investment future-ready, secure, and value-driven.
    </p>

    {/* BUTTON */}
    <button
      onClick={() => navigate("/advantages")}
      className="px-8 py-3 bg-yellow-500 text-black font-medium rounded-md 
      hover:scale-105 transition shadow-[0_0_20px_rgba(202,162,83,0.4)]"
    >
      See Advantages →
    </button>

  </div>
</section>

{/* 🎬 SEWA PRIME VIDEO SECTION */}
<section className="py-24 bg-white px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* 🎥 VIDEO SIDE */}
    <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <iframe
        className="w-full h-full"
        src="https://youtu.be/pJpUeIPzQpc?si=OmwY6o1o6aL_BrTd"
        title="Sewa Prime Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* 📝 TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      {/* TAG */}
      <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-4">
        Sewa Prime
      </p>

      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight mb-6">
        Where Investment Meets <br />
        <span className="text-yellow-500">Future Growth</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        Sewa Prime is more than just a plotted development — it’s a strategically 
        positioned opportunity designed for long-term appreciation. With ready 
        infrastructure, prime connectivity, and a vision for future growth, it 
        offers both security and value in one place.
      </p>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Whether you’re planning your dream home or a smart investment, Sewa Prime 
        ensures a foundation built on trust, planning, and lasting returns.
      </p>

      {/* CTA */}
      <button onClick={() => navigate("/projects")} className="px-7 py-3 bg-yellow-500 text-black font-medium rounded-md 
      hover:scale-105 transition shadow-[0_0_25px_rgba(202,162,83,0.4)]">
        Explore Project →
      </button>

    </motion.div>

  </div>
</section>

     {/* 🎬 SEWA PRIME EXPERIENCE SECTION */}
<section className="py-28 bg-[#FAFAFA] px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    {/* 📝 TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      {/* TAG */}
      <p className="text-yellow-500 uppercase tracking-[6px] text-[11px] mb-5">
        Sewa Prime Experience
      </p>

      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight mb-6">
        Sewa Prime isn’t just land — <br />
        <span className="text-yellow-500">it’s positioning your future</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mb-5 leading-relaxed">
        Designed for those who think beyond today, Sewa Prime brings together 
        strategic location, ready infrastructure, and long-term value creation.
      </p>

      <p className="text-gray-600 mb-8 leading-relaxed">
        With seamless connectivity and thoughtfully planned layouts, it’s not 
        just about owning land — it’s about owning the right opportunity at 
        the right time.
      </p>

      {/* CTA */}
      <div className="flex items-center gap-6">

        <button onClick={() => navigate("/projects")} className="px-7 py-3 bg-yellow-500 text-black font-medium rounded-md 
        hover:scale-105 transition shadow-[0_0_25px_rgba(202,162,83,0.4)]">
          View Project →
        </button>

        {/* Secondary subtle CTA */}
        <button  onClick={() => navigate("/bookvisit")} className="text-black font-medium border-b border-black hover:border-yellow-500 hover:text-yellow-500 transition">
          Book Site Visit
        </button>

      </div>

    </motion.div>

    {/* 🎥 VIDEO SIDE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative group"
    >

      {/* Glow Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition"></div>

      {/* Video Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <iframe
          className="w-full h-[260px] sm:h-[360px] md:h-[420px]"
          src="https://youtu.be/T2MAfv0nNxs?si=wLa-5uOGJcgm0-QN"
          title="Sewa Prime Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Subtle Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
    </motion.div>


  </div>
</section>
    </>
  );
};

export default About;