"use client";

import { Button } from "@/components/shared/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HomeMission = () => {
  // Router
  const router = useRouter();

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-25 px-6 md:px-10 py-16"
      id="about"
    >
      <motion.div
        className="flex flex-col gap-4 items-start basis-full md:basis-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h2
          className="font-sans font-semibold text-2xl sm:text-3xl md:text-4xl capitalize text-anafad-primary-blue max-w-160 leading-snug"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          Our Mandate: <br /> To Architect Structural Efficiency for Global
          Commerce.
        </motion.h2>

        <motion.p
          className="font-sans font-normal text-sm sm:text-base text-gray-600 max-w-180"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
            },
          }}
        >
          Our mission is to redefine operational effectiveness in international
          business. Our focus is not merely on transactions, but on providing a
          stable, intelligent framework that allows our partners to scale with
          confidence. We ensure our partners are always operating with maximum
          efficiency, structured for success, and compliant with best
          international practices.
        </motion.p>

        <motion.p
          className="font-sans font-normal text-sm sm:text-base text-gray-600 max-w-180"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            },
          }}
        >
          We believe that sustainable growth is built on foresight, precision,
          and integrity. Through the integration of financial intelligence and
          advanced trade architecture, we empower enterprises to transcend
          traditional limitations. Our solutions are designed not only to meet
          today’s demands but to anticipate tomorrow’s challenges, ensuring
          long-term resilience in a rapidly evolving global economy.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
            },
          }}
        >
          <Button variant="outline" onClick={() => router.push("/contact-us")}>
            Get to know more about us
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="basis-full md:basis-[505px] min-h-[400px] md:min-h-[500px] flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src="https://res.cloudinary.com/dmbqk1irb/image/upload/v1761914972/portrait-4568762_1920_hpmvd6.jpg"
          width={505}
          height={555}
          loading="lazy"
          alt="Our Mandate: To Architect Structural Efficiency for Global Commerce."
          className="rounded-xl w-full max-w-[400px] md:max-w-[505px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HomeMission;
