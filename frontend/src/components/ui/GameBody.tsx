import { Button, SimpleGrid } from '@chakra-ui/react';
import { Disease } from '@src/interfaces/Disease';

function GameBody({ disease }: { disease: Disease }) {
	const getSymptom = (part: string) => {
		const symptom = disease.symptoms.find((s) => s.part === part);
		window.alert(symptom ? symptom.description : "I don't feel anything here.");
		return symptom ? symptom.description : "I don't feel anything here.";
	};

	const parts = [
		'head',
		'eyes',
		'mouth',
		'neck',
		'chest',
		'heart',
		'arms',
		'belly',
		'crotch',
		'legs',
	];

	return (
		<SimpleGrid columns={2} spacing={10}>
			{parts.map((part) => (
				<Button key={part} onClick={() => getSymptom(part)}>
					{part.charAt(0).toUpperCase() + part.slice(1)}
				</Button>
			))}
		</SimpleGrid>
	);
}

export default GameBody;
