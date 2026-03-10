"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function ParticleField() {

  const ref = useRef();

  const particles = useMemo(() => {

    const count = 300; // reduced for performance
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    }

    return positions;

  }, []);

  useFrame(() => {

    if (ref.current) {

      ref.current.rotation.y += 0.0006;
      ref.current.rotation.x += 0.0003;

    }

  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#22c55e"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Hero3D() {

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      gl={{ alpha: true }}
      className="absolute inset-0 pointer-events-none"
    >
      <ambientLight intensity={0.6} />
      <ParticleField />
    </Canvas>
  );
}