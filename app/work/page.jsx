"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.section
      intial={{ opacity: 0 }}
      amimate={{ opacity: 1 }}
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
                {project.category} project
              </h2>

              <p className="text-white/60"> {project.description}</p>

              <ul className="flex gap-4">
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
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
