"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="fixed inset-0 z-40 flex pointer-events-none" aria-hidden="true">
            <Stairs />
          </div>
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-30 bg-primary pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
