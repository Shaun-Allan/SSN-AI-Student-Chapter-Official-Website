"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [textDark, setTextDark] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setTextDark(scrollY > window.innerHeight);
      setShowTitle(scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setFooterVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 w-full flex items-center justify-between px-4 md:px-20 transition-all duration-300 z-10 ${
        pathname !== "/" || (pathname === "/" && scrolled)
          ? "py-4 backdrop-blur-sm"
          : "py-10 bg-transparent"
      }`}
    >
      {/* Title Section */}
      <Link
        href="/"
        className={`text-lg font-semibold transition-all duration-500 flex justify-center items-center gap-2 md:gap-6 ${
          !footerVisible
            ? pathname === "/"
              ? showTitle && !footerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          className="h-[32px] sm:h-[42px] w-auto"
          src="/ssn.png"
          alt="ssn-logo"
          height={200}
          width={200}
        />
        <span
          className="text-md sm:text-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          AI Student Chapter
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-30">
        {["/team", "/events"].map((link, index) => (
          <Link
            key={index}
            href={link}
            className={`font-[Inter] text-lg transition-all duration-300 relative group ${
              pathname === "/" && !textDark ? "text-white" : "text-black"
            }`}
          >
            {link.replace("/", "").charAt(0).toUpperCase() + link.slice(2)}
            <span
              className={`absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        ))}
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center z-50 relative">
        <motion.button
          className="flex flex-col justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
            className={`block w-6 h-1 rounded mb-1 ${
              textDark || isMobileMenuOpen || pathname !== "/"
                ? "bg-black"
                : "bg-white"
            }`}
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
            }
            transition={{
              rotate: { type: "spring", stiffness: 260, damping: 20 },
              y: { type: "spring", stiffness: 260, damping: 20 },
              backgroundColor: { duration: 1.0 },
            }}
          ></motion.span>
          <motion.span
            className={`block w-6 h-1 rounded mb-1 ${
              textDark || isMobileMenuOpen || pathname !== "/"
                ? "bg-black"
                : "bg-white"
            }`}
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{
              opacity: { duration: 0.2 },
              backgroundColor: { duration: 1.0 },
            }}
          ></motion.span>
          <motion.span
            className={`block w-6 h-1 rounded ${
              textDark || isMobileMenuOpen || pathname !== "/"
                ? "bg-black"
                : "bg-white"
            }`}
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            transition={{
              rotate: { type: "spring", stiffness: 260, damping: 20 },
              y: { type: "spring", stiffness: 260, damping: 20 },
              backgroundColor: { duration: 1.0 },
            }}
          ></motion.span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-white py-4 px-16 flex flex-col items-center md:hidden justify-center items-start font-[Inter] gap-24 font-bold bg-"
            initial={{ y: -500 }} // Start position (above the screen)
            animate={{ y: 0 }} // End position (slide down to its normal position)
            exit={{ y: -1000 }} // Slide back up when it closes
            transition={{ type: "spring", stiffness: 420, damping: 50 }}
          >
            {["/team", "/events"].map((link, index) => (
              <Link
                key={index}
                href={link}
                className="block text-black text-4xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.replace("/", "").charAt(0).toUpperCase() + link.slice(2)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
