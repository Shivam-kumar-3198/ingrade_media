"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";

import type { Stat } from "@/lib/data/stats";

function StatValue({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? stat.value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(stat.value);
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, stat.value]);

  const formatted = stat.decimals ? display.toFixed(stat.decimals) : Math.round(display).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      {formatted}
      {stat.suffix}
    </span>
  );
}

export function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-white/5 bg-secondary/20 py-14">
      <div className="container grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="text-center"
          >
            <div className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              <StatValue stat={stat} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
