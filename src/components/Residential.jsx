"use client";

import Residential3D from "./Residential3D";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Residential() {

  const imgRef = useRef(null);

  const handleMove = (e) => {

    if (window.innerWidth < 768) return;

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
      icon: "⚡",
      title: "Lower Electricity Bills",
      desc: "Reduce energy costs with solar power."
    },
    {
      icon: "🌱",
      title: "Clean Renewable Energy",
      desc: "Environment friendly solar systems."
    },
    {
      icon: "🏠",
      title: "Increase Home Value",
      desc: "Solar adds long-term property value."
    },
    {
      icon: "💰",
      title: "Long-Term Savings",
      desc: "Reliable energy investment for decades."
    }
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-8 md:px-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="relative perspective-[1000px]">

          <div
            ref={imgRef}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-300"
          >

            <img
              src="/home/4.jpg"
              alt="Residential Solar"
              className="w-full h-[300px] sm:h-[400px] md:h-full object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 via-transparent to-green-300/10"></div>

            {/* three.js particles */}
            <div className="absolute inset-0 pointer-events-none">
              <Residential3D />
            </div>

          </div>

          {/* floating badge */}
          <div className="absolute -bottom-5 left-4 md:-bottom-6 md:-left-6 bg-white shadow-lg px-4 md:px-6 py-3 md:py-4 rounded-xl">

            <p className="text-xs md:text-sm text-gray-500">
              Savings
            </p>

            <p className="text-lg md:text-2xl font-bold text-green-600">
              Up to 80%
            </p>

          </div>

        </div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >

          <p className="text-green-500 font-semibold tracking-widest uppercase text-sm">
            Residential Solar
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Smart Solar Energy
            <br />
            For Modern Homes
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Install advanced rooftop solar systems designed for modern
            households. Generate clean electricity, reduce your monthly
            power bills, and build a sustainable future with reliable
            solar technology.
          </p>

          {/* FEATURES */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {features.map((f, index) => (

              <div
                key={index}
                className="
                flex gap-3 md:gap-4 items-start
                bg-white
                p-4
                rounded-xl
                shadow
                transform
                transition
                duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-xl
                cursor-pointer
                "
              >

                <span className="text-green-500 text-xl md:text-2xl">
                  {f.icon}
                </span>

                <div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">
                    {f.title}
                  </p>

                  <p className="text-xs md:text-sm text-gray-500">
                    {f.desc}
                  </p>
                </div>

              </div>

            ))}

          </div>

          {/* CTA */}
          <button
            className="
            mt-8 md:mt-10
            bg-green-500
            hover:bg-green-600
            text-white
            px-6 md:px-8
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            transition
            hover:scale-105
            "
          >
            Get Free Solar Consultation
          </button>

        </motion.div>

      </div>

    </section>
  );
}