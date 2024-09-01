"use client";

import { useState } from "react";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-white">
      <div className="py-5">
        <div className="px-4 md:px-20">
          <div className="flex items-center justify-between lg:text-2xl">
            <div>Amish Dsouza</div>

            <MenuIcon
              className="h-6 w-6 md:hidden cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Mobile Full-Screen Dropdown Menu */}
            <div
              className={`fixed inset-0 bg-white md:hidden transition-transform transform ${
                isDropdownOpen ? "translate-x-0" : "translate-x-full"
              } z-30`}
              style={{ transition: "transform 0.3s ease-in-out" }}
            >
              <div className="relative flex flex-col items-center ">
                <button
                  className="absolute justify-center right-4 text-gray-600 text-5xl"
                  onClick={toggleDropdown}
                >
                  &times; {/* Close icon */}
                </button>
                <nav className="mt-20 flex flex-col items-center gap-8">
                  <a
                    href="#"
                    className="text-gray-800 text-2xl hover:text-blue-600 transition-colors"
                    onClick={toggleDropdown}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 text-2xl hover:text-blue-600 transition-colors"
                    onClick={toggleDropdown}
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 text-2xl hover:text-blue-600 transition-colors"
                    onClick={toggleDropdown}
                  >
                    Experience
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 text-2xl hover:text-blue-600 transition-colors"
                    onClick={toggleDropdown}
                  >
                    Education
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 text-2xl hover:text-blue-600 transition-colors"
                    onClick={toggleDropdown}
                  >
                    Certification
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 text-2xl hover:text-blue-600 transition-colors"
                    onClick={toggleDropdown}
                  >
                    Projects
                  </a>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={toggleDropdown}
                  >
                    Contact
                  </button>
                </nav>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-12 font-light items-center lg:text-xl">
              <a className="relative inline-block px-1 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:transform after:scale-x-0 hover:after:scale-x-100 after:content-['']">
                Home
              </a>
              <a className="relative inline-block px-1 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:transform after:scale-x-0 hover:after:scale-x-100 after:content-['']">
                About
              </a>
              <a className="relative inline-block px-1 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:transform after:scale-x-0 hover:after:scale-x-100 after:content-['']">
                Experience
              </a>
              <a className="relative inline-block px-1 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:transform after:scale-x-0 hover:after:scale-x-100 after:content-['']">
                Education
              </a>
              <a className="relative inline-block px-1 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:transform after:scale-x-0 hover:after:scale-x-100 after:content-['']">
                Certification
              </a>
              <a className="relative inline-block px-1 hover:text-blue-600 transition-colors after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600 after:transition-all after:transform after:scale-x-0 hover:after:scale-x-100 after:content-['']">
                Projects
              </a>
              <button className="btn btn-primary">Contact</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
