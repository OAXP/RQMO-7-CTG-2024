import { Box, Button, Flex, Input } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import ThreeGame from '@src/features/ThreeGame';

export default function Game() {
	return (
		<>
			<Navbar />
			<Box h={'full'} w={'full'}>
				<Flex>
					<Box height={window.innerWidth < 768 ? 600 : 1000} flex={1}>
						<ThreeGame></ThreeGame>
					</Box>
				</Flex>
			</Box>
		</>
	);
}
