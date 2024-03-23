import { Box, Button, Flex, Input } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import GameBody from '@components/ui/GameBody';
import { getAllDisease } from '@services/diseaseService';
import { useQuery } from 'react-query';
import GameNotebook from '@components/ui/GameNotebook';
import { useRef } from 'react';

export default function Game() {
	const inputRef = useRef<HTMLInputElement>(null);

	const diseaseMock = {
		name: 'The frankhunk disease',
		symptoms: [
			{ part: 'belly', description: 'It really hurts, it feels really hot.' },
			{ part: 'head', description: 'I have a big headache.' },
		],
	};
	// const { data: diseases } = useQuery('disease', getAllDisease);
	const diseases = undefined;

	const onSubmit = () => {
		const userDiagnosis = inputRef.current?.value ?? '';
		const isCorrect = diseaseMock.name === userDiagnosis;
		window.alert(
			`You have diagnosed the patient with ${userDiagnosis}. ${
				isCorrect
					? 'Good job!'
					: 'Better luck next time! The correct diagnosis is ' + diseaseMock.name
			}`,
		);
		// TODO: next disease
	};

	return (
		<>
			<Navbar />
			<Box h={'full'} w={'full'}>
				<Flex>
					<Box flex={2} p={5}>
						<GameBody disease={diseaseMock} />
					</Box>
					<Box flex={1}>
						<Box fontWeight={'bold'}>Notebook</Box>
						<GameNotebook diseases={diseases ?? [diseaseMock, diseaseMock, diseaseMock]} />
					</Box>
				</Flex>
				<Flex gap={5} p={10}>
					<Input ref={inputRef} placeholder="Type your diagnosis here" />
					<Button colorScheme="blue" p={5} onClick={() => onSubmit()}>
						Submit and call the next client
					</Button>
				</Flex>
			</Box>
		</>
	);
}
