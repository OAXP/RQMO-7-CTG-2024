import { Question } from '@src/interfaces/Question';
import { HTTPInterface } from '@src/utils/http-common';

export default class QuestionManager {
	async getAllQuestions(): Promise<Question[]> {
		const questions = (await HTTPInterface.GET('question')) as Question[];
		return questions;
	}

	async postQuestion(question: Question): Promise<Question> {
		return (await HTTPInterface.POST('question', question)) as Question;
	}
}
