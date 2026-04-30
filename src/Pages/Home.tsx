import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Hero from "../assets/hero.jpg"
import heroVideo from "../assets/hero_home.mp4";
import About from "../assets/about1.png"
import project1 from "../assets/about2.png"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project10 from "../assets/project10.jpg"
import project6 from "../assets/project6.jpg"
import project7 from "../assets/project7.jpg"
import project8 from "../assets/project8.jpg"
import { useNavigate } from "react-router-dom";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Residential Projects",
    description:
      "We develop thoughtfully designed apartments and luxury villas that blend modern architecture with functional living. Every residential project is crafted to deliver comfort, security, and long-term value — creating spaces where families grow, thrive, and truly feel at home.",
    image: project2, 
  },
  {
    title: "Commercial Spaces",
    description:
      "Our commercial developments are built to empower businesses with prime locations, smart layouts, and future-ready infrastructure. From office complexes to retail hubs, we create environments that enhance visibility, productivity, and sustainable business growth.",
    image: project1,
  },
  {
    title: "Property Consultancy",
    description:
      "With deep market insights and strategic expertise, we guide you through every stage of your real estate journey. Whether you're buying, selling, or investing, our consultancy ensures informed decisions, risk minimization, and maximum returns on your investment.",
    image: project6,
  },
  {
    title: "Growing a Greener Future",
    description:
      "We believe development should coexist with nature. Through our plantation initiatives, we actively contribute to building greener environments, improving air quality, and promoting sustainable living — ensuring a better future for generations to come.",
    image: project7,
  },
];

// const projects = [
//   {
//     title: "Seva Heights",
//     image: project1,

//   },
//   {
//     title: "Seva Business Park",
//     image: project2,
//   },
//   {
//     title: "Seva Villas",
//     image: project3,
//   },
// ];

//stats
interface CounterProps {
  value: number;
}

const Counter = ({ value }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView]);

  useEffect(() => {
  if (inView) {
    animate(count, value, { duration: 2, ease: "easeOut" });
  }
}, [inView, value]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
};

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 2, suffix: "+", label: "Projects Delivered" },
  { value: 1000, suffix: "+", label: "Happy Families" },
  { value: 1, suffix: "+", label: "Ongoing Developments" },
];

const project_featured = [
  {
    name: "Sewa Heights",
    location: "Nagpur",
    image: project1,
    description:
      "A landmark of modern living in the heart of Nagpur, designed with intelligent planning, seamless connectivity, and premium lifestyle amenities that redefine everyday comfort.",
  },
  {
    name: "Residential Projects",
    location: "Central Business District",
    image: project8,
    description:
      "A dynamic commercial destination crafted for ambitious businesses, offering high-visibility retail spaces and smart office environments that fuel growth and innovation.",
  },
  {
    name: "Elite Residency",
    location: "Premium Residential Zone",
    image: project3,
    description:
      "An exclusive residential enclave where contemporary design meets serene surroundings, delivering privacy, elegance, and a refined living experience.",
  },
  {
    name: "Street lights & Roads Development",
    location: "Cityscape View Point",
    image: project10,
    description:
      "Iconic high-rise living with panoramic skyline views, blending architectural brilliance with world-class amenities for a truly elevated lifestyle.",
  },
  {
    name: "Green Horizon Initiative",
    location: "Nagpur & Surrounding Regions",
    image: project7,
    description:
      "A step beyond construction — dedicated to creating a greener tomorrow through large-scale tree plantation, fostering sustainability and environmental balance.",
  },
];

const highlights = [
  {
    title: "25+ Years of Trust",
    desc: "A legacy built on delivering reliable land investments with long-term value and transparency.",
  },
  {
    title: "Strategic Locations",
    desc: "Projects located near growth corridors like Hudkeshwar Road, ensuring future appreciation.",
  },
  {
    title: "Ready Infrastructure",
    desc: "Well-planned layouts with cement roads, street lights, and entrance development already in place.",
  },
  {
    title: "Nature Integrated Living",
    desc: "Thoughtful plantation and open layouts designed for a balanced and peaceful environment.",
  },
  {
    title: "Clear Legal Assurance",
    desc: "RERA registered and compliant projects ensuring secure and worry-free investment.",
  },
  {
    title: "Affordable Investment Range",
    desc: "Smart pricing starting from ₹2100/sq.ft., making land ownership accessible and valuable.",
  },
];

const Home: React.FC = () => {

 const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const navigate = useNavigate();

  return (
    <>

<section className="relative mt-10 h-[65vh] md:h-[80vh] lg:h-screen overflow-hidden text-white">

  {/* 🎬 VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* ✨ LIGHT GRADIENT (NO HEAVY DARK) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

  {/* 🔥 SIDE FADE (cinematic depth) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

  {/* 🌟 CONTENT (BOTTOM LEFT — PREMIUM FEEL) */}
  <div className="absolute bottom-10 ml-14 md:bottom-16 left-6 md:left-12 z-10 max-w-md">

    {/* Minimal Label */}
    <motion.p
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white uppercase tracking-[6px] text-[10px] mb-3"
    >
      Welcome to
    </motion.p>

    {/* Headline */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
    >
    <span className="text-yellow-400"> Sewa Infrastructure</span>
    </motion.h1>

    {/* Optional subtle line */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "60px" }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-[2px] bg-yellow-400 mt-4"
    />

  </div>

  {/* 🎯 FLOATING CTA (OPTIONAL BUT 🔥) */}
  {/* <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    className="absolute bottom-10 right-6 md:right-12 z-10"
  >
    <button className="px-6 py-3 bg-yellow-500 text-black text-sm font-medium rounded-md 
    hover:scale-105 transition shadow-[0_0_25px_rgba(202,162,83,0.5)]">
      Explore → 
    </button>
  </motion.div> */}

</section>

{/* About section */}
<section id="vision" className="py-28 bg-white px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      {/* Tagline */}
      <p className="text-yellow-500 font-semibold uppercase tracking-[4px] text-xs mb-4">
        About Our Vision
      </p>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-yellow-500 mb-6"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-black leading-tight">
        We Don’t Just Build Structures — <br />
        <span className="text-yellow-500">We Shape Experiences</span>
      </h2>

      {/* Content */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        Our approach goes beyond construction. We create environments that elevate lifestyles, 
        combining thoughtful design with long-term value and modern functionality.
      </p>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Every project reflects a commitment to precision, innovation, and a vision for future-ready living.
      </p>

      {/* Stats */}
      <div className="flex gap-10 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-black">25+</h3>
          <p className="text-gray-500 text-sm">Years Experience</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black">3+</h3>
          <p className="text-gray-500 text-sm">Projects</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black">1000+</h3>
          <p className="text-gray-500 text-sm">Happy Clients</p>
        </div>
      </div>

      {/* CTA */}
      <button className="group px-7 py-3 border border-black text-black rounded-md relative overflow-hidden transition">
        
        <span onClick={() => scrollToSection("difference")} className="relative z-10 group-hover:text-white transition">
          Discover More
        </span>

        <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
      
      </button>

    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative"
    >

      {/* Image */}
      <img 
        src={About} 
        className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
      />

      {/* Floating Accent Box */}
      <div className="absolute -bottom-10 -left-10 bg-yellow-500 text-black px-6 py-4 rounded-lg shadow-xl hidden md:block">
        <p className="text-sm font-semibold">Trusted by</p>
        <h3 className="text-xl font-bold">1000+ Clients</h3>
      </div>

    </motion.div>

  </div>
</section>

<section id="difference" className="bg-[#0B0B0B] text-white py-32 px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-yellow-400 tracking-[5px] text-xs mb-4 uppercase">
            Our Difference
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Crafted for Today. <br />
            <span className="text-yellow-400">Positioned for Tomorrow.</span>
          </h2>

          <p className="text-gray-400 mt-6 text-sm md:text-base">
            Every detail is designed to deliver not just land, but a secure and valuable future.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl border border-white/10 
              backdrop-blur-xl bg-white/5 hover:bg-white/10 transition duration-500"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl"></div>

              {/* Number */}
              <div className="text-6xl font-bold text-white/5 mb-6">
                {`0${i + 1}`}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>

{/* SERVICES */}
<section id="projects" className="py-32 bg-white px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-24">
      <p className="text-yellow-500 uppercase tracking-[6px] text-[11px] mb-5">
        What We Do
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
        Crafted Spaces. <br />
        <span className="text-yellow-500">Designed for Growth.</span>
      </h2>
    </div>

    {/* Sections */}
    <div className="space-y-28">

      {services.map((service, i) => {
        const isReverse = i % 2 !== 0;

        return (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              isReverse ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={service.image}
                className="w-full h-[400px] object-cover rounded-2xl group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="px-4 md:px-8"
            >

              {/* Small Label */}
              <p className="text-yellow-500 text-xs tracking-[4px] mb-4 uppercase">
                {`0${i + 1}`}
              </p>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-semibold mb-5 text-black leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Button */}
              <button className="relative inline-flex items-center gap-2 text-black font-medium group">

                <span onClick={() => navigate("/bookvisit")} className="relative z-10">
                  Explore More
                </span>

                <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all duration-300"></span>

              </button>

            </motion.div>

          </div>
        );
      })}

    </div>

  </div>
</section>

{/* PROJECTS SHOWCASE */}
<section className="py-28 bg-black text-white px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-20">
      <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-4">
        Our Portfolio
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold">
        Signature <span className="text-yellow-500">Developments</span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-xl mx-auto">
        A curated collection of premium residential and commercial spaces designed for modern lifestyles and long-term value.
      </p>
    </div>

    {/* 🔥 ALL PROJECTS SAME STYLE */}
    <div className="space-y-20">

      {project_featured.map((project, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl"
        >

          {/* IMAGE */}
          <img
            src={project.image}
            className="w-full h-[420px] md:h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute bottom-8 md:bottom-10 left-6 md:left-10 max-w-lg">

            <p className="text-yellow-400 text-xs tracking-[4px] mb-3 uppercase">
              {i === 0 ? "Featured Project" : "Premium Development"}
            </p>

            <h3 className="text-2xl md:text-4xl font-semibold mb-3">
              {project.name}
            </h3>

<p className="text-gray-300 mb-4 text-sm md:text-base">
  {project.description
    ? project.description
    : `Located in ${project.location}, crafted with modern infrastructure, strategic planning, and premium lifestyle experiences.`}
</p>

            <button onClick={() => navigate("/bookvisit")} className="px-5 md:px-6 py-2.5 md:py-3 bg-yellow-500 text-black text-sm md:text-base font-medium rounded-md hover:scale-105 transition">
              More Details →
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-24 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[5px] text-xs mb-3">
            Our Impact
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Building More Than Just <br />
            <span className="text-yellow-500">Spaces</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Every project reflects our commitment to quality, trust, and long-term value creation.
          </p>
        </div>

        {/* 🔥 COUNTERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

  {stats.map((item, i) => (
    <div
      key={i}
      className="group border border-gray-200 rounded-xl py-10 hover:border-yellow-400 hover:shadow-lg transition"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-black group-hover:text-yellow-500 transition">
        <Counter value={item.value} />
        {item.suffix}
      </h3>

      <p className="text-gray-500 mt-2 text-sm tracking-wide">
        {item.label}
      </p>
    </div>
  ))}

</div>

        {/* FOOT TEXT */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            From concept to completion, we focus on delivering excellence that lasts —
            shaping communities, enhancing lifestyles, and creating spaces people truly value.
          </p>
        </div>

      </div>
    </section>
    </>
  );
};

export default Home;