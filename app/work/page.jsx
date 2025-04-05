"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Inhouse Web-App",
    title: "Canteen Management System",
    description:
      "In developing the Canteen Management System, I designed the data schema and developed server-side logic to handle various functionalities. Implementing JWT-based authentication ensured secure access for different user roles. I designed and managed the database, including data modeling and queries for efficient data retrieval. I created robust logic for handling user orders, optimized for different roles, enhancing the ordering process. The UI was built using MUI components, providing a modern and consistent look. I also created reusable components for both the canteen users and administrators. For state management and data manipulation, I utilized React core packages like Redux and RTK, along with Yup for validation and Formik for form state management. Additionally, I rigorously tested and validated APIs using tools like Postman and Insomnia to ensure reliability and functionality.",
    stack: [
      { name: "Mongodb" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Javascript" },
    ],
    images: [
      "/assets/work/cs1.png",
      "/assets/work/cs2.png",
      "/assets/work/cs3.png",
      "/assets/work/cs4.png",
      "/assets/work/cs5.png",
      "/assets/work/cs6.png",
      "/assets/work/cs7.png",
      "/assets/work/cs8.png",
    ],
  },
  {
    num: "02",
    category: "MERN stack",
    title: "Time tracker",
    description:
      "Time Tracker is a comprehensive application designed to monitor and manage user working hours effectively. This system features a pause timer to accurately track breaks and interruptions, ensuring that users can maintain precise records of their working time. It includes functionality for entering and managing reasons for breaks or pauses, allowing for detailed reporting and accountability. The application also integrates a calendar plotting feature, enabling users to visualize and schedule their work hours efficiently. This feature helps in organizing and reviewing work patterns, promoting better time management and productivity. The Time Tracker is built with a user-friendly interface to streamline the process of tracking and analyzing working hours, making it an essential tool for individuals and teams seeking to optimize their time management.",
    stack: [
      { name: "Mongodb" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Javascript" },
    ],
    images: [
      "/assets/work/tt1.png",
      "/assets/work/tt2.png",
      "/assets/work/tt3.png",
      "/assets/work/tt4.png",
    ],
  },
  {
    num: "03",
    category: "Inhouse Web-App/software",
    title: "Bayupayu Maps & social-media-management",
    description:
      " I focused on building a robust backend to support complex business logic while ensuring a seamless and interactive frontend experience. I also integrated MapApp, a child application within the ERP system, incorporating geolocation functionality and map-based features. Utilizing React and Leaflet for the frontend, I ensured a smooth user experience, while MongoDB handled backend data management efficiently. Additionally, I implemented social media management features, enabling users to publish and manage their social media pages directly from the app, streamlining their online presence and engagement.",
    stack: [
      { name: "Mongodb" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Javascript" },
    ],
    images: ["/assets/work/map.png"],
  },
  {
    num: "04",
    category: "E-com",
    title: "Tea-store Ecom (onGoing)",
    description: "A store providing delightful teas and information.",
    stack: [
      { name: "Next.js" },
      { name: "Mongodb" },
      { name: "Node.js" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
    ],
    images: ["/assets/work/tea.png"],
  },
  {
    num: "05",
    category: "Web/ml",
    title: "Browser-Fingerprinting with AI chat",
    description:
      "This innovative project combines advanced browser fingerprinting techniques with AI-powered chat functionality to provide users with a unique and secure browsing experience. The application leverages a sophisticated AI model to detect and analyze browser fingerprints, ensuring enhanced security and privacy. The chat component, built with React and integrated with Google’s Generative AI, offers real-time, interactive communication for users seeking information or support.",
    stack: [
      { name: "Mongodb" },
      { name: "Node.js" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "React" },
      { name: "Python" },
    ],
    images: [
      "/assets/work/fp.png",
      "/assets/work/fp-2.png",
      "/assets/work/fp-3.png",
      "/assets/work/fp-4.png",
    ],
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

const Work = () => {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col xl:flex-row xl:gap-[30px] mb-12"
            >
              <div className="w-full xl:w-[50%] xl:h-auto flex flex-col xl:justify-between">
                <div className="flex flex-col gap-[30px] mb-8">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                  <h2 className="text-[30px] font-bold  leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                    {project.title}
                  </h2>
                  <p className="text-white/60">
                    {expandedProjectIndex === index
                      ? project.description
                      : truncateText(project.description, 150)}
                  </p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-accent mt-2"
                  >
                    {expandedProjectIndex === index ? "See Less" : "See More"}
                  </button>
                  <ul className="flex gap-2 flex-wrap">
                    {project.stack.map((item, stackIndex) => (
                      <li key={stackIndex} className="text-xl text-accent">
                        {item.name}
                        {stackIndex !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                  <div className="border border-white/20"></div>
                </div>
              </div>
              <div className="w-full xl:w-[50%] ">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:w-[520px] mb-12"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="h-[460px] relative group flex items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full flex items-center">
                          <Image
                            src={image}
                            fill
                            className="object-contain"
                            alt={`project image ${imgIndex + 1}`}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <WorkSliderBtns
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  />
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
