"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const data = [
  {
    title: "Trade Exchange Brokerage",
    paragraph:
      " Leveraging our international network for expert brokerage in commodity markets, ensuring partners access optimal pricing and reliable transactional execution.",
    image:
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761932186/blur-1853262_1920_egrbhy.jpg",
  },

  {
    title: "Bespoke Procurement Services",
    paragraph:
      "Strategic sourcing and acquisition of specialized materials or equipment on behalf of our partners, ensuring quality, value, and reliable delivery schedules.",
    image:
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761932187/pier-102838_1280_p2p5so.jpg",
  },

  {
    title: "High-Value Business Consulting",
    paragraph:
      "Strategic advisory on market entry, operational structure, and compliance tailored for international growth and complex cross- jurisdictional ventures.",
    image:
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761932187/office-2360063_1920_lbygqq.jpg",
  },
  {
    title: "Project Management",
    paragraph:
      "Utilizing our integrated expertise to oversee and assure complex procurement or trade-related projects, guaranteeing they are delivered on time, within budget, and to specification.",
    image:
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761914972/woman-7450036_1920_zfsdtf.jpg",
  },
];

const HomeFullSpectrum = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-10 py-10 flex flex-col items-center justify-center"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-sans font-semibold text-2xl md:text-3xl capitalize text-anafad-primary-blue text-center mb-4 leading-snug"
      >
        The Full Spectrum: <br />
        Extending Our Global Reach
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
        className="font-sans font-normal text-sm md:text-md text-gray-600 text-center max-w-200 mx-auto"
      >
        Our mission is to redefine operational effectiveness in international
        business. Our focus is not merely on transactions, but on providing a
        stable, intelligent framework that allows our partners to scale with
        confidence. We ensure our partners are always operating with maximum
        efficiency, structured for success, and compliant with best
        international practices.
      </motion.p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-10 mt-10 w-full">
        {data?.map((datum, index) => (
          <motion.div
            key={datum?.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 * index }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <Image
                src={datum?.image}
                alt={datum?.title}
                width={305}
                height={350}
                className="w-full rounded-xl mb-5 h-[300px] md:h-[350px] object-cover"
              />
            </motion.div>

            <h5 className="font-sans font-medium text-lg md:text-xl text-black">
              {datum?.title}
            </h5>
            <p className="font-sans font-normal text-sm md:text-md text-gray-500 mt-2 max-w-[320px]">
              {datum?.paragraph}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeFullSpectrum;
