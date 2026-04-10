import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron, Sphere } from '@react-three/drei';
import { useRef } from 'react';

const FloatingShape = () => {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.5;
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
      ringRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <>
      {/* Central glowing orb */}
      <mesh ref={meshRef}>
        <Icosahedron args={[1, 4]}>
          <MeshDistortMaterial
            color="#00ff88"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive="#00ff88"
            emissiveIntensity={0.3}
            wireframe={false}
            transparent
            opacity={0.85}
          />
        </Icosahedron>
      </mesh>

      {/* Outer ring */}
      <mesh ref={ringRef} scale={1.6}>
        <torusGeometry args={[1, 0.02, 8, 60]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Floating small spheres */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <FloatingSphere key={i} angle={angle} index={i} />
        );
      })}

      {/* Ambient + directional lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#00ff88" />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#bf00ff" distance={4} />
    </>
  );
};

const FloatingSphere = ({ angle, index }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const r = 1.9;
    const speed = 0.4 + index * 0.1;
    ref.current.position.x = Math.cos(t * speed + angle) * r;
    ref.current.position.y = Math.sin(t * speed + angle) * r * 0.5;
    ref.current.position.z = Math.sin(t * speed + angle) * 0.3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={2}
      />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute right-0 top-0 w-full h-full md:w-1/2" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <FloatingShape />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
