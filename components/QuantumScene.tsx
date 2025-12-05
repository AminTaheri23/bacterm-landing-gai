/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Cylinder, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

const DnaStrand = ({ position, rotation, color = "#0D9488" }: { position: [number, number, number], rotation: [number, number, number], color?: string }) => {
  const group = useRef<THREE.Group>(null);
  
  // Generate DNA base pairs
  const basePairs = useMemo(() => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push({
        y: (i - 10) * 0.4,
        angle: i * 0.5
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.position.y += Math.sin(state.clock.getElapsedTime() * 0.5) * 0.002;
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      {basePairs.map((bp, i) => (
        <group key={i} position={[0, bp.y, 0]} rotation={[0, bp.angle, 0]}>
           {/* Backbone 1 */}
           <Sphere args={[0.15, 16, 16]} position={[1, 0, 0]}>
              <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
           </Sphere>
           {/* Backbone 2 */}
           <Sphere args={[0.15, 16, 16]} position={[-1, 0, 0]}>
              <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
           </Sphere>
           {/* Connector */}
           <Cylinder args={[0.05, 0.05, 2, 8]} rotation={[0, 0, Math.PI / 2]}>
              <meshStandardMaterial color="#E5E7EB" roughness={0.5} />
           </Cylinder>
        </group>
      ))}
    </group>
  );
};

const CellularParticle = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
    const ref = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
      if (ref.current) {
        ref.current.position.y += Math.sin(state.clock.getElapsedTime() + position[0]) * 0.002;
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
  };

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1} color="#0D9488" />
        <pointLight position={[-10, -5, -5]} intensity={0.5} color="#34D399" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
           <DnaStrand position={[2, 0, -2]} rotation={[0.2, 0, 0.2]} />
           <DnaStrand position={[-2, -1, 0]} rotation={[-0.2, 0, -0.2]} color="#14B8A6" />
        </Float>
        
        {Array.from({ length: 15 }).map((_, i) => (
             <CellularParticle 
                key={i} 
                position={[
                    (Math.random() - 0.5) * 10, 
                    (Math.random() - 0.5) * 10, 
                    (Math.random() - 0.5) * 5
                ]} 
                scale={Math.random() + 0.5}
            />
        ))}

        <Environment preset="dawn" />
      </Canvas>
    </div>
  );
};

export const QuantumComputerScene: React.FC = () => {
  // Re-purposed as "Genomic Landscape Scene"
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#fff" />
        <Environment preset="park" />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={[0, -1, 0]}>
            {/* Abstract representation of transcription */}
             <DnaStrand position={[0, 0, 0]} rotation={[0, 0, Math.PI/2]} color="#0F766E" />
             
             {/* Polymerase representation */}
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
    </div>
  );
}