import { HTTPInterface } from '@src/utils/http-common';
import { Disease } from '@src/interfaces/Disease';

export default class DiseaseManager {
	async getAllDiseases(): Promise<Disease[]> {
		return (await HTTPInterface.GET('disease')) as Disease[];
	}

	async getDiseaseByName(id: string): Promise<Disease> {
		return (await HTTPInterface.GET(`disease/${id}`)) as Disease;
	}

	async getRandomDisease(): Promise<Disease> {
		return (await HTTPInterface.GET('disease/random')) as Disease;
	}

	async updateDisease(disease: Disease, name: string) {
		try {
			await HTTPInterface.PUT(`disease/${name}`, disease);
		} catch (err) {
			console.error('An error has occurred while deleting a playlist', err);
		}
	}

	async deleteDisease(id: string) {
		try {
			await HTTPInterface.DELETE(`disease/${id}`);
		} catch (err) {
			console.error('An error has occured while deleting a playlist', err);
		}
	}

	async addDisease(disease: Disease): Promise<Disease[]> {
		return (await HTTPInterface.POST('disease', disease)) as Disease[];
	}
}
