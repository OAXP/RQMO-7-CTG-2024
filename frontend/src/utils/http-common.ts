/* eslint-disable @typescript-eslint/no-unsafe-return */
import { SERVER_URL, dataInterface } from './constant';

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
