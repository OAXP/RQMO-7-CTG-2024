import { Button, SimpleGrid } from "@chakra-ui/react";
import IDisease from "@src/types/disease";
import { colors } from "@src/Theme";

function GameBody({ talk, ...props }: any) {
  const getSymptom = (part: string) => {
    const symptom = props.disease.symptoms.find(
      (s: IDisease & { part: string }) => s.part === part
    );
    talk(
      symptom
        ? `My ${part}... ${symptom.description}.`
        : `My ${part}... I don't feel anything here.`
    );
    return symptom ? symptom.description : "I don't feel anything here.";
  };

  const parts = [
    "head",
    "eyes",
    "mouth",
    "neck",
    "chest",
    "heart",
    "arms",
    "belly",
    "crotch",
    "legs",
  ];

  return (
    <SimpleGrid columns={2} spacing={10} w={"400px"}>
      {parts.map((part) => (
        <Button
          _hover={{ backgroundColor: colors.background }}
          key={part}
          onClick={() => getSymptom(part)}
          borderColor={colors.background}
          borderWidth={"2px"}
          borderRadius={"20px"}
        >
          {part.charAt(0).toUpperCase() + part.slice(1)}
        </Button>
      ))}
    </SimpleGrid>
  );
}

export default GameBody;
