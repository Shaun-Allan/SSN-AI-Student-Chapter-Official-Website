"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";


export default function Home() {
  const [scaled, setScaled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 8;
      setScaled(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="p-0 m-0">
        <div
          className={`h-screen w-full relative overflow-hidden flex items-center justify-center transition-all duration-500 ${
            scaled ? "scale-93 sm:scale-97 rounded-lg" : "scale-100 rounded-none"
          }`}
        >
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/landing_bg.mp4" type="video/mp4" />
          </video>

          {/* Overlay Content */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex flex-col items-center justify-center text-white gap-8">
            <Image
              className=""
              src="/ssn-white.svg"
              alt="ssn-logo"
              height={200}
              width={200}
            />
            <div className="flex gap-14">
              <span
                className="text-7xl sm:text-9xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                AI <span className="hidden sm:inline">Student</span>
              </span>
            </div>
            <span
              className="text-7xl sm:text-9xl block sm:hidden"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Student
            </span>
            <div className="flex">
              <span
                className="text-7xl sm:text-9xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Chapter
              </span>
            </div>
          </div>

          {/* Images with Animation using Framer Motion */}
          {/* <motion.div
            className="absolute bottom-60 left-25 flex flex-row-reverse gap-8 invisible md:visible"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3, delayChildren: 0.5 },
              },
              hidden: { opacity: 0 },
            }}
          >

            <motion.div
              className="w-48 h-48 relative right-40 "
              variants={{
                hidden: { opacity: 0, transform: "translateY(70%)" },
                visible: {
                  opacity: 0.6,
                  transform: "translateY(0)",
                  transition: { duration: 1 },
                },
              }}
            >
              <Image
                className="object-cover rounded-md w-48 h-60 hover:scale-105 transition-transform duration-300"
                src="/ssn-2.jpg"
                alt="ssn-2-image"
                width={192}
                height={192}
              />
            </motion.div>

            <motion.div
              className="w-48 h-48 relative top-30"
              variants={{
                hidden: { opacity: 0, transform: "translateY(70%)" },
                visible: {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: { duration: 1 },
                },
              }}
            >
              <Image
                className="object-cover rounded-md w-48 h-60 hover:scale-105 transition-transform duration-300"
                src="/ssn-1.png"
                alt="ssn-1-image"
                width={192}
                height={192}
              />
            </motion.div>


            <motion.div
              className=" h-48 absolute top-50 -right-220"
              variants={{
                hidden: { opacity: 0, transform: "translateY(70%)" },
                visible: {
                  opacity: 0.7,
                  transform: "translateY(0)",
                  transition: { duration: 1 },
                },
              }}
            >
              <Image
                className="object-cover rounded-md w-70 h-30 hover:scale-105 transition-transform duration-300"
                src="/ssn-3.jpg"
                alt="ssn-1-image"
                width={192}
                height={192}
              />
            </motion.div>
          </motion.div> */}
        </div>

        {/* Spacer Section */}
        <div className="h-screen w-full"></div>
      </div>
    </>
  );
}
