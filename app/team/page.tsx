'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    category: 'Faculty Incharge',
    members: [
      { name: 'Dr. Dhannya SM', role: 'Assistant Professor', dept: 'CSE', image: '/images/Dhannya_Pic.png' },
    ],
  },
  {
    category: 'Office Bearers',
    members: [
      { name: 'Pooja Premnath', role: 'President', dept: 'CSE', year: '4th', image: '/images/PoojaPremnath - Pooja Premnath.jpg' },
      { name: 'Micheal Berdinanth M', role: 'Vice President', dept: 'CSE', year: '3rd', image: '/images/Mmb Photo - Micheal Berdinanth M.jpg' },
      { name: 'Ananth Narayanan P', role: 'Secretary', dept: 'CSE', year: '3rd', image: '/images/Ananth Narayanan P - Ananth Narayanan P.jpeg' },
      { name: 'Poojitha Shree V', role: 'Joint Secretary', dept: 'ECE', year: '3rd', image: '/images/IMG-20221226-WA0032 - Poojitha Shree V.jpg' },
    ],
  },
  {
    category: 'Technical Team',
    members: [
      { name: 'Nandini Sree', dept: 'CSE', year: '3rd', image: '/images/IMG_7214 - Nandini Sree R R.jpeg' },
      { name: 'Samah Syed', dept: 'CSE', year: '3rd', image: '/images/1736663285202 - Samah Syed.jpeg' },
      { name: 'Nandana M', dept: 'IT', year: '3rd', image: '/images/IMG_20240308_223134_418 - Nandana M.webp' },
      { name: 'Shobith Kumar R', dept: 'CSE', year: '3rd', image: '/images/photo - Shobith Kumar R.png' },
      { name: 'Karthikeyan S', dept: 'CSE', year: '3rd', image: '/images/Karthikeyan Swaminathan - Karthikeyan Swaminathan.jpg' },
      { name: 'Harish R', dept: 'EEE', year: '3rd', image: '/images/Screenshot_20250306-225135~2 - Harish R.png' },
      { name: 'Justin Benito B', dept: 'ECE', year: '3rd', image: '/images/eed71d85-90ca-41dd-a3a2-3600921c6e74 - Justin Benito B.jpeg' },
    ],
  },
  {
    category: 'Department Representatives',
    members: [
      { name: 'Shakeel J', dept: 'BME', year: '3rd', image: '/images/Screenshot_2025-03-02-21-10-03-630_com.miui.gallery - Shakeel Jegsilan.jpg' },
      { name: 'Mohamed Javeed A', dept: 'Mech', year: '3rd', image: '/images/IMG-20250123-WA0006 - Mohamed Javeed.jpg' },
      { name: 'Mohit Sandeep', dept: 'EEE', year: '3rd', image: '/images/IMG_9072 - Mohit Sandeep.png' },
      { name: 'Yaanis Hadriyan J', dept: 'Civil', year: '1st', image: '/images/IMG_20250302_194552 - Yaanishadriyan J.jpg' },
      { name: 'Aathi Sankar', dept: 'ECE', year: '3rd', image: '/images/IMG_20241215_114946 - Aathi Sankar.jpg' },
      { name: 'Men Madiyan', dept: 'Chem', year: '1st', image: '/images/IMG20250227123834~2 - Menmadiyan Gopinath.jpg' },
      { name: 'Sudharshan PS', dept: 'IT', year: '3rd', image: '/images/LinkedIn_PFP_1 - Sudharshan P S.JPG' },
      { name: 'Nithya Manikandan', dept: 'MBA', year: '1st', image: '/images/IMG_20250304_145718 - Nithya Manikandan.jpg' },
    ],
  },
  {
    category: 'Design/Graphics Team',
    members: [
      { name: 'Yuvapriya N', dept: 'CSE', year: '3rd', image: '/images/20240308_122453 - Yuvapriya N.jpg' },
      { name: 'Hannah S', dept: 'CSE', year: '3rd', image: '/images/IMG-20221107-WA0015 - Hannah S.jpg' },
      { name: 'Dilsha Singh', dept: 'CSE', year: '3rd', image: '/images/IMG-20240316-WA0077 - Dilsha Singh D.jpg' },
    ],
  },
  {
    category: 'Web Master Team',
    members: [
      { name: 'Shaun Allan', dept: 'CSE', year: '3rd', image: '/images/download - Shaun Allan H.jpeg' },
      { name: 'Vithula S', dept: 'IT', year: '3rd', image: '/images/IMG_20250228_085337 - Vithula S.jpg' },
    ],
  },
  {
    category: 'PR/Sponsorship Team',
    members: [
      { name: 'Mugilkrishna DU', dept: 'CSE', year: '3rd', image: '/images/Screenshot_20250228_220258_Instagram - Mugilkrishna D U.jpg' },
      { name: 'Samyuktaa Sivakumar', dept: 'CSE', year: '3rd', image: '/images/e3fae66a-a561-4d79-9edc-5ae30d0d916c - Samyuktaa Sivakumar.jpeg' },
    ],
  },
  {
    category: 'Event Management Team',
    members: [
      { name: 'Vijay Srinivas K', dept: 'CSE', year: '3rd', image: '/images/Profile - Vijay Srinivas K.jpg' },
      { name: 'Shakeel J', dept: 'BME', year: '3rd', image: '/images/Screenshot_2025-03-02-21-10-03-630_com.miui.gallery - Shakeel Jegsilan.jpg' },
      { name: 'Janani Hariharakrishnan', dept: 'CSE', year: '3rd', image: '/images/dp - Janani Hariharakrishnan.jpg' },
      { name: 'Keshavraj S', dept: 'CSE', year: '3rd', image: '/images/IMG_2991 - Keshavraj S.JPG' },
      { name: 'Srinidhi L', dept: 'CSE', year: '3rd', image: '/images/IMG_20250228_024957 - Srinidhi Lakshmi Narayanan.jpg' },
    ],
  },
];

interface Member {
  name: string;
  dept: string;
  image: string;
  year?: string;
  role?: string;
}




export default function Team() {
  
  return (
    <div className="container mx-auto py-30 px-6 text-center">
      <motion.div
        className="relative text-6xl font-bold font-[Merriweather] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Team!
      </motion.div>

      {teamMembers.map((team, index) => (
        <motion.div
          key={index}
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-6 border-b-4 pt-2 pb-2 border-blue-900 font-[Poppins]">
            {team.category}
          </h2>
          <div className="flex flex-wrap gap-6 justify-center px-20">

            {team.members.map((member:Member, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-blue-300 hover:border-blue-900 transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mt-4 font-[Poppins]">{member.name}</h3>
                {member.role && <p className="font-semibold text-blue-500 font-[Inter]">{member.role}</p>}
                <p className="text-gray-600 font-[Inter]">{member.year} year, {member.dept}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}