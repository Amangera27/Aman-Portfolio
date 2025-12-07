"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BorderBeam } from "./ul/BorderBeam";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`text-white fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
          : "md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl  flex flex-wrap items-center justify-between mx-auto  py-4 px-4 md:px-0">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Portfolio
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="overflow-hidden font-medium flex items-center flex-col p-4 md:p-0 mt-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:backdrop-blur-none md:shadow-none">
            <li>
              <a
                href="/"
                className="block py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 relative after:absolute after:content-[''] after:-bottom-1 after:-left-8 hover:after:left-0   after:w-0  hover:after:w-8  after:transition-all after:duration-300 after:h-0.5 after:bg-white "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  relative after:absolute after:content-[''] after:-bottom-1 after:-left-8 hover:after:left-0   after:w-0  hover:after:w-8  after:transition-all after:duration-300 after:h-0.5 after:bg-white "
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  relative after:absolute after:content-[''] after:-bottom-1 after:-left-8 hover:after:left-0   after:w-0  hover:after:w-8  after:transition-all after:duration-300 after:h-0.5 after:bg-white "
              >
                Projects
              </a>
            </li>
            <li className="flex gap-3 items-center py-2 px-3 md:py-0 md:px-0">
              <a
                href="https://www.instagram.com/amangera_arts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-heading border border-neutral-tertiary rounded-full hover:bg-[#405DE6] hover:text-white hover:border-brand transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/aman.gera.98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-heading border border-neutral-tertiary rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-gera-a2a087311/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-heading border border-neutral-tertiary rounded-full hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </li>
            <a
              href="#contact"
              className=" relative  px-3 py-2 hover:bg-black/20 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Let's connect{" "}
              <BorderBeam className="absolute inset-0 pointer-events-none" />
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
