'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    title: 'AI Student Chapter Inauguration',
    date: 'March 7, 2025',
    time: '10:00 AM',
    location: 'CSE Seminar Hall',
    description: 'Official launch of the SSN AI Student Chapter with guest speakers and live demos.',
    image: '/images/inaugration.jpg',
  },
  {
    title: 'Logo Designing Contest',
    date: 'Upcoming',
    time: 'TBD',
    location: 'Online',
    description: 'Design logos using Generative AI tools like DALL·E, Adobe Firefly, and Midjourney.',
    image: '/images/logo-design.jpg',
  },
];

export default function Events() {
  return (
    <div className="container mx-auto py-20 px-6 text-center">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Events!
      </motion.h1>
      <div className="relative border-l-4 border-blue-500 pl-6 before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-gradient-to-b from-blue-500 to-blue-900">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`mb-12 relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full left-[-1.75rem] border-4 border-white shadow-md"></div>
            <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-blue-600">{event.title}</h2>
              <p className="text-gray-700 mt-2">📅 {event.date} | ⏰ {event.time}</p>
              <p className="text-gray-600 mt-2">📍 {event.location}</p>
              <p className="text-gray-500 mt-4">{event.description}</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image
                src={event.image}
                alt={event.title}
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
