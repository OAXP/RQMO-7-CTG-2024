import { Box, Button, Flex, Input } from "@chakra-ui/react";
import Navbar from "@src/layouts/navbar";
import GameBody from "@components/ui/GameBody";
import GameNotebook from "@components/ui/GameNotebook";
import { useEffect, useRef, useState } from "react";
import ThreeGame from "@src/features/ThreeGame";
import DiseaseManager from "@services/disease_manager";
import IDisease from "@src/types/disease";

export default function Game() {
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

  return (
    <>
      <Navbar />
      <Box h={"full"} w={"full"}>
        <Flex>
          <Box flex={2} p={5}>
            <GameBody disease={currentDisease!} />
          </Box>
          <Box flex={1}>
            <Box fontWeight={"bold"}>Notebook</Box>
            <GameNotebook diseases={diseases} />
          </Box>
        </Flex>
        {/* <Flex gap={5} p={10}>
          <Input ref={inputRef} placeholder="Type your diagnosis here" />
          <Button colorScheme="blue" p={5} onClick={() => onSubmit()}>
            Submit and call the next client
          </Button>
        </Flex> */}
        <Flex>
          <Box height={window.innerWidth < 768 ? 600 : 1000} flex={1}>
            <ThreeGame></ThreeGame>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
