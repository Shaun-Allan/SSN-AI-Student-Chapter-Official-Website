"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";



import ScrollVelocity from './components/ScrollVelocity';
import { Download } from "lucide-react";

import BlurText from "./components/BlurText";

export default function Home() {
  const [scaled, setScaled] = useState(false);


  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };


  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 8;
      setScaled(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pdfUrl = "/AI Student Chapter.pdf";

  return (
    <>
      <div className="p-0 m-0">
        <div
          className={`h-screen w-full relative overflow-hidden flex items-center justify-center transition-all duration-500 ${scaled ? "scale-93 sm:scale-97 rounded-lg" : "scale-100 rounded-none"
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

        {/* Pledge Section */}




        <div className="h-screen w-full px-6 sm:px-14 py-20 flex flex-col gap-10 justify-center items-center">
          <BlurText
            text="AI For All"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-[Merriweather] font-light  text-5xl sm:text-8xl mb-8"
          />
          <BlurText
            text="The Future Begins Here"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-[Merriweather] font-light  text-5xl sm:text-8xl mb-8"
          />
        </div>



        <ScrollVelocity
          texts={['Embracing AI in Education |', 'Shaping India\'s Future |']}
          velocity={50}
          className="custom-scroll-text"
        />

        {/* Spacer Section */}
        <div className="min-h-full sm:min-h-screen w-full px-6 sm:px-40 pt-20 sm:pt-0 sm:py-20 flex flex-col sm:flex-row gap-15 justify-center items-center">
          <div className="font-[Inter] text-justify sm:text-start text-lg sm:text-xl leading-[1.8] sm:leading-[2.5]" style={{ wordSpacing: '4px' }}>The AI Student Chapter is dedicated to fostering innovation, learning, and collaboration in the field of Artificial Intelligence. Aligned with <span className="text-3xl sm:text-4xl font-bold font-[Merriweather]">AICTE</span>'s (All India Council for Technical Education) vision, we aim to integrate AI into education through workshops, research initiatives, industry partnerships, and student-driven projects. Our mission is to equip students with the knowledge and skills needed to lead the AI revolution, ensuring ethical and impactful advancements in technology.<a
            href="/AI Student Chapter.pdf"
            download="AI Student Chapter.pdf"
          >
            <i className="fa-solid fa-up-right-from-square ml-2"></i>
          </a></div>
          <div className="relative rounded-md overflow-hidden shadow-xl group hidden sm:inline">
            {/* Image */}
            <img
              src="/aicte.png"
              alt="aicte"
              className="rounded-md w-[1400px] h-auto shadow-xl transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay & Download Button (Visible on Hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
              <a
                href="/AI Student Chapter.pdf"
                download="AI Student Chapter.pdf"
                className="text-white bg-black bg-opacity-100 p-4 rounded-full hover:bg-opacity-100 transition"
              >
                <Download size={40} className="text-white" />
              </a>
            </div>
          </div>


        </div>

        {/* Spacer Section */}
        <div className="min-h-full w-full px-6 sm:px-14 pb-20 flex flex-col gap-10">
          <span className="font-[Merriweather] font-semibold text-3xl sm:text-5xl">Questions Related To Our Club</span>
          <Accordion></Accordion>
        </div>
      </div>
    </>
  );
}
