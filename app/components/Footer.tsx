import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-12 px-8 md:px-36 py-14 bg-[#031826] text-white">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      ></link>

      {/* Social Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-6 gap-x-16 md:gap-x-12 w-full md:w-auto">
        <Link
          href="https://www.instagram.com/ai_student_chapter_ssn?igsh=ZzR3YXo5NWJqMGRk"
          className="flex gap-4 items-center justify-start md:justify-center px-2 md:px-0"
        >
          <i className="fa-brands fa-instagram text-3xl"></i>
          <span className="text-lg">ai_student_chapter_ssn</span>
        </Link>
        <Link
          href="https://chat.whatsapp.com/I45v8iachIO97mMn8nY4Nk"
          className="flex gap-4 items-center justify-start md:justify-center px-2 md:px-0"
        >
          <i className="fa-brands fa-whatsapp text-3xl"></i>
          <span className="text-lg">Community Chat</span>
        </Link>
        <Link
          href="https://www.instagram.com/ai_student_chapter_ssn?igsh=ZzR3YXo5NWJqMGRk"
          className="flex gap-4 items-center justify-start md:justify-center px-2 md:px-0"
        >
          <i className="fa-brands fa-linkedin text-3xl"></i>
          <span className="text-lg">ai_student_chapter_ssn</span>
        </Link>
      </div>

      {/* Logo and Text Section */}
      <Link
        href="/"
        className="flex flex-col justify-center items-start  gap-4 mt-10 md:mt-0"
        id="footer"
      >
        <Image
          className="min-h-auto min-w-[50px] md:h-[50px] md:w-auto" // Standard size for mobile
          src="/ssn.png"
          alt="ssn-logo"
          height={100} // Reduced height for mobile view
          width={100} // Reduced width for mobile view
        />
        <span
          className="text-5xl md:text-5xl leading-[1.4] md:leading-[1.2]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          AI Student Chapter
        </span>
      </Link>
    </div>
  );
};

export default Footer;
