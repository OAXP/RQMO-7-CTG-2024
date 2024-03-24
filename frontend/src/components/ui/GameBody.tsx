import { Button, SimpleGrid } from '@chakra-ui/react';
import IDisease from '@src/types/disease';
import { colors } from '@src/Theme';

interface Symptom {
	part: string;
	description: string;
}

function GameBody({ talk, ...props }: any) {
	const getSymptom = (part: string): string => {
		const symptom = props.disease.symptoms.find(
			(s: IDisease & { part: string }) => s.part === part,
		);
		talk(
			symptom
				? `My ${part}... ${symptom.description}.`
				: `My ${part}... I don't feel anything here.`,
		);
		return (symptom as Symptom) ? (symptom as Symptom).description : "I don't feel anything here.";
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
		<SimpleGrid columns={2} spacing={10} w={'400px'}>
			{parts.map((part) => (
				<Button
					key={part}
					onClick={() => getSymptom(part)}
					borderColor={colors.Primary}
					borderWidth={'2px'}
					borderRadius={'20px'}
				>
					{part.charAt(0).toUpperCase() + part.slice(1)}
				</Button>
			))}
		</SimpleGrid>
	);
}

export default GameBody;
