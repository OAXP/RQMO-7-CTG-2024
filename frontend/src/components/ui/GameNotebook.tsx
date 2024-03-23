import React from 'react';
import { Box, List, ListItem } from '@chakra-ui/react';
import IDisease from "@src/types/disease";

function GameNotebook({ diseases }: { diseases: IDisease[] }) {
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
