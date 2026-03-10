"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function EnergyText() {

  const textRef = useRef();

  useFrame((state) => {

    if (!textRef.current) return;

    textRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.25;

    textRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.1;

  });

  return (
    <Text
      ref={textRef}
      fontSize={0.6}
      color="#22c55e"
      anchorX="center"
      anchorY="middle"
      position={[0, 0, 0]}
    >
      RADOMS
      {"\n"}
      SOLAR ENERGY
    </Text>
  );
}

function EnergyRings() {

  const ring1 = useRef();
  const ring2 = useRef();

  useFrame(() => {

    if (!ring1.current || !ring2.current) return;

    ring1.current.rotation.z += 0.003;
    ring2.current.rotation.z -= 0.002;

  });

  return (
    <>
      <mesh ref={ring1}>
        <ringGeometry args={[2.5, 2.7, 64]} />
        <meshBasicMaterial
          color="#22c55e"
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>

      <mesh ref={ring2}>
        <ringGeometry args={[1.7, 1.9, 64]} />
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

    const count = 300;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

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

export default function SolarEnergy3D() {

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      className="w-full h-full"
    >

      <ambientLight intensity={1} />

      <EnergyText />
      <EnergyRings />
      <EnergyParticles />

    </Canvas>
  );
}