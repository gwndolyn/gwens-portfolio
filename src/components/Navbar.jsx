import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    // Check if the link is for an in-page section (starts with '#')
    if (href.startsWith("#")) {
      // If you're not on the homepage, first navigate to the homepage
      if (window.location.pathname !== "/") {
        navigate("/"); // Navigate to the homepage
        setTimeout(() => {
          // After navigation, scroll to the section
          scrollToSection(href);
        }, 200); // Delay to ensure navigation completes before scrolling
      } else {
        // If already on the homepage, just scroll to the section
        scrollToSection(href);
      }
    } else {
      // If it's a full page route (e.g., /volunteering), navigate directly
      navigate(href);
    }

    // Close mobile menu after click
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href) => {
    // Scroll to the specified section with a smooth scroll effect
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -25; // Adjust for fixed navbar height
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
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
                <img src={logo} width={70} alt="logo" className="logo" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a className="text-sm hover:text-pink-400" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
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
          <div className="flex items-center justify-between">
            <div>
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
                <img src={logo} alt="logo" width={70} className="logo m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block w-full text-lg" onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
