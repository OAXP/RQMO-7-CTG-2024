import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box, Input, Flex, Text, Button, Link } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import { colors } from '@src/Theme';
import { useNavigate } from 'react-router-dom';
import { ORPHAdisease } from '@src/interfaces/ORPHAdisease';

function Search() {
	const [searchQuery, setSearchQuery] = useState('');
	const [diseases, setDiseases] = useState<ORPHAdisease[]>([]);
	const [patientDisease, setPatientDisease] = useState<ORPHAdisease | null>(null);
	const navigate = useNavigate();

	function search() {
		fetch(`https://api.orphacode.org/EN/ClinicalEntity/ApproximateName/${searchQuery}`, {
			method: 'GET',
			headers: {
				apiKey: 'RQMO7',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				const diseases = data as { ORPHAcode: number; 'Preferred term': string }[];
				if (data.length === 0) return;
				if (data.length === 1) {
					setPatientDisease({
						code: diseases[0]['ORPHAcode'],
						name: diseases[0]['Preferred term'],
					});
					setDiseases([]);
				} else {
					const filteredDiseases = diseases
						.filter((disease) => !disease['Preferred term'].startsWith('OBSOLETE:'))
						.slice(0, 10);

					const renamedDiseases = filteredDiseases.map((disease) => ({
						code: disease['ORPHAcode'],
						name: disease['Preferred term'],
					}));

					setDiseases(renamedDiseases);
				}
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}

	useEffect(() => {
		if (patientDisease?.code) {
			fetch(
				`https://api.orphacode.org/EN/ClinicalEntity/orphacode/${patientDisease?.code}/Definition`,
				{
					method: 'GET',
					headers: {
						apiKey: 'RQMO7',
					},
				},
			)
				.then((response) => response.json())
				.then((data) => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					setPatientDisease((prevState) => ({
						...prevState,
						definition: data['Definition'],
					}));
				})
				.catch((error) => {
					console.error('Error fetching disease description:', error);
				});
		}
	}, [patientDisease?.code]);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchQuery(event.target.value);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		search();
		setPatientDisease(null);
	}

	function handleBoxClick(disease: ORPHAdisease) {
		setPatientDisease(disease);
		setDiseases([]);
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return (
		<>
			<Navbar />
			<Flex
				display={'column'}
				backgroundColor={colors.background}
				w={'100%'}
				h={'100vh'}
				justifyContent={'center'}
				alignItems={'center'}
				position="relative"
				zIndex={1}
			>
				<Box
					position="absolute"
					top="30%"
					left="55%"
					transform="translate(-50%, -50%)"
					background={'#e9ded9'}
					borderRadius="50%"
					width="60vh"
					height="60vh"
					zIndex="-1"
				/>
				<form onSubmit={handleSubmit}>
					<Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
						<Text fontSize={'xxx-large'} as={'b'} color={'darkslategrey'} marginTop={'2vh'}>
							Rare Disease from A to Z
						</Text>
						<Input
							placeholder="Enter the name of the disease to search"
							value={searchQuery}
							onChange={handleInputChange}
							w={'20vw'}
							marginTop={'1vh'}
							marginBottom={'2vh'}
							backgroundColor={'white'}
							textAlign={'center'}
						/>
					</Flex>
				</form>

				<Flex justifyContent={'center'}>
					{patientDisease && (
						<Box width="50%" textAlign="center" p={4} backgroundColor="gray.100" borderRadius="md">
							<Flex flexDirection={'column'}>
								<Text as={'b'} fontSize={'large'}>
									{patientDisease?.name} (ORPHA code: {patientDisease?.code})
								</Text>
								<Text fontSize={'large'}>{patientDisease?.definition}</Text>
								<Text marginTop={'2vh'}>
									Frequent signs and symptoms:
									<Link
										color={'blue'}
										href={'https://www.orpha.net/en/disease/sign/' + patientDisease?.code}
										isExternal
									>
										{' '}
										{`https://www.orpha.net/en/disease/sign/${patientDisease?.code}`}
									</Link>
								</Text>
							</Flex>
							<Flex mt={4} justifyContent={'space-between'}>
								<Button
									colorScheme="blue"
									onClick={() => {
										navigate('/services');
									}}
								>
									Are you a person affected by this disease?
								</Button>
								<Button
									backgroundColor={colors.button_text}
									textColor={'white'}
									onClick={() => {
										navigate('/services');
									}}
								>
									Are you a researcher?
								</Button>
							</Flex>
						</Box>
					)}
				</Flex>

				<Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
					{diseases.map((disease) => (
						<Box
							key={disease.code}
							onClick={() => handleBoxClick(disease)}
							cursor="pointer"
							border="1px solid"
							borderColor="gray.300"
							borderRadius="md"
							p={3}
							mb={2}
							width="50%"
							textAlign="center"
							backgroundColor={'gray.100'}
							transition={'transform 0.3s'}
							_hover={{
								transform: 'scale(1.05)',
							}}
						>
							{disease.name}
						</Box>
					))}
				</Flex>
			</Flex>
		</>
	);
}

export default Search;
