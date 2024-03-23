import { Db, MongoClient } from 'mongodb';
import { Service } from 'typedi';
import { mockDiseases } from '@src/utils/mock-data';
import * as process from 'process';

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
			await this.populateDB(process.env.DATABASE_COLLECTION_DISEASES);
		}
	}

	async closeConnection(): Promise<void> {
		return this.client.close();
	}

	async populateDB(collection: string): Promise<void> {
		for (const disease of mockDiseases) {
			await this.db.collection(collection).insertOne(disease);
		}
	}
}
