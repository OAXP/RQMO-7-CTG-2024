/* eslint-disable @typescript-eslint/no-unsafe-return */
import { dataInterface } from './constant';

const SERVER_URL =
	process.env.NODE_ENV === 'production' ? 'https://api.rakotoarivony.ca' : 'http://localhost:3000';
export const HTTPInterface = {
	SERVER_URL: `${SERVER_URL}/api`,

	async GET(endpoint: string) {
		const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
		return await response.json();
	},

	async POST(endpoint: string, data: dataInterface) {
		const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json',
			},
		});

		return await response.json();
	},

	async DELETE(endpoint: string) {
		const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
			method: 'DELETE',
		});
		return response.status;
	},

	async PATCH(endpoint: string) {
		const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
			method: 'PATCH',
		});
		return response.status;
	},

	async PUT(endpoint: string, data: dataInterface) {
		const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json',
			},
		});
		return response.status;
	},
};
