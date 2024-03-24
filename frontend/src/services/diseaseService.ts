import { Disease } from '@src/interfaces/Disease';
import * as http from '@src/lib/http';

export const getRandomDisease = async () => {
	try {
		return await http.get('/disease/random');
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

export const getAllDisease = async (): Promise<Disease[]> => {
	try {
		return await http.get('/disease');
	} catch (e) {
		console.error(e);
		return [];
	}
};

export const getDiseaseByName = async (name: string) => {
	try {
		return await http.get(`/disease/${name}`);
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

export const addDisease = async (disease: Disease) => {
	try {
		return await http.post('/disease', { disease });
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

export const updateDisease = async (disease: Disease, name: string) => {
	try {
		return await http.put('/disease', { disease, name });
	} catch (e) {
		console.error(e);
		return undefined;
	}
};

export const deleteDisease = async (name: string) => {
	try {
		return await http.del(`/disease/${name}`);
	} catch (e) {
		console.error(e);
		return undefined;
	}
};
