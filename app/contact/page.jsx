"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+977) 9849997910",
  },

  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anush.malhotra4@gmail.com ",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Trollhättan, Sweden",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form action="mailto:anush.malhotra4@gmail.com" method="post" encType="text/plain" className="flex flex-col gap-6 p-10 bg-[#1c1c1f] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s build reliable systems</h3>
              <p className="text-white/60">
                I&apos;m open to system development, backend, and full-stack opportunities in Sweden and remote teams.
              </p>

              <div className="grid grid-cols 1 md:grid-cols-2 gap-6">
                <Input name="firstName" placeholder="Your first name" required />
                <Input name="lastName" placeholder="Your last name" />
                <Input name="email" type="email" placeholder="Enter your email" required />
                <Input name="phone" type="tel" placeholder="Your phone number" />
              </div>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[35px] h-[35px] xl:w-[72px] xl:h-[72px] bg-[#1c1c1f] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60"> {item.title} </p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
