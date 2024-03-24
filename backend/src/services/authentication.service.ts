import * as process from 'process';
import { Service } from 'typedi';

@Service()
export class AuthenticationService {
	validatePassword(password: string) {
		return password === process.env.ADMIN_PASSWORD;
	}
}
