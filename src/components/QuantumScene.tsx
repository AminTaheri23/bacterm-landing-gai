/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Cylinder, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleData {
  position: [number, number, number];
  scale: number;
  offset: number;
}

interface BasePairData {
  y: number;
  angle: number;
}

const useParticles = (count: number, bounds: { x: number; y: number; z: number }): ParticleData[] => {
  const seed = useMemo(() => count + bounds.x + bounds.y + bounds.z, [count, bounds]);
  
  return useMemo(() => {
    let currentSeed = seed;
    const seededRandom = () => {
      const x = Math.sin(currentSeed++) * 10000;
      return x - Math.floor(x);
    };
    
    return Array.from({ length: count }, () => ({
      position: [
        (seededRandom() - 0.5) * bounds.x,
        (seededRandom() - 0.5) * bounds.y,
        (seededRandom() - 0.5) * bounds.z,
      ] as [number, number, number],
      scale: seededRandom() + 0.5,
      offset: seededRandom() * Math.PI * 2,
    }));
  }, [count, bounds.x, bounds.y, bounds.z, seed]);
};

const DnaStrand = ({ position, rotation, color = "#0D9488" }: { 
  position: [number, number, number], 
  rotation: [number, number, number], 
  color?: string 
}) => {
  const group = useRef<THREE.Group>(null);

  const basePairs = useMemo((): BasePairData[] => {
    return Array.from({ length: 20 }, (_, i) => ({
      y: (i - 10) * 0.4,
      angle: i * 0.5,
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      {basePairs.map((bp, i) => (
        <group key={i} position={[0, bp.y, 0]} rotation={[0, bp.angle, 0]}>
           <Sphere args={[0.15, 16, 16]} position={[1, 0, 0]}>
              <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
           </Sphere>
           <Sphere args={[0.15, 16, 16]} position={[-1, 0, 0]}>
              <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
           </Sphere>
           <Cylinder args={[0.05, 0.05, 2, 8]} rotation={[0, 0, Math.PI / 2]}>
              <meshStandardMaterial color="#E5E7EB" roughness={0.5} />
           </Cylinder>
        </group>
      ))}
    </group>
  );
};

const CellularParticle = React.memo(({ position, scale, offset }: ParticleData) => {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = initialY + Math.sin(state.clock.elapsedTime + offset) * 0.5;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 16, 16]} position={position} scale={scale * 0.2}>
      <meshStandardMaterial
        color="#A7F3D0"
        transparent
        opacity={0.4}
        roughness={0.8}
      />
    </Sphere>
  );
});

CellularParticle.displayName = 'CellularParticle';

interface CanvasWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ children, className }) => (
  <Suspense fallback={null}>
    <div className={className}>
      {children}
    </div>
  </Suspense>
);

export const HeroScene: React.FC = () => {
  const particles = useParticles(15, { x: 10, y: 10, z: 5 });

  if (particles.length === 0) {
    return null;
  }

  return (
    <CanvasWrapper className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          preserveDrawingBuffer: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1} color="#0D9488" />
        <pointLight position={[-10, -5, -5]} intensity={0.5} color="#34D399" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
           <DnaStrand position={[2, 0, -2]} rotation={[0.2, 0, 0.2]} />
           <DnaStrand position={[-2, -1, 0]} rotation={[-0.2, 0, -0.2]} color="#14B8A6" />
        </Float>
        
        {particles.map((particle, i) => (
          <CellularParticle key={i} {...particle} />
        ))}

        <Environment preset="dawn" />
      </Canvas>
    </CanvasWrapper>
  );
};

export const QuantumComputerScene: React.FC = () => {
  return (
    <CanvasWrapper className="w-full h-full absolute inset-0">
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ 
          preserveDrawingBuffer: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#fff" />
        <Environment preset="park" />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={[0, -1, 0]}>
            <DnaStrand position={[0, 0, 0]} rotation={[0, 0, Math.PI/2]} color="#0F766E" />
            <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
               <meshPhysicalMaterial 
                   color="#FCD34D" 
                   roughness={0.2} 
                   transmission={0.6} 
                   thickness={0.5}
               />
            </Sphere>
          </group>
        </Float>
        
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </CanvasWrapper>
  );
}
