"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Industrial operations",
    title: "Industrial Ops Hub",
    status: "In development",
    description:
      "An operations-focused full-stack system built around enterprise and industrial workflow scenarios. It uses a modular NestJS backend, TypeScript, PostgreSQL, React, and a containerized development environment. The operational modules and interface are actively evolving.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "React", "Docker"],
    images: [],
  },
  {
    num: "02",
    category: "Enterprise ERP · Backend lead",
    title: "Symbiote ERP",
    description:
      "Led backend delivery for a multi-module ERP and business-operations platform. I translated business requirements into backend architecture, PostgreSQL schemas, Prisma models, and REST API workflows spanning organizations, branches, departments, attendance, tasks and subtasks, recurring work, notifications, inventory, stock adjustments, and supplier mappings. I also supported QA, cloud deployment environments, documentation, defect resolution, and production-style troubleshooting.",
    stack: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "AWS",
    ],
    images: Array.from(
      { length: 14 },
      (_, index) => `/assets/work/symbiote${index + 1}.png`,
    ),
  },
  {
    num: "03",
    category: "Production website · Solo delivery",
    title: "Voltech HR",
    description:
      "Designed and developed Voltech HR's production corporate and recruitment website from client requirements through deployment. The responsive Next.js platform presents the company's manpower services, recruitment process, international placement offering, leadership, clients, and contact journey with a reusable component structure and focused SEO and performance work.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    images: [],
    href: "https://www.voltechhr.com/",
    linkLabel: "Visit live website",
  },
  {
    num: "04",
    category: "Web + AI integration",
    title: "Browser Fingerprinting with AI Chat",
    description:
      "A browser-fingerprinting application paired with AI-assisted responses. It connects frontend fingerprint collection to backend processing, persistence, and external API integration, with a React interface and Python and Node.js services.",
    stack: ["JavaScript", "Python", "React", "Node.js", "MongoDB"],
    images: [
      "/assets/work/fp.png",
      "/assets/work/fp-2.png",
      "/assets/work/fp-3.png",
      "/assets/work/fp-4.png",
    ],
  },
  {
    num: "05",
    category: "Workforce time management",
    title: "Time Tracker",
    description:
      "A MERN application for tracking working hours, pauses, and break reasons. Calendar views make work patterns easier to review and support straightforward workforce time-management workflows.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    images: [
      "/assets/work/tt1.png",
      "/assets/work/tt2.png",
      "/assets/work/tt3.png",
      "/assets/work/tt4.png",
    ],
  },
  {
    num: "06",
    category: "ERP feature development",
    title: "BayuPayu Maps & Social Tools",
    description:
      "Feature work for an in-house ERP application using Node.js, Express.js, React, and MongoDB. Contributions included REST API logic, schema design, map and geolocation features, social-media workflows, and a demo check-in/check-out flow.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    images: ["/assets/work/map.png"],
  },
  {
    num: "07",
    category: "Role-based business application",
    title: "Canteen Management System",
    description:
      "A role-based canteen application developed during a MERN internship. Work included MongoDB data models, Node.js server logic, JWT authentication, order processing, reusable React components, and API testing with Postman and Insomnia.",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
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
];

const truncateText = (text, maxLength) =>
  text.length <= maxLength ? text : `${text.substring(0, maxLength)}...`;

export default function Work() {
  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      className="min-h-[80vh] py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="mb-14 max-w-[760px]">
          <span className="text-sm uppercase tracking-[0.25em] text-accent">
            Selected work
          </span>
          <h1 className="h2 mb-4 mt-3">Systems built around real workflows</h1>
          <p className="text-white/60">
            ERP features, operational tools, APIs, and full-stack applications—shown
            with clear status labels where work is still evolving.
          </p>
        </div>

        {projects.map((project, index) => (
          <article
            key={project.title}
            className="mb-16 flex flex-col border-b border-white/10 pb-12 xl:flex-row xl:gap-[50px]"
          >
            <div
              className={`mb-8 flex w-full flex-col gap-6 ${
                project.images.length > 0 || project.mediaNote
                  ? "xl:w-[50%]"
                  : "xl:max-w-[780px]"
              }`}
            >
              <div className="text-outline text-7xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wider text-white/50">
                <span>{project.category}</span>
                {project.status && (
                  <span className="rounded-full border border-accent/60 px-3 py-1 text-accent">
                    {project.status}
                  </span>
                )}
              </div>
              <h2 className="text-[30px] font-bold leading-tight text-white">
                {project.title}
              </h2>
              <p className="text-white/60">
                {expandedProjectIndex === index
                  ? project.description
                  : truncateText(project.description, 170)}
              </p>
              {project.description.length > 170 && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="w-fit text-left text-accent"
                  aria-expanded={expandedProjectIndex === index}
                >
                  {expandedProjectIndex === index ? "See less" : "See more"}
                </button>
              )}
              <ul className="flex flex-wrap gap-2 text-accent">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full bg-accent/10 px-3 py-1">
                    {item}
                  </li>
                ))}
              </ul>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-primary transition-colors hover:bg-accent-hover"
                >
                  {project.linkLabel}
                  <FiExternalLink />
                </a>
              )}
            </div>

            {project.images.length > 0 ? (
              <div className="w-full xl:w-[50%]">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="mb-6 xl:w-[520px]"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={image}>
                      <div className="relative h-[360px] overflow-hidden rounded-xl bg-[#232329] xl:h-[430px]">
                        <Image
                          src={image}
                          fill
                          className="object-contain"
                          alt={`${project.title} screen ${imgIndex + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  {project.images.length > 1 && (
                    <WorkSliderBtns
                      containerStyles="flex gap-2 absolute right-3 bottom-3 z-20"
                      btnStyles="bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                    />
                  )}
                </Swiper>
              </div>
            ) : project.mediaNote ? (
              <div className="flex w-full items-center xl:w-[50%]">
                <div className="flex min-h-[260px] w-full items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#232329]/50 p-8 text-center text-white/40">
                  {project.mediaNote}
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </motion.section>
  );
}
