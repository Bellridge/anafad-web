"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import styles from "./style.module.scss";

interface MaskTextProps {
  phrases: string[];
}

export function MaskText({ phrases }: MaskTextProps) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-5%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={body} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={animation as any}
              initial="initial"
              animate={isInView ? "enter" : "closed"}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
