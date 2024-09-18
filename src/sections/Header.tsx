"use client";
import { useState, useMemo } from "react";
import MenuIcon from "@/assets/menu.svg";

export const Header = ({ show = true, fadeIn = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const menuItems = useMemo(
    () => [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
      { label: "Certification", href: "#certification" },
      { label: "Projects", href: "#projects" },
    ],
    []
  );

  return (
    <header
      className={`sticky top-0 backdrop-blur-sm z-20 bg-white transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="py-5 px-4 md:px-20">
        <div className="flex items-center justify-between lg:text-2xl">
          {show && <div>Amish Dsouza</div>}
          {show || <div></div>}

          <MenuIcon
            className="h-6 w-6 md:hidden cursor-pointer"
            onClick={handleToggleDropdown}
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-12 font-light items-center lg:text-xl">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <button className="btn btn-primary">Contact</button>
          </nav>

          {/* Mobile Full-Screen Dropdown Menu */}
          <div
            className={`fixed inset-0 bg-white md:hidden transition-transform transform z-30 ${
              isDropdownOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="relative flex flex-col items-center">
              <button
                className="absolute right-4 text-gray-600 text-5xl"
                onClick={handleToggleDropdown}
              >
                &times;
              </button>
              <nav className="mt-20 flex flex-col items-center gap-8">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link text-2xl"
                    onClick={handleToggleDropdown}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  className="btn btn-primary mt-4"
                  onClick={handleToggleDropdown}
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
