import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Desk } from "@src/models/Desk";
import { Notebook } from "@src/models/Notebook";
import { Person } from "@src/models/Person";
import { Html, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Button } from "@chakra-ui/react";
import { colors } from "@src/Theme";
import { del } from "@src/lib/http";

const approachValue = (value: any, target: any, step: any) => {
  if (value < target) {
    return Math.min(value + step, target);
  } else {
    return Math.max(value - step, target);
  }
};

const MyCamera = ({ isInquiring, ...props }: any) => {
  const interactPersonView = {
    x: 3,
    y: 3,
    z: 4,
    lookAt: { x: -8, y: 3, z: 0 },
  };

  let camPosition = { x: 6.5, y: 3.5, z: 6.5 };
  const ref = useRef();

  useFrame((state, delta) => {
    if (isInquiring) {
      ref.current.position.x = approachValue(
        ref.current.position.x,
        interactPersonView.x,
        0.03
      );
      ref.current.position.y = approachValue(
        ref.current.position.y,
        interactPersonView.y,
        0.03
      );
      ref.current.position.z = approachValue(
        ref.current.position.z,
        interactPersonView.z,
        0.03
      );

      ref.current.lookAt(-8, 3, 0);
    } else {
      ref.current.position.x = approachValue(ref.current.position.x, 6.5, 0.05);
      ref.current.position.y = approachValue(ref.current.position.y, 3.5, 0.05);
      ref.current.position.z = approachValue(ref.current.position.z, 6.5, 0.05);
      ref.current.lookAt(0, 0, 0);
    }
  });

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={[camPosition.x, camPosition.y, camPosition.z]}
      fov={60}
    />
  );
};

const ThreeGame = () => {
  const [personNumber, setPersonNumber] = React.useState(76);
  const [isInquiring, setIsInquiring] = React.useState(false);
  const [camPosition, setCamPosition] = React.useState({
    x: 6.5,
    y: 3.5,
    z: 6.5,
  });

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
    <Canvas>
      {/* <PerspectiveCamera
        makeDefault
        position={[camPosition.x, camPosition.y, camPosition.z]}
        fov={60}
      /> */}
      <MyCamera isInquiring={isInquiring} />
      <Html position={[0, 4, 0]}>
        <Button
          _hover={{ backgroundColor: colors.button_hover }}
          backgroundColor={"white"}
          width={"100%"}
          borderColor={colors.Primary}
          borderWidth={"2px"}
          borderRadius={"20px"}
          margin={"20px"}
          onClick={handlePersonNumberChange}
        >
          increment character : {personNumber}
        </Button>
      </Html>

      <Html position={[0, 4.5, 4]}>
        <Button
          _hover={{ backgroundColor: colors.button_hover }}
          backgroundColor={"white"}
          width={"100%"}
          borderColor={colors.Primary}
          borderWidth={"2px"}
          borderRadius={"20px"}
          margin={"20px"}
          onClick={() => setIsInquiring(!isInquiring)}
        >
          {isInquiring ? "Stop Inquiring" : "Start Inquiring"}
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
        // enableRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
        minAzimuthAngle={2 * Math.PI}
        maxAzimuthAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default ThreeGame;
