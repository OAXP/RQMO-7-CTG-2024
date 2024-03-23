import { Disease } from '@src/interfaces/disease.interface';

export const mockDiseases: Disease[] = [
	{
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
		name: 'Bar Disease',
		symptoms: [
			{
				part: 'arm',
				description: 'numbness and tingling sensations in the fingers',
			},
			{ part: 'leg', description: 'swelling and redness in the calf area' },
		],
	},
	{
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
