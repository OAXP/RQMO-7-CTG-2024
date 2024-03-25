import React from 'react';
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import Navbar from "@src/layouts/navbar";
import ThreeGame from "@src/features/ThreeGame";
import Notebook from '@src/components/notebook';

export default function Game() {
	const [isOpened, setIsOpened] = React.useState(false);

	const handleOpen = () => {
		setIsOpened((isOpened) => !isOpened);
	};

  return (
    <>
      <Navbar />
      <Box h={"full"} w={"full"}>
        <Flex>
          <Box height={window.innerWidth < 768 ? 600 : 1000} flex={1}>
            <ThreeGame handleOpen={handleOpen}></ThreeGame>
          </Box>
        </Flex>
      </Box>
			<Notebook isOpened={isOpened} handleOpen={handleOpen} />
    </>
  );
}
