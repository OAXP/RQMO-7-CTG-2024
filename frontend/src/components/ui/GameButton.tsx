import React from "react";
import { Html } from "@react-three/drei";
import { Button } from "@chakra-ui/react";
import { colors } from "@src/Theme";
import { Vector3 } from "@react-three/fiber";

const GameButton = ({ ...Props }) => {
  const { text, condition, handleClick } = Props;
  return (
    <Button
      _hover={{
        backgroundColor: condition ? "red" : colors.Primary,
        color: "white",
      }}
      backgroundColor={"white"}
      width={"100%"}
      borderColor={condition ? "red" : colors.Primary}
      borderWidth={"2px"}
      borderRadius={"10px"}
      margin={"20px"}
      color={condition ? "red" : ""}
      onClick={handleClick}
    >
      {condition ? "X" : <>{text}</>}
    </Button>
  );
};

export default GameButton;
