"use client";

import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";

const AboutUsHero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-10 md:py-30 ">
      <motion.div
        className="flex flex-col gap-4 max-w-3xl text-center items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h1
          className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl text-black capitalize leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          Our Core Focus: <br />
          <span className="text-anafad-primary-blue">
            The Foundation of Commercial Certainty
          </span>
        </motion.h1>

        <motion.p
          className="font-sans font-normal text-sm sm:text-base md:text-lg text-gray-600 w-full max-w-[40rem] leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          Anafad’s unique value is the seamless integration of high-level
          advisory and hands-on operational support. We don't just solve
          problems; we architect the entire commercial ecosystem for enduring
          performance.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <Button className="mt-2 rounded-full">Get Started</Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUsHero;
