import IDisease from '@src/types/disease';
import { HTTPInterface } from '@src/utils/http-common';

export default class DiseaseManager {
	async getAllDiseases(): Promise<IDisease[]> {
		const diseases = (await HTTPInterface.GET('disease')) as IDisease[];
		return diseases;
	}

	async getDiseaseById(id: string): Promise<IDisease> {
		const disease = (await HTTPInterface.GET(`disease/${id}`)) as IDisease;
		return disease;
	}

	async deleteDisease(id: string) {
		try {
			await HTTPInterface.DELETE(`disease/${id}`);
		} catch (err) {
			console.error('An error has occured while deleting a playlist', err);
		}
	}

	async postDisease(disease: IDisease): Promise<IDisease[]> {
		return (await HTTPInterface.POST('disease', disease)) as IDisease[];
	}
}
