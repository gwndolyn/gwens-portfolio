import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection(href);
        }, 200);
      } else {
        scrollToSection(href);
      }
    } else {
      navigate(href);
    }

    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -25;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
                <img src={logo} width={70} alt="logo" className="logo" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-pink-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between p-4">
            <div>
              <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
                <img src={logo} alt="logo" width={70} className="logo" />
              </a>
            </div>
            <div className="flex items-center">
              <motion.button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </motion.button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              className="absolute left-0 top-16 w-full rounded-lg bg-black/40 backdrop-blur-md z-50 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ul className="flex flex-col gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <motion.li
                    key={index}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      className="block text-sm text-white hover:text-pink-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
