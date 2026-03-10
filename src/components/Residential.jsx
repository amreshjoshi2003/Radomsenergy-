"use client";

import Residential3D from "./Residential3D";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Residential() {

  const imgRef = useRef(null);

  const handleMove = (e) => {

    const rect = imgRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 6;

    imgRef.current.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

  };

  const resetTilt = () => {
    imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-28 px-6 md:px-20 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <div
          ref={imgRef}
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300"
        >

          <img
            src="/home/4.jpg"
            alt="Residential Solar"
            className="w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-green-400/10"></div>

          <div className="absolute inset-0 pointer-events-none">
            <Residential3D />
          </div>

        </div>

        {/* CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <motion.p
            variants={item}
            className="text-green-500 font-semibold tracking-wider uppercase"
          >
            Residential Solar Solutions
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Power Your Home With
            <br />
            Clean Solar Energy
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-gray-600 text-lg leading-relaxed"
          >
            Transform your home into a sustainable energy hub with
            advanced solar rooftop systems. Generate your own electricity,
            reduce monthly utility bills, and contribute to a cleaner
            and greener future with reliable solar technology designed
            for modern homes.
          </motion.p>

          {/* FEATURES */}
          <motion.div
            variants={item}
            className="mt-8 grid grid-cols-2 gap-6"
          >

            <div className="flex items-center gap-3 hover:text-green-500 transition">
              <span className="text-green-500 text-xl">⚡</span>
              <p className="text-gray-700 font-medium">
                Reduce Electricity Bills
              </p>
            </div>

            <div className="flex items-center gap-3 hover:text-green-500 transition">
              <span className="text-green-500 text-xl">🌱</span>
              <p className="text-gray-700 font-medium">
                100% Clean Renewable Energy
              </p>
            </div>

            <div className="flex items-center gap-3 hover:text-green-500 transition">
              <span className="text-green-500 text-xl">🏠</span>
              <p className="text-gray-700 font-medium">
                Increase Property Value
              </p>
            </div>

            <div className="flex items-center gap-3 hover:text-green-500 transition">
              <span className="text-green-500 text-xl">💰</span>
              <p className="text-gray-700 font-medium">
                Long-Term Energy Savings
              </p>
            </div>

          </motion.div>

          {/* BUTTON */}
          <motion.button
            variants={item}
            className="
            mt-10
            bg-green-500
            hover:bg-green-600
            text-white
            px-8
            py-3
            rounded-lg
            font-semibold
            shadow-lg
            transition
            hover:scale-105
            "
          >
            Get a Free Solar Consultation
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}