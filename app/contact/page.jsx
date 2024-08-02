"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    description: "Paheelo pul, Kathmandu, Nepal",
  },
];

const Contact = () => {
  return (
    <motion.section
      intial={{ opacity: 0 }}
      amimate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#1c1c1f] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                For further enquiry fill the input fields bellow:
              </p>

              <div className="grid grid-cols 1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Your first name" />
                <Input type="lastname" placeholder="Your last name" />
                <Input type="email" placeholder="Enter your email" />
                <Input type="phone" placeholder="Input your number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <selectLabel>Select A service </selectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Software Development</SelectItem>
                    <SelectItem value="est">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
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
