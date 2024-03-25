import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

function BloodTestSlip({ bloodType }: { bloodType: string }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius={"lg"}
      overflow="hidden"
      p={5}
      boxShadow={"md"}
      bg="white"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold" color="tomato">
          Blood Test Report
        </Text>
        <Box>
          <Text fontSize="md">Patient Name: John Doe</Text>
        </Box>
        <Box>
          <Text fontSize="md">Date: {new Date().toLocaleDateString()}</Text>
        </Box>
        <Box>
          <Text fontSize="md" fontWeight="bold">
            Blood Type: {bloodType}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default BloodTestSlip;
