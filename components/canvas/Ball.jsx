'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';

const Ball = (props) => {
  const ballRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(props.imgUrl);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ballRef.current.rotation.z = elapsedTime * 0.15;
    ballRef.current.rotation.y = elapsedTime * 0.05;
  });

  return (
    <group>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color={props.color} 
          map={texture}
        />
      </mesh>
    </group>
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