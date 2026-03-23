import React, { useRef, useLayoutEffect, forwardRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

const Model = forwardRef(({ url }, ref) => {
  const { scene } = useGLTF(url);
  
  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Optional: tweak materials for a glass/premium look
        // if (child.material) {
        //   child.material.envMapIntensity = 2;
        // }
      }
    });

    // Initial scale and position
    scene.scale.set(1.5, 1.5, 1.5);
    scene.position.set(0, -0.5, 0);
  }, [scene]);

  return <primitive object={scene} ref={ref} />;
});

// Preload to avoid pop-in
useGLTF.preload('/toyota_gr_supra.glb');

export default function ThreeCanvas({ modelRef }) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10" id="canvas-container">
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        
        {/* Apple-like sleek lighting setup */}
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.5} 
          castShadow 
        />
        <spotLight 
          position={[-10, 10, -10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={0.5} 
        />
        
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
           <Suspense fallback={null}>
               <Model url="/toyota_gr_supra.glb" ref={modelRef} />
           </Suspense>
        </Float>
        
        <ContactShadows 
          position={[0, -1.2, 0]} 
          opacity={0.6} 
          scale={20} 
          blur={2.5} 
          far={4} 
          resolution={512}
        />
        
        {/* City preset gives good reflections for a car model */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
