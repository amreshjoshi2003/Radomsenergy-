"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function Hero() {

  const videos = [
    "/home/solar-bg.mp4",
    "/home/solar-bg2.mp4",
    "/home/commercial.mp4"
  ];

  const [current, setCurrent] = useState(0);

  const progressRef = useRef(null);
  const cardRef = useRef(null);

  const duration = 7000;

  // VIDEO SLIDER
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, duration);

    if (progressRef.current) {

      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";

      setTimeout(() => {
        progressRef.current.style.transition = `width ${duration}ms linear`;
        progressRef.current.style.width = "100%";
      }, 60);

    }

    return () => clearInterval(interval);

  }, [current]);

  // MOUSE TILT
  const handleMove = (e) => {

    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 6;

    cardRef.current.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  };

  const resetTilt = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center md:justify-end overflow-hidden px-4 sm:px-10 md:px-20 text-center md:text-left">

      {/* VIDEO BACKGROUND */}
      {videos.map((video, index) => (
        <video
          key={index}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* HERO BOTTOM GRADIENT (SECTION BLEND FIX) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

      {/* THREE JS */}
      <Hero3D />

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
        <div ref={progressRef} className="h-full bg-green-400 w-0"></div>
      </div>

      {/* WATERMARK */}
      <div className="absolute bottom-4 right-4 text-white/60 text-xs sm:text-sm tracking-wider pointer-events-none">
        © RadomsDigital
      </div>

      {/* HERO CARD */}
      {current === 0 && (
        <motion.div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="
            relative z-10
            w-[90%]
            max-w-xs
            sm:max-w-md
            md:max-w-lg
            p-4
            sm:p-6
            md:p-10
            rounded-lg
            sm:rounded-xl
            md:rounded-2xl
            bg-white/90
            backdrop-blur-lg
            shadow-2xl
            transition-transform duration-500
          "
        >

          <p className="text-green-500 font-semibold text-xs sm:text-sm md:text-lg">
            Green Energy Solar Solutions
          </p>

          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold mt-3 sm:mt-4 leading-tight text-gray-800">
            CLEAN ENERGY FOR A PURE WORLD
          </h1>

          <p className="mt-3 sm:mt-4 md:mt-6 text-gray-600 text-xs sm:text-sm md:text-base">
            Generate clean and free electricity and start earning from solar
            assets for your family.
          </p>

          <button className="mt-4 sm:mt-6 md:mt-8 bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-6 sm:py-2 md:px-7 md:py-3 rounded-lg font-semibold transition text-sm sm:text-base">
            GET A QUOTE
          </button>

        </motion.div>
      )}

    </section>
  );
}