import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState("enquiry");

  return (
    <section className="py-28 bg-[#0B0B0B] px-6 min-h-screen">

      <div className="mt-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE (FORMS) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
        >

          {/* TABS */}
          <div className="flex mb-8 border-b">

            <button
              onClick={() => setActiveTab("enquiry")}
              className={`px-6 py-3 font-medium ${
                activeTab === "enquiry"
                  ? "border-b-2 border-yellow-500 text-black"
                  : "text-gray-400"
              }`}
            >
              Enquiry
            </button>

            <button
              onClick={() => setActiveTab("visit")}
              className={`px-6 py-3 font-medium ${
                activeTab === "visit"
                  ? "border-b-2 border-yellow-500 text-black"
                  : "text-gray-400"
              }`}
            >
              Book Visit
            </button>

          </div>

          {/* FORM TITLE */}
          <h2 className="text-2xl font-semibold mb-6 text-black">
            {activeTab === "enquiry"
              ? "Send Enquiry"
              : "Schedule Your Site Visit"}
          </h2>

          {/* FORM */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-4 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <select className="w-full border p-4 rounded-md">
              <option>Select Project</option>
              <option>SEWA PRIME – II</option>
            </select>

            {/* CONDITIONAL FIELDS */}
            {activeTab === "visit" && (
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="border p-4 rounded-md" />
                <input type="time" className="border p-4 rounded-md" />
              </div>
            )}

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border p-4 rounded-md"
            ></textarea>

            <button
              className="w-full py-4 rounded-md font-semibold text-black
              bg-gradient-to-r from-yellow-400 to-yellow-500
              hover:scale-105 transition duration-300"
            >
              {activeTab === "enquiry"
                ? "Submit Enquiry"
                : "Book Site Visit →"}
            </button>

          </form>

        </motion.div>

        {/* RIGHT SIDE (INFO + MAP) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >

          {/* TEXT */}
          <div>

            <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
              Contact
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Let’s Connect & <br />
              <span className="text-yellow-400">Find Your Perfect Plot</span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-md">
              Reach out for pricing, availability, or to schedule your visit.
              Our team ensures a smooth and transparent experience.
            </p>

            {/* INFO */}
            <div className="space-y-5 text-gray-300">

             <div>
  <p className="text-gray-500 text-sm">Phone</p>
  <p className="font-semibold text-white">
    <a href="tel:+917744961861" className="hover:text-yellow-400 transition">
      +91 7744961861
    </a>
    <span className="mx-2 text-gray-400">/</span>
    <a href="tel:+917744961862" className="hover:text-yellow-400 transition">
      +91 7744961862
    </a>
  </p>
</div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-semibold text-white">
                  rajuv.sewaassociation@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Address</p>
                <p className="font-semibold text-white">
                  Pipla Fatha, Hudkeshwar Road, Nagpur-440037
                </p>
              </div>

            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/917744961861"
              target="_blank"
              className="inline-block mt-8 px-6 py-3 bg-green-500 rounded-md hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* MAP */}
          <div className="mt-10 rounded-2xl overflow-hidden h-[250px] shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Hudkeshwar%20Road%20Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;