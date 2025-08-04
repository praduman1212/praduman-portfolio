'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Computer = ({ isMobile }) => {
  const computer = useRef();
  
  // We'll use a placeholder model until we have a real computer model
  // In a real implementation, you would replace this with a proper 3D model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    computer.current.rotation.y = Math.sin(t / 4) / 8;
    computer.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <mesh ref={computer}>
      <boxGeometry args={[isMobile ? 1.5 : 2, isMobile ? 1.5 : 2, isMobile ? 1.5 : 2]} />
      <meshStandardMaterial color="#4158D0" wireframe />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    // Define callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 5]} intensity={2} />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;