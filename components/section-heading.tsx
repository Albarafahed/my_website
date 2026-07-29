"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan">
        <span className="h-px w-8 bg-cyan/70" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty leading-7 text-muted-foreground">{description}</p> : null}
    </motion.div>
  );
}
