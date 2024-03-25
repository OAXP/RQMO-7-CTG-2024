import { Disease } from '@src/interfaces/Disease';

export const mockDiseases: Disease[] = [
	{
		type: 'rare',
		gene_sequences: ['ACTG', 'GATC'],
		blood_types: ['A+', 'O-'],
		name: 'Foo Syndrome',
		symptoms: [
			{
				part: 'belly',
				description: 'experiencing pain and discomfort after eating',
			},
			{
				part: 'head',
				description: 'frequent headaches, especially in the afternoon',
			},
		],
	},
	{
		type: 'rare',
		gene_sequences: ['ATTGGC', 'CAGTTA'],
		blood_types: ['B-', 'O+'],
		name: 'Bar Disease',
		symptoms: [
			{
				part: 'arms',
				description: 'numbness and tingling sensations in the fingers',
			},
			{ part: 'leg', description: 'swelling and redness in the calf area' },
		],
	},
	{
		type: 'common',
		gene_sequences: ['AAATTC', 'GGAGT'],
		blood_types: ['AB+', 'A-'],
		name: 'Baz Disorder',
		symptoms: [
			{
				part: 'back',
				description: 'stiffness and pain, especially after waking up',
			},
			{
				part: 'neck',
				description: 'difficulty moving the neck, accompanied by pain',
			},
		],
	},
];
