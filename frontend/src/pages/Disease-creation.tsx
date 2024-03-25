import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Flex, FormLabel, Input, Select, useToast } from '@chakra-ui/react';
import DiseaseManager from '@services/disease_manager';
import Navbar from '@src/layouts/navbar';

interface Symptom {
	part: string;
	description: string;
}

interface Disease {
	type: 'common' | 'rare';
	gene_sequences: string[];
	blood_types: string[];
	name: string;
	symptoms: Symptom[];
}

export default function DiseaseCreation() {
	const bodyParts = [
		'Head',
		'Eyes',
		'Mouth',
		'Neck',
		'Chest',
		'Heart',
		'Arms',
		'Belly',
		'Crotch',
		'Legs',
	];

	const initialSymptomsArray = bodyParts.map((part) => ({
		part: part.toLowerCase(),
		description: '',
	}));

	const { name } = useParams<{ name: string }>();
	const toast = useToast();
	const navigate = useNavigate();
	const diseaseManager = new DiseaseManager();
	const [disease, setDisease] = useState<Disease>({
		type: 'rare',
		gene_sequences: [],
		blood_types: [],
		name: '',
		symptoms: [],
	});
	const [symptoms, setSymptoms] = useState<Symptom[]>(initialSymptomsArray);

	useEffect(() => {
		if (name) {
			(diseaseManager.getDiseaseByName(name) as Promise<Disease>).then((disease) => {
				setDisease(disease);
				fillSymptoms(disease);
			});
		}
	}, []);

	const fillSymptoms = (disease: Disease) => {
		initialSymptomsArray.forEach((bodyPart, index) => {
			const matchingSymptom = disease.symptoms.find((symptom) => symptom.part === bodyPart.part);
			initialSymptomsArray[index].description = matchingSymptom ? matchingSymptom.description : '';
		});
		setSymptoms(initialSymptomsArray);
	};

	const getSymptomDescriptionByBodyPart = (part: string) => {
		const symptom = symptoms[bodyParts.indexOf(part)];
		return symptom ? symptom.description : '';
	};

	const handleTypeChange = (value: 'common' | 'rare') => {
		setDisease((prevState) => ({
			...prevState,
			type: value,
		}));
	};

	const handleSymptomChange = (part: string, value: string) => {
		if (!disease) return;
		const updatedSymptoms = [...symptoms];
		updatedSymptoms[bodyParts.indexOf(part)].description = value;
		setDisease({ ...disease, symptoms: updatedSymptoms });
		setSymptoms(updatedSymptoms);
	};

	const nonEmptySymptoms = () => {
		return symptoms.filter((symptom) => symptom.description.trim() !== '');
	};

	const handleSubmit = async () => {
		const updatedSymptoms = nonEmptySymptoms();
		const updatedDisease = { ...disease, symptoms: updatedSymptoms };
		if (!updatedDisease.name.trim()) {
			toast({
				title: 'Name field is empty',
				status: 'warning',
				duration: 3000,
				isClosable: true,
			});
			return;
		}
		if (updatedSymptoms.length === 0) {
			toast({
				title: 'All symptoms are empty',
				status: 'warning',
				duration: 3000,
				isClosable: true,
			});
			return;
		}
		if (name) {
			await diseaseManager.updateDisease(updatedDisease, name);
		} else {
			await diseaseManager.addDisease(updatedDisease);
		}
		navigate('/RQMO-7-CTG-2024/');
	};
	const handleNameChange = (value: string) => {
		if (!disease) return;
		setDisease({ ...disease, name: value });
	};

	if (!disease) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Navbar />
			<Box p={7} borderWidth="1px" borderRadius="md">
				<FormLabel>Disease name</FormLabel>
				<Input
					mb={3}
					placeholder="Disease name"
					value={disease.name}
					onChange={(e) => handleNameChange(e.target.value)}
					isRequired
				/>
				<FormLabel>Disease type</FormLabel>
				<Select
					mb={3}
					value={disease.type}
					onChange={(e) => handleTypeChange(e.target.value as 'common' | 'rare')}
					isRequired
				>
					<option value="common">Common</option>
					<option value="rare">Rare</option>
				</Select>
				<FormLabel>Symptoms</FormLabel>
				{bodyParts.map((part: string) => (
					<Flex key={part} mb={3}>
						<Input flex={1} mr={2} value={part} alignItems={'center'} readOnly />
						<Input
							flex={5}
							placeholder="Description"
							value={getSymptomDescriptionByBodyPart(part)}
							onChange={(e) => handleSymptomChange(part, e.target.value)}
						/>
					</Flex>
				))}
				<Button colorScheme="blue" onClick={handleSubmit}>
					{name ? 'Save changes' : 'Create new disease'}
				</Button>
			</Box>
		</>
	);
}
