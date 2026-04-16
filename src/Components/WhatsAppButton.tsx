import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "7744961861";
  const message = "Hi, I am interested in your properties";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"

      // ✨ Subtle floating animation
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"

        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}

        className="flex items-center gap-3 bg-[#25D366] text-white 
        px-5 py-3 rounded-full shadow-xl backdrop-blur-md"
      >
        {/* ICON */}
        <FaWhatsapp className="text-2xl" />

        {/* TEXT ALWAYS VISIBLE */}
        <span className="text-sm font-medium whitespace-nowrap">
         Chat With Us
        </span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;