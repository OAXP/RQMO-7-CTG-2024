import React, { useState, useEffect } from 'react';
import { Text, Button, VStack, Box, Flex, Spinner } from '@chakra-ui/react';
import { colors } from '@src/Theme';
import Navbar from '@src/layouts/navbar';
import Footer from '@src/layouts/footer';
import { useNavigate } from 'react-router-dom';
import { Question } from '@src/interfaces/Question';
import QuestionManager from '@services/question_manager';

interface IncorrectAnswer {
	question: string;
	userAnswer: string;
	correctAnswer: string;
}

export default function Trivia() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [questions, setQuestions] = useState<Question[]>([]);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswer[]>([]);
	const [loading, setLoading] = useState(true);
	const [startedTrivia, setStartedTrivia] = useState(false);
	const navigate = useNavigate();
	const questionManager = new QuestionManager();

	useEffect(() => {
		questionManager.getAllQuestions().then((questions: Question[]) => {
			if (questions.length === 0) {
				setQuestions(questions);
				setLoading(false);
			}
		});
	}, []);

	const handleAnswerOptionClick = (isCorrect: boolean, answerIndex: number) => {
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

	const startTrivia = () => {
		setStartedTrivia(true);
	};

	return (
		<>
			<Navbar />
			<VStack spacing={8} align="center" backgroundColor={colors.background} minH={'90vh'}>
				{!startedTrivia ? (
					<Box marginTop={8}>
						<Text
							fontSize={'xx-large'}
							as={'b'}
							color={'darkslategrey'}
							marginTop={'2vh'}
							marginBottom={5}
						>
							Welcome to the Rare Disease Trivia!
						</Text>
						<Flex flexDirection={'column'}>
							<Text fontSize="lg" marginBottom={3} as={'b'}>
								The goal of this trivia is to raise awareness and help you better understand rare
								diseases.
							</Text>
							<Button colorScheme="blue" onClick={startTrivia} width={'10vw'}>
								Start the quiz
							</Button>
						</Flex>
					</Box>
				) : loading ? (
					<Spinner size="xl" marginTop={'32vh'} />
				) : showScore ? (
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
									<Box
										borderRadius="lg"
										key={index}
										p={2}
										backgroundColor={'gray.100'}
										width={'100%'}
									>
										<Text as={'b'}>Question: </Text>
										<Text>{incorrectAnswer.question}</Text>
										<Text as={'b'}>Your Answer: </Text>
										<Text>{incorrectAnswer.userAnswer}</Text>
										<Text as={'b'}>Correct Answer: </Text>
										<Text>{incorrectAnswer.correctAnswer}</Text>
									</Box>
								))}
							</VStack>
						)}
						<Button
							marginTop={'1vh'}
							colorScheme="blue"
							onClick={() => navigate('/RQMO-7-CTG-2024/game')}
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
					<Box marginTop={8}>
						<Text fontSize="2xl" fontWeight="bold" marginBottom={3}>
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
					</Box>
				)}
			</VStack>
			<Footer />
		</>
	);
}
