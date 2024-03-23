import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Desk } from "@src/models/Desk";

const ThreeGame = () => {
  const adjustDeskForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [4, 2, 2];
    let rotation = [0, 2, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1];
    } else {
      screenScale = [0.2, 0.2, 0.2];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [deskScale, deskPosition, deskRotation] = adjustDeskForScreenSize();

  return (
    <Canvas camera={{ position: [5, 4, 5] }}>
      <ambientLight intensity={1} />
      <pointLight position={[3.5, 2.5, 2.5]} intensity={0.3} />
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={new THREE.Color("lightblue")}
          wireframe={true}
        />
      </mesh>
      <Desk position={deskPosition} scale={deskScale} rotation={deskRotation} />
      <gridHelper></gridHelper>
    </Canvas>
  );
};

export default ThreeGame;
