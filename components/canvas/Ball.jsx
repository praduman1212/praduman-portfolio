'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ballRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ballRef.current.rotation.z = elapsedTime * 0.15;
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color={props.color} 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          scale={1} 
          map={decal} 
          flatShading 
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, color = '#fff8eb' }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} color={color} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;