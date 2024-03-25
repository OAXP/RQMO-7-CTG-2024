import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { StatusCodes } from 'http-status-codes';
import { AuthenticationService } from '@src/services/authentication.service';

@Service()
export class AuthenticationController {
	router: Router;

	constructor(private readonly authenticationService: AuthenticationService) {
		this.configureRouter();
	}

	private configureRouter(): void {
		this.router = Router();
		/**
		 * @swagger
		 * tags:
		 *   name: Authentication
		 *   description: Authentication endpoints
		 */

		/**
		 * @swagger
		 *   /api/auth:
		 *     post:
		 *       summary: Authenticate user
		 *       tags: [Authentication]
		 *       requestBody:
		 *         required: true
		 *         content:
		 *           application/json:
		 *             schema:
		 *               type: object
		 *               properties:
		 *                 password:
		 *                   type: string
		 *       responses:
		 *         '200':
		 *           description: Authentication successful
		 *         '401':
		 *           description: Invalid password. Please try again!
		 *         '500':
		 *           description: Internal server error. Please try again later.
		 */
		this.router.post('/', (req: Request, res: Response) => {
			try {
				const result: boolean = this.authenticationService.validatePassword(
					req.body.password
				);
				if (result) {
					res
						.status(StatusCodes.OK)
						.json({ message: 'Authentication successful' });
				} else {
					res
						.status(StatusCodes.UNAUTHORIZED)
						.json({ message: 'Invalid password. Please try again!' });
				}
			} catch (error) {
				res
					.status(StatusCodes.INTERNAL_SERVER_ERROR)
					.json({ message: 'Internal server error' });
			}
		});
	}
}
