"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function EnergyRings() {

  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state) => {

    if (!ring1.current || !ring2.current) return;

    ring1.current.rotation.z += 0.003;
    ring2.current.rotation.z -= 0.002;

    const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.05;
    ring1.current.scale.set(scale, scale, scale);

  });

  return (
    <>
      <mesh ref={ring1}>
        <ringGeometry args={[2.2, 2.35, 64]} />
        <meshBasicMaterial
          color="#22c55e"
          transparent
          opacity={0.5}
          wireframe
        />
      </mesh>

      <mesh ref={ring2}>
        <ringGeometry args={[1.6, 1.75, 64]} />
        <meshBasicMaterial
          color="#16a34a"
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>
    </>
  );
}

function EnergyParticles() {

  const particles = useMemo(() => {

    const count = 200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

      positions[i * 3] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

    }

    return positions;

  }, []);

  return (
    <Points positions={particles} stride={3}>
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

export default function Residential3D() {

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="pointer-events-none"
    >

      <ambientLight intensity={1} />

      <EnergyRings />
      <EnergyParticles />

    </Canvas>
  );
}