import * as http from '@src/lib/http';

export const validateAdminPassword = async (password: string) => {
	try {
		const res: string | { message: string } = await http.post<{ message: string }>('/auth', {
			password,
		});
		if (typeof res === 'string') {
			return 'Invalid password. Please try again!';
		}
		return res.message;
	} catch (e) {
		console.error(e);
		return 'Internal server error';
	}
};
