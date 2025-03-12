import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionContent = [
        {
            key: "1",
            title: "Who are we, and how was our club founded?",
            content:
                "The AI Student Chapter is an initiative by AICTE (All India Council for Technical Education) aimed at integrating AI into undergraduate and postgraduate courses. Our mission is to position India as a global leader in AI by fostering innovation and developing effective AI-driven solutions for society.",
        },
        {
            key: "2",
            title: "What do we aim to achieve?",
            content:
                "Our goal is to provide comprehensive AI education and prepare learners for real-world career opportunities. We strive to integrate AI across various fields, promote innovation, and ensure its ethical and responsible use.",
        },
        {
            key: "3",
            title: "How are we different from other clubs?",
            content:
                "Unlike traditional clubs, the AI Student Chapter tailors learning experiences to the specific needs of students across all departments. Each department has a designated point of contact (POC) who gathers student feedback to curate relevant workshops and talks. Additionally, we have an exciting lineup of events and interactive sessions planned throughout the year.",
        },
        {
            key: "4",
            title: "How can I be a part of the club?",
            content:
                "Stay connected by following our Instagram page and joining our WhatsApp Community Chat (link in the footer) to receive updates on events and engage with fellow AI enthusiasts.",
        },
    ];

    return (
        <div className="w-full mx-auto">
            {accordionContent.map((item, index) => (
                <motion.div
                    key={item.key}
                    initial={false}
                    animate={{ borderColor: activeIndex === index ? "#999" : "#ccc" }}
                    className=" mb-6 py-0 sm:py-2 px-0 sm:px-6 border-2 border-gray-300 text-md text-justify sm:text-left sm:text-lg w-full rounded-lg bg-transparent shadow-lg hover:border-[#999]"
                >
                    <button
                        className="cursor-pointer w-full flex justify-between items-center text-left p-4 font-[Poppins] bg-transparent  transition rounded-lg"
                        onClick={() => handleToggle(index)}
                    >
                        {item.title}
                        <motion.div
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4"
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </button>

                    <motion.div
                        initial={false}
                        animate={{
                            height: activeIndex === index ? "auto" : 0,
                            opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden font-[Poppins] leading-[2]"
                    >
                        <div className="p-4">{item.content}</div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default Accordion;
