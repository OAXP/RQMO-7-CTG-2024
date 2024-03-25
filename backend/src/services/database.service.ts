import { Db, MongoClient } from 'mongodb';
import { Service } from 'typedi';
import * as process from 'process';
import { mockQuestions } from '@src/mock-data/questions';
import { Disease } from '@src/interfaces/Disease';
import { Question } from '@src/interfaces/Question';
import { mockDiseases } from '@src/mock-data/diseases';

@Service()
export class DatabaseService {
	private db: Db;
	private client: MongoClient;

	get database(): Db {
		return this.db;
	}

	async start(url: string): Promise<void> {
		try {
			this.client = new MongoClient(url);
			await this.client.connect();
			this.db = this.client.db(process.env.DATABASE_NAME);
		} catch {
			throw new Error('Database connection error');
		}
		if (
			(await this.db
				.collection(process.env.DATABASE_COLLECTION_DISEASES)
				.countDocuments()) === 0
		) {
			await this.populateDB(
				process.env.DATABASE_COLLECTION_DISEASES,
				mockDiseases
			);
		}
		if (
			(await this.db
				.collection(process.env.DATABASE_COLLECTION_QUESTIONS)
				.countDocuments()) === 0
		) {
			await this.populateDB(
				process.env.DATABASE_COLLECTION_QUESTIONS,
				mockQuestions
			);
		}
	}

	async closeConnection(): Promise<void> {
		return this.client.close();
	}

	async populateDB(
		collection: string,
		mockData: Disease[] | Question[]
	): Promise<void> {
		for (const data of mockData) {
			await this.db.collection(collection).insertOne(data);
		}
	}
}
