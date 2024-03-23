import { SERVER_API_URL } from '@data/constants';

async function get<T>(endpoint: string): Promise<T> {
	const url = SERVER_API_URL + endpoint;
	const request = await fetch(url, {
		method: 'get',
	});

	return (await request.json()) as T;
}

async function post<T>(endpoint: string, body: unknown): Promise<T | string> {
	const url = SERVER_API_URL + endpoint;
	const request = await fetch(url, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	if (request.ok) return (await request.json()) as T;
	else return await request.text();
}

async function put<T>(endpoint: string, body: unknown): Promise<T | string> {
	const url = SERVER_API_URL + endpoint;
	const request = await fetch(url, {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	if (request.ok) return (await request.json()) as T;
	else return await request.text();
}

async function patch<T>(endpoint: string, body: unknown): Promise<T | string> {
	const url = SERVER_API_URL + endpoint;
	const request = await fetch(url, {
		method: 'patch',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	if (request.ok) return (await request.json()) as T;
	else return await request.text();
}

async function del(endpoint: string): Promise<boolean> {
	const url = SERVER_API_URL + endpoint;
	const request = await fetch(url, {
		method: 'delete',
	});

	return request.ok;
}

export { get, post, del, put, patch };
