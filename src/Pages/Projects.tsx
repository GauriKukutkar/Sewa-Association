import React from "react";
import { motion } from "framer-motion";
// import project1 from "../assets/project1.jpg";
// import project2 from "../assets/project2.jpg";
// import project3 from "../assets/project3.jpg";
import projects from "../assets/gateee.png"; 
import project8 from "../assets/about2.png";
import { useNavigate } from "react-router-dom";


const ongoingProject = {
  name: "SEWA PRIME – II",
  location: "Kirnapur, Hudkeshwar Road, Nagpur",
  price: "₹2100 - ₹2200 / sq.ft",
  image: project8,
  features: [
  "Gated Entry with Defined Layout Planning",
  "Wide Internal Roads for Seamless Connectivity",
  "Fully Developed Street Lighting System",
  "Eco-Friendly Plantation & Open Green Spaces",
],
};

// const completedProjects = [
//   {
//     name: "SEWA PRIME",
//     location: "Dhamna",
//     image: project2,
//   },
//   {
//     name: "SEWA PRIME – I",
//     location: "Ghogali",
//     image: project3,
//   },
// ];

const Projects: React.FC = () => {

  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const navigate = useNavigate();

  return (
    <>
  
{/* 🚀 HERO - PROJECTS */}
<section className="relative mt-10 h-[85vh] md:h-[95vh] flex items-center justify-center text-white overflow-hidden">

  {/* 🌄 BACKGROUND IMAGE */}
  <motion.img
    src={projects}
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 6, ease: "easeOut" }}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* 🌑 LIGHT OVERLAY (LESS DARK NOW) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* 🌟 SOFT GRADIENT (NOT HEAVY) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

  {/* ✨ CONTENT CENTERED */}
  <div className="relative z-10 text-center px-6 max-w-3xl">

    <motion.p
      initial={{ opacity: 0, letterSpacing: "2px" }}
      animate={{ opacity: 1, letterSpacing: "6px" }}
      transition={{ duration: 1 }}
      className="text-yellow-400 uppercase text-xs mb-5"
    >
      Our Projects
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
    >
      Crafted Land. <br />
      <span className="text-yellow-400">Smart Investment.</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-gray-200 text-lg leading-relaxed"
    >
      Thoughtfully developed spaces designed for growth, stability, and long-term value.
    </motion.p>

  </div>

</section>

      {/* ONGOING PROJECT (HIGHLIGHT) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={ongoingProject.image}
              className="rounded-2xl shadow-xl"
            />

            {/* PRICE BADGE */}
            <div className="absolute top-6 left-6 bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold shadow-lg">
              {ongoingProject.price}
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-500 uppercase tracking-[4px] text-xs mb-4">
              Ongoing Project
            </p>

            <h2 className="text-4xl font-semibold text-black mb-4">
              {ongoingProject.name}
            </h2>

            <p className="text-gray-600 mb-6">
              {ongoingProject.location}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {ongoingProject.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-gray-100 px-4 py-3 rounded-md text-sm font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>

            <button onClick={() => navigate("/contact")} className="px-8 py-3 bg-black text-white rounded-md hover:scale-105 transition">
              Enquire Now
            </button>
          </motion.div>

        </div>
      </section>

      {/* 🚀 SEWA PRIME (COMPLETED PROJECT) */}
<section className="py-28 bg-[#0B0B0B] text-white px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* 📝 CONTENT SIDE (LEFT NOW) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-left"
      >

        {/* PROJECT NAME */}
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          SEWA PRIME
        </h3>

        {/* LOCATION */}
        <p className="text-yellow-400 text-sm tracking-[3px] uppercase mb-6">
          Dhamna, Nagpur
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-relaxed mb-6">
          SEWA PRIME is a reflection of structured development and reliable delivery. 
          Built with a vision to offer both immediate usability and long-term appreciation, 
          the project delivers a balanced combination of planning and infrastructure.
        </p>

        <p className="text-gray-400 leading-relaxed mb-8">
          With completed internal roads, street lighting, and a well-defined layout, 
          it creates a space where investment translates into real, visible value — 
          making it a trusted choice among buyers and investors.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-gray-300">
          <p>✔ Planned Layout Development</p>
          <p>✔ Wide Internal Roads</p>
          <p>✔ Street Lighting Infrastructure</p>
          <p>✔ Green Surroundings</p>
        </div>

        {/* CTA */}
        {/* <button className="px-7 py-3 bg-yellow-500 text-black font-medium rounded-md 
        hover:scale-105 transition shadow-[0_0_20px_rgba(202,162,83,0.5)]">
          View Project →
        </button> */}

      </motion.div>

      {/* 🎬 VIDEO SIDE (RIGHT NOW) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden shadow-xl group"
      >
<iframe
  src="https://drive.google.com/file/d/186DzPTi7abkDn1BO8U8VChJToxs6Vjoo/preview"
  className="w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-xl"
></iframe>

        {/* LIGHT HOVER EFFECT */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition pointer-events-none"></div>

      </motion.div>

    </div>

  </div>
</section>

      {/* 🚀 SEWA PRIME – I (COMPLETED PROJECT) */}
<section className="py-28 bg-black text-white px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* 🎬 VIDEO SIDE (SELF-HOSTED) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden shadow-xl group"
      >

       <iframe
  src="https://drive.google.com/file/d/1JXtErHutfjAUIHIXO1zmImD8KvczN1Ck/preview"
  className="w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-xl"
></iframe>

        {/* OPTIONAL HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition pointer-events-none"></div>

      </motion.div>

      {/* 📝 CONTENT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        {/* PROJECT NAME */}
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          SEWA PRIME – I
        </h3>

        {/* LOCATION */}
        <p className="text-yellow-400 text-sm tracking-[3px] uppercase mb-6">
          Ghogali, Nagpur
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-relaxed mb-6">
          SEWA PRIME – I represents a strong foundation of trust and execution. 
          Designed with a focus on accessibility and future growth, the project 
          delivers a well-structured layout supported by essential infrastructure.
        </p>

        <p className="text-gray-400 leading-relaxed mb-8">
          With completed development, strategic location benefits, and increasing 
          demand in surrounding areas, it stands as a smart investment choice for 
          those looking to secure long-term value with peace of mind.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-gray-300">
          <p>✔ Defined Plot Layout</p>
          <p>✔ Developed Internal Roads</p>
          <p>✔ Functional Street Lighting</p>
          <p>✔ Surrounding Growth Potential</p>
        </div>

        {/* CTA */}
        {/* <button className="px-7 py-3 bg-yellow-500 text-black font-medium rounded-md 
        hover:scale-105 transition shadow-[0_0_20px_rgba(202,162,83,0.5)]">
          Explore Project →
        </button> */}

      </motion.div>

    </div>

  </div>
</section>

{/* 🌱 BEYOND DEVELOPMENT - CLEAN UNIFIED LUXURY GRID */}
<section className="py-32 px-6 bg-white relative overflow-hidden">

  {/* SOFT BACKGROUND */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-gray-100 blur-[120px] opacity-50 rounded-full"></div>
    <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-gray-100 blur-[140px] opacity-40 rounded-full"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
{/* HEADER - CLEAN + BALANCED YELLOW ACCENTS */}
<div className="mb-24 text-center">

  <p className="text-xs tracking-[10px] uppercase font-medium text-gray-500">
    <span className="text-yellow-500">Our</span> Approach
  </p>

  <h2 className="text-5xl md:text-6xl font-semibold mt-5 leading-tight text-gray-900">
    Structured Thinking,{" "}
    <span className="text-yellow-500">
      Natural Growth Systems
    </span>
  </h2>

  <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
    We design ecosystems where planning, infrastructure, and long-term value work as one continuous system.
  </p>

  {/* CLEAN YELLOW ACCENT LINE */}
  <div className="flex justify-center mt-8">
    <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80"></div>
  </div>

</div>

    {/* GRID */}
    <div className="grid md:grid-cols-12 gap-6">

      {[
        {
          title: "Green Ecosystem Planning",
          desc: "Nature and infrastructure are designed as one unified system for balance and sustainability.",
          span: "md:col-span-7"
        },
        {
          title: "Infrastructure First",
          desc: "All core utilities like roads, drainage, and lighting are completed before possession.",
          span: "md:col-span-5"
        },
        {
          title: "Strategic Location Planning",
          desc: "Projects are placed in high-growth corridors for long-term appreciation.",
          span: "md:col-span-4"
        },
        {
          title: "Structured Layout Design",
          desc: "Clean, organized planning systems ensure clarity and usability.",
          span: "md:col-span-4"
        },
        {
          title: "Future-Ready Development",
          desc: "Designed to evolve with population growth and infrastructure expansion.",
          span: "md:col-span-4"
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className={`${item.span} p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-lg transition`}
        >

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {item.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            {item.desc}
          </p>

        </motion.div>
      ))}

      {/* FINAL FULL WIDTH BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:col-span-12 p-10 rounded-3xl bg-gray-100 border border-gray-200 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-900">
          Trust • Transparency • Long-Term Vision
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Every decision is built on clarity, structure, and sustainable growth.
        </p>
      </motion.div>

    </div>
  </div>
</section>

    </>
  );
};

export default Projects;