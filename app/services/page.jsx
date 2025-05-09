"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive, user-friendly, and dynamic websites using the latest technologies like MERN stack and Next.js.",
    href: "",
  },
  {
    num: "02",
    title: "Software Development",
    description:
      "Developing robust and scalable web software tailored to your business needs, leveraging modern frameworks and tools.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "Optimizing your website to rank higher on search engines, driving organic traffic and improving your online visibility.",
    href: "",
  },
  {
    num: "04",
    title: "UI & UX Design",
    description:
      "Designing intuitive and engaging user interfaces with a focus on enhancing user experience and satisfaction.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeIn },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 hover:scale-150">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bh-white group-hover:bg-accent transition-all duration-400 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
