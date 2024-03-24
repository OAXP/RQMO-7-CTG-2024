import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Desk } from "@src/models/Desk";
import { Notebook } from "@src/models/Notebook";
import { Person } from "@src/models/Person";
import { Html, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Button } from "@chakra-ui/react";
import { colors } from "@src/Theme";
import { m } from "framer-motion";

const ThreeGame = () => {
  const [personNumber, setPersonNumber] = React.useState(76);

  function handlePersonNumberChange() {
    if (personNumber >= 76 && personNumber <= 85) {
      setPersonNumber(personNumber + 1);
    } else {
      setPersonNumber(76);
    }
  }

  const adjustDeskForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [4, 1.5, 2];
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
    <Canvas camera={{ position: [5.5, 3.5, 5.5] }}>
      <Html position={[0, 4, 0]}>
        <Button
          _hover={{ backgroundColor: colors.button_hover }}
          backgroundColor={"white"}
          width={"100%"}
          borderColor={colors.Primary}
          borderWidth={"2px"}
          borderRadius={"20px"}
          marginBottom={"20px"}
          onClick={handlePersonNumberChange}
        >
          increment character : {personNumber}
        </Button>
      </Html>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2.5, 2.5]} intensity={0.7} />
      {/* floor */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[15, 0, 15]} />
        <meshStandardMaterial color={new THREE.Color("lightblue")} />
      </mesh>
      <Desk position={deskPosition} scale={deskScale} rotation={deskRotation} />
      <Notebook scale={[0.004, 0.004, 0.004]} position={[3, 1.6, 3]}></Notebook>

      <Person personNumber={personNumber} onClick={"movecam function"}></Person>
      <gridHelper></gridHelper>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
        minAzimuthAngle={2 * Math.PI}
        maxAzimuthAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default ThreeGame;
