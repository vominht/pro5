"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function FloatingCard({ hovered }: { hovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[2, 2.5, 0.1]}
      radius={0.1}
      smoothness={8}
      scale={hovered ? 1.05 : 1}
    >
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={hovered ? 0.4 : 0.2}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </RoundedBox>
  );
}

function BackgroundSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <MeshDistortMaterial
        color="#22d3ee"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.9}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

type Card3DProps = {
  children: React.ReactNode;
  className?: string;
  enableBackground?: boolean;
};

export default function Card3D({ children, className = "", enableBackground = false }: Card3DProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Three.js 3D Background */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 25 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
          {enableBackground && <BackgroundSphere />}
          <FloatingCard hovered={hovered} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 p-6 h-full"
        animate={{ 
          scale: hovered ? 1.02 : 1,
          y: hovered ? -5 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="glass rounded-xl p-6 border border-border/50 backdrop-blur-sm bg-card/80 h-full hover:border-primary/50 transition-all duration-300">
          {children}
        </div>
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-5" />
    </div>
  );
}
