"use client";

import { FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript, SiNestjs, SiPrisma } from "react-icons/si";
import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Backend-focused system developer with professional software experience since 2023 across ERP platforms, business workflows, REST APIs, databases, and cloud delivery. I enjoy turning operational requirements into robust, maintainable software.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anush Malhotra",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+977) 9849997910",
    },
    {
      fieldName: "Experience",
      fieldValue: "Since 2023",
    },
    {
      fieldName: "Email",
      fieldValue: "anush.malhotra4@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Trollhättan, Sweden",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Nepali, Hindi, Swedish (A1)",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Computer science studies, focused full-stack training, and continued learning in Java, C#, and .NET complement my production experience.",
  items: [
    {
      institution: "University of the People",
      degree: "Associate Bachelor's Degree in Computer Science",
      duration: "2024 - Present · one term remaining",
    },
    {
      institution: "Deerwalk Training Center",
      degree: "Diploma in Full-Stack MERN Development",
      duration: "Mar 2023 - May 2023",
    },

    {
      institution: "Academic & personal development",
      degree: "Java and C# / .NET fundamentals",
      duration: "Ongoing",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Progressive experience spanning backend leadership, client delivery, full-stack applications, ERP systems, and earlier IT operations.",
  items: [
    {
      company: "Quantum Query Lab Ltd · Remote, UK",
      position: "Senior Developer / Backend Lead",
      duration: "Oct 2025 - Jul 2026",
    },
    {
      company: "Voltech HR · Remote, Nepal",
      position: "Web Developer",
      duration: "Jun 2025 - Sep 2025",
    },
    {
      company: "Freelance · Remote, Nepal",
      position: "Web Application Developer",
      duration: "Sep 2024 - Mar 2025",
    },
    {
      company: "Nepal Can Code",
      position: "Full-stack Developer",
      duration: "Sep 2023 - Mar 2024",
    },
    {
      company: "Deerwalk Compware Limited",
      position: "MERN Developer Intern",
      duration: "Jun 2023 - Jul 2023",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "A backend-first toolkit for designing, shipping, and operating business applications from database to interface.",
  skillList: [
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node js",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "Postgresql",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next js",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold"> {about.title} </h3>
                <p className="max-w-[600px] text-white/70 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
