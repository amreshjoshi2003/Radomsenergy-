"use client";

import Residential3D from "./Residential3D";
import { motion } from "framer-motion";

export default function Residential() {

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="/home/4.jpg"
          alt="Residential Solar"
          className="w-full h-full object-cover block"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TOP BLEND (Hero se smooth connect) */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

        {/* BOTTOM BLEND (Next section smooth) */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

        {/* 3D PARTICLES */}
        <div className="absolute inset-0 pointer-events-none">
          <Residential3D />
        </div>

      </div>


      {/* LEFT CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true }}
        className="relative z-10 max-w-lg ml-8 md:ml-24"
      >

        <div
          className="
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          rounded-2xl
          p-8 md:p-10
          shadow-[0_30px_80px_rgba(0,0,0,0.45)]
          transition-all duration-700 ease-out
          hover:scale-[1.02]
          "
        >

          <p className="text-green-400 uppercase tracking-widest text-xs font-semibold">
            Residential Solar
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
            Smart Solar <br />
            For Modern Homes
          </h2>

          <p className="mt-4 text-gray-200 text-sm leading-relaxed">
            Generate clean energy, reduce electricity bills,
            and power your home with reliable solar technology.
          </p>


          {/* STATS */}
          <div className="flex gap-10 mt-6">

            <div>
              <p className="text-2xl font-bold text-green-400">80%</p>
              <p className="text-gray-300 text-xs">Bill Savings</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-400">25+</p>
              <p className="text-gray-300 text-xs">Years Life</p>
            </div>

          </div>


          {/* BUTTON */}
          <button
            className="
            mt-6
            bg-green-500
            hover:bg-green-600
            text-white
            px-6
            py-2.5
            rounded-lg
            text-sm
            font-semibold
            shadow-lg
            transition-all duration-500
            hover:scale-105
            "
          >
            Get Solar Quote
          </button>

        </div>

      </motion.div>

    </section>
  );
}