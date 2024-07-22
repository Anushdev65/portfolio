"use client";

import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArowUpRight, BsGithub } from "react-icons/bs";
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
    category: "MERN stack",
    title: "Canteen Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus modi eius. Minima qui provident sint laboriosam ipsum quae aperiam nesciunt, ea veritatis natus illo adipisci non. Quisquam, culpa esse.",
    stack: [
      { name: "Mongodb" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Javascript" },
    ],
    image: "/",
  },
  {
    num: "02",
    category: "MERN stack",
    title: "Time tracker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus modi eius. Minima qui provident sint laboriosam ipsum quae aperiam nesciunt, ea veritatis natus illo adipisci non. Quisquam, culpa esse.",
    stack: [
      { name: "Mongodb" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Javascript" },
    ],
    image: "/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      intial={{ opacity: 0 }}
      amimate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capatalize">
                {project.title}
              </h2>

              <p className="text-white/60"> {project.description}</p>

              <ul className="flex gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}

                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:5-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 buttom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* 
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project page"
                        />
                      </div> */}
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
