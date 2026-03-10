"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Residential3D from "./Residential3D";

export default function Commercial() {

  const imgRef = useRef(null);

  const handleMove = (e) => {

    if (window.innerWidth < 1024) return;

    const rect = imgRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 6;

    imgRef.current.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = () => {
    if (imgRef.current)
      imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const features = [
    {
      icon: "🏢",
      title: "Lower Business Energy Costs",
      desc: "Reduce operational electricity expenses."
    },
    {
      icon: "📈",
      title: "High Return on Investment",
      desc: "Commercial solar provides strong ROI."
    },
    {
      icon: "🌍",
      title: "Sustainable Corporate Energy",
      desc: "Build a green and responsible brand."
    },
    {
      icon: "🏭",
      title: "Industrial Energy Solutions",
      desc: "Reliable solar systems for large facilities."
    }
  ];

  return (
    <section className="relative py-14 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-20 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          <p className="text-green-500 font-semibold tracking-widest uppercase text-xs sm:text-sm">
            Commercial Solar
          </p>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Solar Energy For
            <br />
            Businesses & Industries
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Empower your business with reliable commercial solar solutions.
            Reduce operational costs, improve sustainability, and generate
            clean electricity for offices, factories, and commercial buildings.
          </p>

          {/* FEATURE CARDS */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {features.map((f, index) => (

              <div
                key={index}
                className="
                relative
                flex gap-3 items-start
                bg-white
                p-4
                rounded-xl
                border border-gray-100
                shadow-sm
                transform
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:-translate-y-1
                hover:shadow-2xl
                hover:border-green-200
                cursor-pointer
                group
                "
              >

                {/* hover glow */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-green-100/0
                  via-green-100/40
                  to-green-100/0
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  rounded-xl
                  pointer-events-none
                " />

                <span className="text-green-500 text-xl sm:text-2xl relative z-10">
                  {f.icon}
                </span>

                <div className="relative z-10">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {f.title}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500">
                    {f.desc}
                  </p>
                </div>

              </div>

            ))}

          </div>

          {/* CTA BUTTON */}
          <button
            className="
            mt-8 md:mt-10
            bg-green-500
            hover:bg-green-600
            text-white
            px-6 sm:px-7 md:px-8
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            transition
            hover:scale-105
            "
          >
            Get Commercial Solar Quote
          </button>

        </motion.div>

        {/* VIDEO SIDE */}
        <div className="relative perspective-[1000px]">

          <div
            ref={imgRef}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            className="
            relative
            rounded-2xl lg:rounded-3xl
            overflow-hidden
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            transition
            duration-500
            hover:scale-[1.02]
            "
          >

            <video
              autoPlay
              muted
              loop
              playsInline
              className="
              w-full
              h-[260px]
              sm:h-[340px]
              md:h-[420px]
              lg:h-[520px]
              xl:h-[620px]
              object-cover
              "
            >
              <source src="/home/commercial-1.mp4" type="video/mp4" />
            </video>

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 via-transparent to-green-300/10"></div>

            {/* 3D particles */}
            <div className="absolute inset-0 pointer-events-none">
              <Residential3D />
            </div>

          </div>

          {/* FLOATING BADGE */}
          <div className="absolute -bottom-4 sm:-bottom-5 right-3 sm:right-4 lg:-bottom-6 lg:-right-6 bg-white shadow-lg px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl">

            <p className="text-xs sm:text-sm text-gray-500">
              Business ROI
            </p>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
              5X Returns
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}