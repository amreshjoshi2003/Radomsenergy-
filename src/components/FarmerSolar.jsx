"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function EnergyEffect() {

  const ring = useRef(null);
  const particles = useRef(null);

  useFrame(() => {

    if (ring.current) ring.current.rotation.z += 0.002;
    if (particles.current) particles.current.rotation.z -= 0.001;

  });

  const count = 300;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {

    const radius = 3 + Math.random() * 1.5;
    const angle = Math.random() * Math.PI * 2;

    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;

  }

  return (
    <group>

      <mesh ref={ring}>
        <ringGeometry args={[2.4, 2.6, 128]} />
        <meshBasicMaterial
          color="#22c55e"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.05}
          color="#22c55e"
          transparent
          opacity={0.7}
        />
      </points>

    </group>
  );
}

export default function FarmerSolar() {

  return (
    <section className="relative h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-full overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/home/commercial-1.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* THREE JS */}
      <div className="absolute inset-0 pointer-events-none">

        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={1} />
          <EnergyEffect />
        </Canvas>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 lg:px-10">

        <div className="max-w-3xl">

          {/* TAG */}
          <p className="
          text-green-400
          font-semibold
          tracking-widest
          uppercase
          text-xs sm:text-sm
          transition
          duration-300
          hover:scale-110
          hover:text-green-300
          ">
            Solar Farming
          </p>

          {/* HEADING */}
          <h2 className="
          mt-3 sm:mt-4
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          font-bold
          text-white
          leading-tight
          transition
          duration-300
          hover:scale-105
          hover:text-green-300
          ">
            Power Your Farm <br className="hidden sm:block" />
            With Solar Energy
          </h2>

          {/* FEATURES */}
          <div className="
          mt-6 sm:mt-8
          flex flex-wrap
          justify-center
          gap-3 sm:gap-4 md:gap-5
          text-white
          text-xs sm:text-sm md:text-base
          ">

            <span className="
            bg-white/10
            backdrop-blur
            px-3 sm:px-4
            py-2
            rounded-full
            transition
            hover:scale-110
            hover:bg-green-500/30
            ">
              ⚡ Solar Motor
            </span>

            <span className="
            bg-white/10
            backdrop-blur
            px-3 sm:px-4
            py-2
            rounded-full
            transition
            hover:scale-110
            hover:bg-green-500/30
            ">
              💧 Water Pump
            </span>

            <span className="
            bg-white/10
            backdrop-blur
            px-3 sm:px-4
            py-2
            rounded-full
            transition
            hover:scale-110
            hover:bg-green-500/30
            ">
              🌾 Smart Farming
            </span>

          </div>

          {/* BUTTON */}
          <button className="
          mt-8 sm:mt-10
          bg-green-500
          hover:bg-green-600
          px-6 sm:px-8
          py-2.5 sm:py-3
          rounded-xl
          font-semibold
          text-sm sm:text-base
          text-white
          shadow-lg
          transition
          duration-300
          hover:scale-110
          hover:shadow-green-500/40
          ">
            Explore Solar Farming
          </button>

        </div>

      </div>

    </section>
  );
}