import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const AIAssistant = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🤖 FLOATING BUTTON (LEFT SIDE) */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-yellow-400 to-yellow-600 
        text-black p-4 rounded-full shadow-xl"

        // subtle pulse
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}

        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaRobot className="text-xl" />
      </motion.button>

      {/* 💬 CHAT BOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 50 }}
            transition={{ duration: 0.4 }}

            className="fixed bottom-20 left-6 w-[320px] md:w-[350px] 
            bg-[#0B0B0B]/95 backdrop-blur-xl text-white rounded-2xl 
            shadow-[0_0_40px_rgba(202,162,83,0.15)] 
            border border-yellow-500/20 z-50 overflow-hidden"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-yellow-500/10">
              <h3 className="text-yellow-400 font-semibold tracking-wide">
                AI Assistant
              </h3>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="p-4 space-y-3">

              <p className="text-sm text-gray-400 leading-relaxed">
                Ask anything about plots, pricing, location or site visits.
              </p>

              {/* INPUT */}
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 
                outline-none text-sm focus:border-yellow-500 transition"
              />

              {/* SEND BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}

                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 
                text-black py-2.5 rounded-lg font-medium shadow-md"
              >
                Ask Now
              </motion.button>

            </div>

            {/* FOOTER GLOW */}
            <div className="absolute -bottom-10 left-0 w-full h-20 bg-yellow-400/10 blur-2xl"></div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;