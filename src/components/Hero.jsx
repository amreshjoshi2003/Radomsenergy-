"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function Hero() {

  const videos = [
    "/home/solar-bg.mp4",
    "/home/solar-bg2.mp4",
    "/home/168801-839864542_medium.mp4"
  ];

  const [current, setCurrent] = useState(0);
  const progressRef = useRef(null);
  const cardRef = useRef(null);

  // cinematic slider
  useEffect(() => {

    const duration = 6000;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, duration);

    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";

      setTimeout(() => {
        progressRef.current.style.transition = `width ${duration}ms linear`;
        progressRef.current.style.width = "100%";
      }, 50);
    }

    return () => clearInterval(interval);

  }, [current]);

  // mouse parallax card
  const handleMove = (e) => {

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    cardRef.current.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  };

  const resetTilt = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-end overflow-hidden px-6 md:px-20">

      {/* VIDEO SLIDER */}
      {videos.map((video, index) => (
        <video
          key={index}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      {/* WATERMARK */}
      <div className="absolute bottom-6 right-8 text-white/70 text-sm tracking-wider pointer-events-none">
        © RadomsDigital
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* THREE JS PARTICLES */}
      <Hero3D />

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
        <div
          ref={progressRef}
          className="h-full bg-green-400 w-0"
        />
      </div>

      {/* CARD */}
      {current === 0 && (

        <motion.div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          relative z-10
          max-w-lg
          p-10
          rounded-2xl
          bg-white/90
          backdrop-blur-lg
          shadow-2xl
          transition-transform
          duration-300
        "
        >

          <p className="text-green-500 font-semibold text-lg">
            Green Energy Solar Solutions
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-tight text-gray-800">
            CLEAN ENERGY FOR A PURE WORLD
          </h1>

          <p className="mt-6 text-gray-600">
            Generate clean and free electricity and start earning from solar
            assets for your family.
          </p>

          <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-lg font-semibold transition">
            GET A QUOTE
          </button>

        </motion.div>

      )}

    </section>
  );
}