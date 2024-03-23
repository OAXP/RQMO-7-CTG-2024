import { Box, Flex, List, ListItem } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import GameBody from '@components/ui/GameBody';
import { getAllDisease } from '@services/diseaseService';
import { useQuery } from 'react-query';
import GameNotebook from '@components/ui/GameNotebook';

export default function Game() {
	const diseaseMock = {
		name: 'The frankhunk disease',
		symptoms: [
			{ part: 'belly', description: 'It really hurts, it feels really hot.' },
			{ part: 'head', description: 'I have a big headache.' },
		],
	};
	// const { data: diseases } = useQuery('disease', getAllDisease);
	const diseases = undefined;

	return (
		<>
			<Navbar />
			<Flex h={'full'} w={'full'}>
				<Box flex={2} p={5}>
					<GameBody disease={diseaseMock} />
				</Box>
				<Box flex={1}>
					<Box fontWeight={'bold'}>Notebook</Box>
					<GameNotebook diseases={diseases ?? [diseaseMock, diseaseMock]} />
				</Box>
			</Flex>
		</>
	);
}
