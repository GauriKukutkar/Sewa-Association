import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate();

const socials = [
  { icon: FaFacebookF, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedinIn, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaYoutube, link: "#" },
];

  return (
    <footer className="relative text-white pt-24 pb-10 overflow-hidden">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black"></div>

      {/* 🔥 TOP WAVE / DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-2xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* 🏢 BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-3 group mb-6">

              <div className="relative p-2 rounded-lg bg-gradient-to-br from-yellow-500/10 border border-yellow-500/20">
                <img
                  src={logo}
                  alt="Sewa Infrastructure"
                  className="h-12 object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-semibold tracking-wide">SEWA</p>
                <p className="text-[10px] text-gray-400 tracking-[3px] uppercase">
                  Infrastructure
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Designing landmarks that elevate lifestyles and create long-term
              value. Where architecture meets trust.
            </p>

            
              <button onClick={() => navigate("/bookvisit")} className="mt-6 px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm font-semibold rounded-md hover:scale-105 transition">
                Book Visit →
              </button>
          </div>

          {/* 📌 NAVIGATION */}
          <div>
            <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
              <li><Link to="/advantages" className="hover:text-yellow-400">The Sewa Advantages</Link></li>
              <li><Link to="/amenities" className="hover:text-yellow-400">Amenities</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* 📞 CONTACT */}

<div>
  <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-6">
    Contact Details
  </h3>

  <ul className="space-y-5 text-gray-400 text-sm">

    {/* LOCATION */}
    <li className="flex items-start gap-3 group">
      <div className="w-9 h-9 flex items-center justify-center rounded-md 
        bg-yellow-500/10 border border-yellow-500/20 text-yellow-400
        group-hover:bg-yellow-500 group-hover:text-black transition">
        <FaMapMarkerAlt size={14} />
      </div>

      <span className="group-hover:text-white transition">
        Nagpur, Maharashtra - 440037
      </span>
    </li>

    {/* PHONE */}
    <li className="flex items-start gap-3 group">
      <div className="w-9 h-9 flex items-center justify-center rounded-md 
        bg-yellow-500/10 border border-yellow-500/20 text-yellow-400
        group-hover:bg-yellow-500 group-hover:text-black transition">
        <FaPhoneAlt size={13} />
      </div>

      <span className="group-hover:text-white transition">
        +91 7744961861
      </span>
    </li>

    {/* EMAIL */}
    <li className="flex items-start gap-3 group">
      <div className="w-9 h-9 flex items-center justify-center rounded-md 
        bg-yellow-500/10 border border-yellow-500/20 text-yellow-400
        group-hover:bg-yellow-500 group-hover:text-black transition">
        <FaEnvelope size={13} />
      </div>

      <span className="group-hover:text-white transition">
        rajuv.sewaassociation@gmail.com
      </span>
    </li>

  </ul>
</div>

          {/* 📩 NEWSLETTER (NEW - matches reference design) */}
          <div>
            <h3 className="text-yellow-400 text-sm uppercase tracking-[3px] mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Get latest project updates & offers.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 text-sm bg-black/40 border border-gray-700 rounded-l-md outline-none"
              />
              <button className="px-4 bg-yellow-500 text-black text-sm font-semibold rounded-r-md hover:bg-yellow-400 transition">
                →
              </button>
            </div>

           

<div className="flex gap-4 mt-6">
  {socials.map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-11 h-11 flex items-center justify-center rounded-full 
        bg-gradient-to-br from-white/5 to-white/0 
        border border-white/10 backdrop-blur-md
        hover:border-yellow-400 transition-all duration-300 hover:scale-110"
      >

        {/* 🔥 Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

        {/* ICON */}
        <Icon
          size={15}
          className="text-gray-400 group-hover:text-yellow-400 transition"
        />
      </a>
    );
  })}
</div>
          </div>
        </div>

        {/* ⚖️ BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>© 2026 Seva Infrastructure. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0 text-xs">
            <Link to="/privacy-policy" className="hover:text-yellow-400">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-yellow-400">
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" className="hover:text-yellow-400">
              Cookie Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;