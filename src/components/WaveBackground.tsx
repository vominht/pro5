"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

function WavePlane({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positionAttribute = geometry.attributes.position;
      
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = Math.sin(x * 0.5 + time) * Math.cos(y * 0.5 + time) * 0.3;
        positionAttribute.setZ(i, z);
      }
      
      positionAttribute.needsUpdate = true;
      geometry.computeVertexNormals();
    }
  });

  return (
    <Plane ref={meshRef} position={position} args={[20, 20, 32, 32]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshPhongMaterial
        color={color}
        transparent
        opacity={0.1}
        wireframe
        side={THREE.DoubleSide}
      />
    </Plane>
  );
}

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-10, 10, 10]} intensity={0.5} color="#22d3ee" />
        
        <WavePlane position={[0, -2, 0]} color="#8b5cf6" />
        <WavePlane position={[0, -4, 0]} color="#22d3ee" />
        <WavePlane position={[0, -6, 0]} color="#f59e0b" />
      </Canvas>
    </div>
  );
}
