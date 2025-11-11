"use client";

import { Button } from "@/components/shared/Button";
import InfiniteCarousel from "@/components/shared/InfiniteCarousel";
import RotatingText from "@/components/shared/RotatingText";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Utils
const images = [
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913543/office-2360063_1920_jssd9b.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913542/pier-102838_1280_o1qzl8.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913543/map-3260506_1920_branlm.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913542/london-3833039_1920_oo79am.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913542/hands-8062985_1920_an3gmo.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913541/london-2682501_1920_du18de.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913476/charlie-hales-8yTeH9axe6E-unsplash_phec60.jpg",
  "https://res.cloudinary.com/dmbqk1irb/image/upload/v1761913475/action-2277292_1920_nfbfm3.jpg",
];

const words = [
  "UK-Established Authority",
  "Global Investment Partner",
  "Trusted Capital Network",
  "Innovative Financial Architect",
  "Strategic Trade Advisor",
  "International Market Leader",
  "Global Trade Facilitator",
  "Capital Growth Catalyst",
];

function HomeHero() {
  // Navigate
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-20 md:py-30 min-h-screen ">
      <motion.div
        className="flex flex-col gap-4 max-w-3xl text-center items-center px-4"
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
          Global Trade. Architected Capital. <br />
          <span className="text-anafad-primary-blue">
            <RotatingText words={words} />
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
            className="mt-2 rounded-full"
            onClick={() => router.push("#about")}
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full flex flex-col flex-1 gap-4 py-4 relative "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <InfiniteCarousel images={[...images, ...images]} />
        <InfiniteCarousel images={[...images, ...images].reverse()} reverse />

        <div className="absolute left-0 top-0 w-[10%] sm:w-[8%] h-full bg-linear-to-r from-white/80 via-white/40 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-[10%] sm:w-[8%] h-full bg-linear-to-l from-white/80 via-white/40 to-transparent pointer-events-none z-10"></div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
