"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${isScrolling ? "bg-white": "bg-transparent"}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          LOGA AREA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className={`${isScrolling ? "text-primary": "text-white"} hover:text-primary`}>
            Home
          </a>
          <a href="#blogs" className={`${isScrolling ? "text-primary": "text-white"} hover:text-primary`}>
            Blogs
          </a>
          <a href="#contact" className={`${isScrolling ? "text-primary": "text-white"} hover:text-primary`}>
            Contact
          </a>
          <a
            href="#signup"
            className="px-6 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-700 hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#signup"
                  className="px-6 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
