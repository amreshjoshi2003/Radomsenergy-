"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useMemo } from "react";

export default function Commercial() {

  const positions = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    random.inSphere(arr, { radius: 1.5 });
    return arr;
  }, []);

  return (

    <section className="relative min-h-[85vh] md:min-h-[95vh] w-full flex items-center justify-center overflow-hidden px-4">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home/commercial-1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* THREE JS PARTICLES */}
      <div className="absolute inset-0 pointer-events-none z-0">

        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>

          <Points
            positions={positions}
            stride={3}
            frustumCulled
          >

            <PointMaterial
              transparent
              color="#22c55e"
              size={0.012}
              sizeAttenuation
              depthWrite={false}
            />

          </Points>

        </Canvas>

      </div>

      {/* GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
        relative
        z-10
        w-full
        max-w-[260px]
        sm:max-w-md
        md:max-w-xl
        lg:max-w-2xl
        text-center
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        rounded-xl
        sm:rounded-2xl
        p-5
        sm:p-8
        md:p-10
        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        transition
        hover:bg-white/15
        "
      >

        <p className="text-green-400 uppercase tracking-widest text-[11px] sm:text-sm font-semibold">
          COMMERCIAL SOLAR
        </p>

        <h2 className="mt-3 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Solar Energy <br />
          For Modern Businesses
        </h2>

        <p className="mt-3 sm:mt-6 text-gray-200 text-xs sm:text-base md:text-lg leading-relaxed">
          Power offices, factories and industries with advanced
          commercial solar systems while reducing operational costs.
        </p>

        {/* FEATURES */}
        <div className="mt-5 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6">

          <div>
            <p className="text-lg sm:text-2xl font-bold text-green-400">⚡</p>
            <p className="text-[10px] sm:text-sm text-gray-300 mt-1">
              Lower cost
            </p>
          </div>

          <div>
            <p className="text-lg sm:text-2xl font-bold text-green-400">📈</p>
            <p className="text-[10px] sm:text-sm text-gray-300 mt-1">
              High ROI
            </p>
          </div>

          <div>
            <p className="text-lg sm:text-2xl font-bold text-green-400">🌍</p>
            <p className="text-[10px] sm:text-sm text-gray-300 mt-1">
              Sustainable
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <button
          className="
          mt-5
          sm:mt-8
          bg-green-500
          hover:bg-green-600
          text-white
          px-5
          sm:px-8
          py-2
          sm:py-3
          rounded-full
          font-semibold
          text-xs
          sm:text-base
          shadow-lg
          transition
          hover:scale-105
          "
        >
          Explore Commercial Solar
        </button>

      </motion.div>

    </section>

  );

}