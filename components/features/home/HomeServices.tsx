"use client";

import { Button } from "@/components/shared/Button";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  showHeader?: boolean;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const services = [
  {
    title: "Strategic Business Solutions & HR Consultancy",
    paragraph:
      "We move beyond transactional support to refine your core corporate structure. Our specialists provide bespoke consultancy to harmonize international operations, optimize human resource strategies (including international recruitment, policy harmonization, and compliance mapping), and integrate advanced business solutions. We ensure your corporate capacity is always architecturally sound and poised for global ambition.",
    image:
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761929067/Rectangle_65_2_ytfbwy.svg",
  },

  {
    title: "Trade Support & Global Logistics Mastery",
    paragraph:
      "As an integrated trading company, we guarantee commodity flow. We manage the full lifecycle of import and export, from strategic sourcing and regulatory documentation to customs brokerage and complex logistics. This foundational service de-risks your supply chain, ensuring every commodity movement is efficient, compliant, and precisely executed, dramatically reducing transactional friction and mitigating exposure to global market volatility.",
    image:
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761929067/Rectangle_65_cqknc8.svg",
  },

  {
    title: "Capital Structuring & Financial Intelligence",
    paragraph:
      "We design and implement sophisticated capital strategies that empower sustainable growth and operational resilience. Our financial architects specialize in structured trade finance, risk mitigation, and liquidity optimization building intelligent frameworks that strengthen fiscal stability across jurisdictions. Through disciplined analysis and strategic foresight, we enable our partners to unlock capital efficiency, navigate regulatory complexity, and expand with confidence in competitive global markets.",
    image:
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761929069/Rectangle_65_1_hmjok4.svg",
  },
];

const HomeServices: React.FC<Props> = ({ showHeader = true }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Router
  const router = useRouter();

  return (
    <section
      ref={sectionRef}
      className="flex flex-col px-6 md:px-10 py-10 gap-4 justify-center items-center"
    >
      {showHeader && (
        <>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sans font-semibold text-2xl md:text-3xl capitalize text-anafad-primary-blue md:text-center leading-snug"
          >
            Our Core Focus: <br /> The Foundation of Commercial Certainty
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="font-sans font-normal text-sm md:text-md text-gray-600 md:text-center max-w-[700px]"
          >
            Anafad’s unique value is the seamless integration of high-level
            advisory and hands-on operational support. We don't just solve
            problems; we architect the entire commercial ecosystem for enduring
            performance.
          </motion.p>
        </>
      )}

      <div className="w-full flex flex-col gap-16 mt-10">
        {services?.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={service?.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 * index }}
              className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-col gap-3 items-center md:items-start md:text-left max-w-[600px]">
                <h4 className="font-sans font-semibold text-lg md:text-xl capitalize text-anafad-primary-blue">
                  {service?.title}
                </h4>
                <p className="font-sans font-normal text-sm md:text-md text-gray-600 max-w-[400px]">
                  {service?.paragraph}
                </p>
                <Button
                  className="mt-4 w-fit"
                  onClick={() => router.push("/contact-us")}
                >
                  Get Started
                </Button>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={service.image}
                  alt={service?.title}
                  width={510}
                  height={420}
                  className="rounded-xl object-cover w-full max-w-[450px] md:max-w-[510px]"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeServices;
