import React from "react";
import { motion } from "framer-motion";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const completedProjects = [
  {
    name: "SEWA PRIME",
    location: "Dhamna, Nagpur",
    status: "Completed",
    image: project2,
  },
  {
    name: "SEWA PRIME – I",
    location: "Ghogali, Nagpur",
    status: "Completed",
    image: project3,
  },
];

const CompletedProjects: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black text-white">
        <div className="text-center px-6">
          <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
            Our Legacy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Completed Projects <br />
            <span className="text-yellow-400">Built on Trust</span>
          </h1>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12">

            {completedProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* IMAGE */}
                <img
                  src={project.image}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                {/* STATUS BADGE */}
                <div className="absolute top-6 left-6 bg-green-500 text-white text-xs px-4 py-2 rounded-full font-semibold shadow">
                  {project.status}
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.location}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-6">
          25+ Years of Delivering Promises
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Every completed project reflects our commitment to quality,
          transparency, and long-term value for our clients.
        </p>

        <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:scale-105 transition">
          Explore Ongoing Projects
        </button>
      </section>
    </>
  );
};

export default CompletedProjects;