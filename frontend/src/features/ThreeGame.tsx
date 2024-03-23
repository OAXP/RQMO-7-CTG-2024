import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const ThreeGame = () => {
  return (
    <Canvas camera={{ position: [5, 4, 5] }}>
      <ambientLight intensity={1} />
      <pointLight position={[3.5, 2.5, 2.5]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={new THREE.Color("lightblue")} />
      </mesh>
      <gridHelper></gridHelper>
    </Canvas>
  );
};

export default ThreeGame;
