import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { deleteDisease, getAllDisease } from '@services/diseaseService';
import { Disease } from '@src/interfaces/Disease';
import Navbar from '@src/layouts/navbar';
import { colors } from '@src/Theme';

export default function DiseasesList() {
	const [diseases, setDiseases] = useState<Disease[]>([]);

	useEffect(() => {
		getAllDisease().then((diseases) => {
			setDiseases(diseases);
		});
	}, []);

	const handleDelete = (name: string) => {
		deleteDisease(name).then(() => {
			setDiseases(diseases.filter((disease) => disease.name !== name));
		});
	};

	return (
		<>
			<Flex direction={'column'} backgroundColor={colors.background} h={'100vh'}>
				<Navbar />
				<Flex p={4} direction={'column'} alignItems={'center'}>
					<Heading mb={4}>List of Diseases</Heading>
					<Flex w={'100%'} alignItems={'end'} direction={'column'}>
						<Button as={Link} to="/disease-creation" mb={4} mr={'10px'} colorScheme="blue">
							Add a Disease
						</Button>
					</Flex>
					<Box w={'70%'}>
						{diseases.map((disease) => (
							<Box
								key={disease.name}
								borderWidth="1px"
								borderRadius="md"
								p={2}
								mb={2}
								backgroundColor={'white'}
							>
								<Flex alignItems="center" justifyContent="space-between">
									<Text flex="1">{disease.name}</Text>
									<Flex>
										<Link to={`/disease-creation/${disease.name}`}>
											<Button size="sm" mr={2} colorScheme="blue">
												Edit
											</Button>
										</Link>
										<Button size="sm" colorScheme="red" onClick={() => handleDelete(disease.name)}>
											Delete
										</Button>
									</Flex>
								</Flex>
							</Box>
						))}
					</Box>
				</Flex>
			</Flex>
		</>
	);
}
