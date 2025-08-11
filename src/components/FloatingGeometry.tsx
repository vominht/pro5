"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

function GeometryElement({ position, geometry }: { position: [number, number, number]; geometry: 'sphere' | 'box' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.8, 32, 32]} />;
      case 'box':
        return <Box ref={meshRef} args={[1.2, 1.2, 1.2]} />;
      case 'torus':
        return <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} />;
    }
  };

  return (
    <Float
      position={position}
      speed={1 + Math.random()}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      {renderGeometry()}
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#22d3ee" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#ffffff" />

      {/* Floating geometries */}
      <GeometryElement position={[-4, 2, -3]} geometry="sphere" />
      <GeometryElement position={[4, -1, -2]} geometry="box" />
      <GeometryElement position={[2, 3, -4]} geometry="torus" />
      <GeometryElement position={[-3, -2, -5]} geometry="sphere" />
      <GeometryElement position={[0, 0, -6]} geometry="box" />

      {/* Add materials to geometries */}
      {[
        { position: [-4, 2, -3] as [number, number, number], color: "#8b5cf6" },
        { position: [4, -1, -2] as [number, number, number], color: "#22d3ee" },
        { position: [2, 3, -4] as [number, number, number], color: "#f59e0b" },
        { position: [-3, -2, -5] as [number, number, number], color: "#10b981" },
        { position: [0, 0, -6] as [number, number, number], color: "#ef4444" },
      ].map((item, i) => (
        <Float
          key={i}
          position={item.position}
          speed={1 + Math.random() * 0.5}
          rotationIntensity={0.3}
          floatIntensity={0.3}
        >
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <MeshDistortMaterial
              color={item.color}
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
