import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();  
  const location = useLocation(); 

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "The SEWA Advantage", path: "/advantages" },
    { name: "Amenities", path: "/amenities" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-yellow-500/10">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

          {/* 🔥 LEFT - LOGO */}
        <div
  onClick={() => {
    if (location.pathname === "/") {
      // force reload effect
      navigate(0);
    } else {
      navigate("/");
    }
  }}
  className="flex items-center gap-3 group cursor-pointer"
>

            <div className="relative p-2 rounded-lg bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 group-hover:border-yellow-400 transition">

              <div className="absolute inset-0 bg-yellow-400/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

              <img
                src={logo}
                alt="Sewa Infrastructure"
                className="relative h-12 md:h-14 object-contain transition group-hover:scale-105"
              />
            </div>

            <div className="hidden md:block leading-tight">
              <p className="text-white text-sm font-semibold tracking-wide">
                SEWA
              </p>
              <p className="text-[10px] text-gray-400 tracking-[2px] uppercase">
                Infrastructure
              </p>
            </div>

          </div>

          {/* 💎 CENTER NAV */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative transition group ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white/70 hover:text-yellow-400"
                  }`}
                >
                  {link.name}

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* 🎯 RIGHT CTA */}
          <div className="hidden md:flex items-center gap-4">

            <Link to="/bookvisit">
              <button className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm font-semibold rounded-md
              transition hover:scale-105 hover:shadow-[0_0_25px_rgba(202,162,83,0.5)] active:scale-95">
                Book Visit
              </button>
            </Link>

          </div>

          {/* 📱 MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </header>

      {/* 🔥 OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 📱 MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black border-l border-yellow-500/10 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex flex-col p-8 gap-8 mt-20 text-white">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg border-b border-white/10 pb-3 transition ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link to="/bookvisit" onClick={() => setIsOpen(false)}>
            <button className="mt-6 w-full py-3 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition">
              Book Site Visit
            </button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;