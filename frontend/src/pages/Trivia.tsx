import { useState } from 'react';
import { Text, Button, VStack, Box, Flex } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import { useNavigate } from 'react-router-dom';

export default function Trivia() {
	// source for the questions: https://rarediseases.org/wp-content/uploads/2022/01/Rare-Disease-Day-Trivia.pdf
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [incorrectAnswers, setIncorrectAnswers] = useState([]);
	const navigate = useNavigate();

	// TODO: make service to fetch questions from backend
	const questions = [
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
			question: 'How long does it take many people living with a rare disease to get a diagnosis?',
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
			answers: ['At birth or during childhood', 'While watching TV', 'While showering'],
			correct: 0,
		},
	];

	const handleAnswerOptionClick = (isCorrect, answerIndex) => {
		if (isCorrect) {
			setScore(score + 1);
		} else {
			setIncorrectAnswers((prevState) => [
				...prevState,
				{
					question: questions[currentQuestionIndex].question,
					userAnswer: questions[currentQuestionIndex].answers[answerIndex],
					correctAnswer:
						questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct],
				},
			]);
		}

		const nextQuestionIndex = currentQuestionIndex + 1;
		if (nextQuestionIndex < questions.length) {
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setShowScore(true);
		}
	};

	return (
		<>
			<Navbar />
			<VStack spacing={8} align="center" mt={8}>
				{showScore ? (
					<Box p={8} borderWidth="1px" borderRadius="lg">
						<Text fontSize="2xl" fontWeight="bold" mb={4}>
							Your score: {score} out of {questions.length}
						</Text>
						{incorrectAnswers.length > 0 && (
							<VStack spacing={4} align="start" w={'full'}>
								<Text fontSize="xl" fontWeight="bold">
									Incorrect Answers:
								</Text>
								{incorrectAnswers.map((incorrectAnswer, index) => (
									<Box key={index} p={4} borderWidth="1px" borderRadius="lg">
										<Text fontSize="lg">Question: {incorrectAnswer.question}</Text>
										<Text fontSize="lg">Your Answer: {incorrectAnswer.userAnswer}</Text>
										<Text fontSize="lg">Correct Answer: {incorrectAnswer.correctAnswer}</Text>
									</Box>
								))}
							</VStack>
						)}
						<Button
							marginTop={'1vh'}
							colorScheme="blue"
							onClick={() => navigate('/game')}
							padding={30}
						>
							<Flex flexDirection={'column'}>
								<Text>We hope you've learned a little bit more about rare diseases</Text>
								<Text>
									To learn more about the difficulties of living with a rare disease, checkout our
									game
								</Text>
							</Flex>
						</Button>
					</Box>
				) : (
					<>
						<Text fontSize="2xl" fontWeight="bold">
							{questions[currentQuestionIndex].question}
						</Text>
						<VStack spacing={4} align="center">
							{questions[currentQuestionIndex].answers.map((answerOption, index) => (
								<Button
									key={index}
									colorScheme="blue"
									onClick={() =>
										handleAnswerOptionClick(
											index === questions[currentQuestionIndex].correct,
											index,
										)
									}
								>
									{answerOption}
								</Button>
							))}
						</VStack>
					</>
				)}
			</VStack>
		</>
	);
}
