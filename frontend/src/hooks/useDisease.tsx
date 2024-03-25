import { useState, useEffect } from 'react';
import DiseaseManager from '@services/disease_manager';
import IDisease from '@src/types/disease';

export const fetchDiseases = async () => {
	try {
		const diseaseManager = new DiseaseManager();
		const diseases = await diseaseManager.getAllDiseases();
		return diseases || []; // Ensure an array is returned
	} catch (error) {
        // TODO - Change console for toast solution
		console.error('Error fetching diseases:', error);
		return []; // Return an empty array in case of an error
	}
};

// Custom hook for fetching and managing diseases
const useDiseases = () => {
	const [diseases, setDiseases] = useState<IDisease[]>([]);

	useEffect(() => {
		fetchDiseases().then((diseases) => {
			setDiseases(diseases);
		});
	}, []);

	return diseases;
};

export default useDiseases;