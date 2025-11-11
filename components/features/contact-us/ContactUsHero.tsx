"use client";

import { Button } from "@/components/shared/Button";
import Loader from "@/components/shared/Loader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ContactUsHero = () => {
  // Router
  const router = useRouter();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center flex-col overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <Image
          src="/contact-us.jpg"
          alt="Contact Us Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40 md:bg-black/30" />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 max-w-3xl text-center items-center px-4 sm:px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          className="font-sans font-semibold text-2xl sm:text-4xl md:text-5xl text-white capitalize leading-snug sm:leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          Global Trade. Architected Capital.
        </motion.h1>

        <motion.p
          className="font-sans font-normal text-sm sm:text-base md:text-lg text-white/90 w-full max-w-[40rem] leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          Your definitive platform for international commerce,{" "}
          <br className="hidden sm:block" />
          fortified by financial intelligence.
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
          <Button
            className="mt-4 sm:mt-6 rounded-full text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
            onClick={() => router.push("#contact-us-form")}
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUsHero;
