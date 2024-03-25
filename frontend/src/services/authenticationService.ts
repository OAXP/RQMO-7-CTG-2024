import { HTTPInterface } from '@src/utils/http-common';

export default class AuthenticationManager {
	async validateAdminPassword(password: string): Promise<string> {
		try {
			const res: string | { message: string } = await HTTPInterface.POST('auth', {
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
	}
}
