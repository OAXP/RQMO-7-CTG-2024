import { useState, useEffect } from 'react';
import { Box, Input, Flex, Text, Button } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import { colors } from '@src/Theme';
import { useNavigate } from 'react-router-dom';

// TODO: Include the fake diseases from the game as well ?

function Search() {
	const [searchQuery, setSearchQuery] = useState('');
	const [diseases, setDiseases] = useState([]);
	const [patientDisease, setPatientDisease] = useState({});
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
				if (data.length === 1) {
					setPatientDisease(data[0]);
					setDiseases([]);
				} else {
					const filteredDiseases = data.filter(
						(disease) => !disease['Preferred term'].startsWith('OBSOLETE:'),
					);
					setDiseases(filteredDiseases.slice(0, 10));
				}
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}

	useEffect(() => {
		if (patientDisease.ORPHAcode) {
			fetch(
				`https://api.orphacode.org/EN/ClinicalEntity/orphacode/${patientDisease.ORPHAcode}/Definition`,
				{
					method: 'GET',
					headers: {
						apiKey: 'RQMO7',
					},
				},
			)
				.then((response) => response.json())
				.then((data) => {
					setPatientDisease((prevState) => ({
						...prevState,
						Definition: data['Definition'],
					}));
				})
				.catch((error) => {
					console.error('Error fetching disease description:', error);
				});
		}
	}, [patientDisease['ORPHAcode']]);

	function handleInputChange(event) {
		setSearchQuery(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search(event.target.value);
		setPatientDisease({});
	}

	function handleBoxClick(disease) {
		setPatientDisease(disease);
		setDiseases([]);
	}

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
			>
				<form onSubmit={handleSubmit}>
					<Flex justifyContent={'center'} alignItems={'center'}>
						<Input
							placeholder="Enter the name of the rare disease"
							value={searchQuery}
							onChange={handleInputChange}
							w={'20vw'}
							marginTop={'5vh'}
							marginBottom={'2vh'}
							backgroundColor={'white'}
							textAlign={'center'}
						/>
					</Flex>
				</form>

				<Flex justifyContent={'center'}>
					{Object.keys(patientDisease).length > 0 && (
						<Box width="50%" textAlign="center" p={4} backgroundColor="gray.100" borderRadius="md">
							<Flex flexDirection={'column'}>
								<Text as={'b'} fontSize={'large'}>{patientDisease['Preferred term']}  (ORPHA code: {patientDisease['ORPHAcode']})</Text>
								<Text fontSize={'large'}>{patientDisease['Definition']}</Text>
								{/* TODO: Include treatments, symptoms, etc if available */}
							</Flex>
							<Flex mt={4} justifyContent={'space-between'}>
								<Button
									colorScheme='blue'
									onClick={() => {
										navigate('/services');
									}}
								>
									Are you a person affected by this disease?
								</Button>
								<Button
									backgroundColor={colors.button_text}
									textColor={"white"}
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
							key={disease['ORPHAcode']}
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
							{disease['Preferred term']}
						</Box>
					))}
				</Flex>
			</Flex>
		</>
	);
}

export default Search;
