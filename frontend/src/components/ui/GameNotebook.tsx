import React from 'react';
import { Disease } from '@src/interfaces/Disease';
import { Box, List, ListItem } from '@chakra-ui/react';

function GameNotebook({ diseases }: { diseases: Disease[] }) {
	return (
		<Box p={5}>
			{diseases.map((disease) => (
				<Box key={disease.name}>
					<Box fontWeight={'semibold'}>{disease.name}</Box>
					<List styleType="disc" ml={7}>
						{disease.symptoms.map((symptom) => (
							<ListItem key={symptom.part}>
								{symptom.part} : {symptom.description}
							</ListItem>
						))}
					</List>
				</Box>
			))}
		</Box>
	);
}

export default GameNotebook;
