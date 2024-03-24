import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Desk } from "@src/models/Desk";
import { Notebook } from "@src/models/Notebook";
import { Medic } from "@src/models/Medic";
import { Person } from "@src/models/Person";
import { Html, PerspectiveCamera, OrbitControls } from "@react-three/drei";

import GameBody from "@components/ui/GameBody";
import { colors } from "@src/Theme";
import DiseaseManager from "@services/disease_manager";
import IDisease from "@src/types/disease";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { Computer } from "@src/models/computer";

// Utility function to smoothly transition numbers
const approachValue = (
  current: number,
  target: number,
  delta: number
): number => {
  const difference = target - current;
  if (Math.abs(difference) < delta) return target;
  return current + difference * delta;
};

// Utility function to smoothly transition Vector3 values
const approachVector3 = (
  current: THREE.Vector3,
  target: THREE.Vector3,
  delta: number
) => {
  current.x = approachValue(current.x, target.x, delta);
  current.y = approachValue(current.y, target.y, delta);
  current.z = approachValue(current.z, target.z, delta);
};

interface MyCameraProps {
  isInquiring: boolean;
}

const MyCamera: React.FC<MyCameraProps> = ({ isInquiring }) => {
  const ref = useRef<THREE.PerspectiveCamera>(null);
  const [lookAtTarget, setLookAtTarget] = useState(new THREE.Vector3(0, 0, 0));
  const interactPersonView = {
    position: new THREE.Vector3(3, 3, 4),
    lookAt: new THREE.Vector3(-8, 3, 0),
  };
  const defaultPosition = new THREE.Vector3(6.5, 3.5, 6.5);
  const defaultLookAt = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    if (!ref.current) return;
    const camera = ref.current;
    if (isInquiring) {
      approachVector3(camera.position, interactPersonView.position, 0.03);
      approachVector3(lookAtTarget, interactPersonView.lookAt, 0.05);
    } else {
      approachVector3(camera.position, defaultPosition, 0.05);
      approachVector3(lookAtTarget, defaultLookAt, 0.05);
    }
    camera.lookAt(lookAtTarget);
  });

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={defaultPosition.toArray()}
      fov={60}
    />
  );
};

const ThreeGame = () => {
  const [personNumber, setPersonNumber] = useState(76);
  const [isInquiring, setIsInquiring] = useState(false);
  const [talkBox, setTalkBox] = useState("");
  const [camPosition, setCamPosition] = useState({
    x: 6.5,
    y: 3.5,
    z: 6.5,
  });

  const diseaseManager = new DiseaseManager();
  const inputRef = useRef<HTMLInputElement>(null);

  const [diseases, setDiseases] = useState<IDisease[]>([]);
  const [currentDisease, setCurrentDisease] = useState<IDisease | undefined>(
    undefined
  );

  useEffect(() => {
    diseaseManager.getAllDiseases().then((diseases) => setDiseases(diseases));
    diseaseManager
      .getRandomDisease()
      .then((disease) => setCurrentDisease(disease));
  }, []);

  const talk = (text: string) => {
    setTalkBox(text);
  };

  const onSubmit = () => {
    const userDiagnosis = inputRef.current?.value ?? "";
    const isCorrect = currentDisease?.name === userDiagnosis;
    window.alert(
      `You have diagnosed the patient with ${userDiagnosis}. ${
        isCorrect
          ? "Good job!"
          : "Better luck next time! The correct diagnosis is " +
            currentDisease?.name
      }`
    );
    // next disease
    diseaseManager
      .getRandomDisease()
      .then((disease) => setCurrentDisease(disease));
    // TODO: show next person
  };

  function handlePersonNumberChange() {
    if (personNumber >= 76 && personNumber <= 85) {
      setPersonNumber(personNumber + 1);
    } else {
      setPersonNumber(76);
    }
  }

  const handleInquiring = () => {
    setIsInquiring(!isInquiring);
    if (talkBox !== "") {
      setTalkBox("");
    }
  };

  const handleNotebookClick = () => {
    console.log("Notebook clicked");
  };

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
      <MyCamera isInquiring={isInquiring} />
      {isInquiring ? null : (
        <Html position={[0, 5, 0]}>
          <Flex gap={5} p={10}>
            <Input
              w={"600px"}
              ref={inputRef}
              placeholder="Type your diagnosis here"
              borderWidth={"2px"}
              borderRadius={"20px"}
            />
            <Button
              _hover={{ backgroundColor: colors.Primary, color: "white" }}
              backgroundColor={"white"}
              borderColor={colors.Primary}
              borderWidth={"2px"}
              borderRadius={"10px"}
              margin={"10px"}
              p={5}
              onClick={() => {
                onSubmit();
                handlePersonNumberChange();
              }}
            >
              Diagnose
            </Button>
          </Flex>
        </Html>
      )}

      {talkBox === "" ? null : (
        <Html position={[0, 4, 5.5]}>
          <div>
            <Box
              backgroundColor={colors.Primary}
              color={"white"}
              borderRadius={"20px"}
              padding={"10px"}
              w={"400px"}
            >
              {talkBox}
            </Box>
          </div>
        </Html>
      )}

      {!isInquiring ? null : (
        <Html position={[0, 4, 3]}>
          <GameBody disease={currentDisease!} talk={talk} />
        </Html>
      )}

      <Html position={[0, 4.5, 4]}>
        <Button
          _hover={{
            backgroundColor: isInquiring ? "red" : colors.Primary,
            color: "white",
          }}
          backgroundColor={"white"}
          width={"100%"}
          borderColor={isInquiring ? "red" : colors.Primary}
          borderWidth={"2px"}
          borderRadius={"10px"}
          margin={"20px"}
          color={isInquiring ? "red" : ""}
          onClick={handleInquiring}
        >
          {isInquiring ? "X" : "Talk to Patient"}
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
      <Medic position={[6, 1.6, 3]} scale={0.001}></Medic>
      <Computer position={[5, 1.6, 2]} scale={0.015}></Computer>

      <Person personNumber={personNumber}></Person>
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
