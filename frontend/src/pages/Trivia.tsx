import React, { useState, useEffect } from 'react';
import { Text, Button, VStack, Box, Flex, Spinner } from '@chakra-ui/react';
import { colors } from '@src/Theme';
import Navbar from '@src/layouts/navbar';
import { useNavigate } from 'react-router-dom';
import { Question } from "@src/interfaces/Question";
import QuestionManager from "@services/question_manager";

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
	const navigate = useNavigate();

	const questionManager = new QuestionManager();
	useEffect(() => {
		questionManager.getAllQuestions().then((questions: Question[]) => {
			setQuestions(questions);
			setLoading(false);
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

	return (
		<>
			<Navbar />
			<VStack spacing={8} align="center" backgroundColor={colors.background} height={'100vh'}>
				{loading ? (
					<Spinner size="xl" />
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
		</>
	);
}