import * as process from 'process';
import { Service } from 'typedi';
import { DatabaseService } from '@src/services/database.service';
import { Question } from '@src/interfaces/Question';

@Service()
export class QuestionService {
	constructor(private readonly dbService: DatabaseService) {}

	get collection() {
		return this.dbService.database.collection(
			process.env.DATABASE_COLLECTION_QUESTIONS
		);
	}

	async getAll() {
		return (await this.collection
			.find({}, { projection: { _id: 0 } })
			.toArray()) as unknown[] as Question[];
	}

	async add(question: Question) {
		await this.collection.insertOne(question);
	}

	async deleteAll() {
		await this.collection.deleteMany({});
	}
}
