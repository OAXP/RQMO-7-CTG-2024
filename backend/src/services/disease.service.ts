import * as process from 'process';
import { Service } from 'typedi';
import { Disease } from '@src/interfaces/Disease';
import { DatabaseService } from '@src/services/database.service';

@Service()
export class DiseaseService {
	constructor(private readonly dbService: DatabaseService) {}

	get collection() {
		return this.dbService.database.collection(
			process.env.DATABASE_COLLECTION_DISEASES
		);
	}

	async getAll() {
		return (await this.collection
			.find({}, { projection: { _id: 0 } })
			.toArray()) as unknown[] as Disease[];
	}

	async getByName(name: string) {
		const disease = await this.collection.findOne(
			{ name },
			{ projection: { _id: 0 } }
		);
		return disease as unknown as Disease;
	}

	async getRandom() {
		const randomDisease = await this.collection
			.aggregate([{ $sample: { size: 1 } }, { $project: { _id: 0 } }])
			.toArray();
		return randomDisease[0] as unknown as Disease;
	}

	async add(disease: Disease) {
		await this.collection.insertOne(disease);
	}

	async update(disease: Disease, name: string) {
		await this.collection.updateOne({ name }, { $set: disease });
	}

	async delete(name: string) {
		await this.collection.deleteOne({ name });
	}
}
