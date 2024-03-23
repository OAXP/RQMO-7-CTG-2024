import { Question } from '@src/interfaces/Question';

export const mockQuestions: Question[] = [
	{
		question: 'How many rare diseases are there?',
		answers: ['1000', '4500', '7000+'],
		correct: 2,
	},
	{
		question: 'What is another term used for a rare disease?',
		answers: ['Orphan disease', 'Unusual illness', 'All by myself sickness'],
		correct: 0,
	},
	{
		question: 'When was a rare disease last discovered?',
		answers: ['New rare diseases are discovered every year.', '2014', '2019'],
		correct: 0,
	},
	{
		question:
			'How long does it take many people living with a rare disease to get a diagnosis?',
		answers: ['One day', 'One week', 'One month', 'A year to five years'],
		correct: 3,
	},
	{
		question: 'What is the mascot of rare diseases?',
		answers: ['Elephant', 'Zebra', 'Tiger'],
		correct: 1,
	},
	{
		question: 'For many rare diseases, signs may be observed when?',
		answers: [
			'At birth or during childhood',
			'While watching TV',
			'While showering',
		],
		correct: 0,
	},
];
