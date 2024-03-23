import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { StatusCodes } from 'http-status-codes';
import { QuestionService } from '@src/services/question.service';

@Service()
export class QuestionController {
	router: Router;

	constructor(private readonly questionService: QuestionService) {
		this.configureRouter();
	}

	private configureRouter(): void {
		this.router = Router();
		/**
		 * @swagger
		 *
		 * definitions:
		 *   Question:
		 *     type: object
		 *     properties:
		 *       question:
		 *         type: string
		 *       answers:
		 *         type: array
		 *         items:
		 *           type: string
		 *       correct:
		 *         type: number
		 */
		/**
		 * @swagger
		 * tags:
		 *   - name: Question
		 *     description: Questions
		 */

		/**
		 * @swagger
		 *
		 * /api/question:
		 *   get:
		 *     summary: Retrieve all questions
		 *     tags:
		 *       - Question
		 *     produces:
		 *       - application/json
		 *     responses:
		 *       200:
		 *         description: OK. Returns a list of questions.
		 *         schema:
		 *           type: array
		 *           items:
		 *             $ref: '#/definitions/Question'
		 *       500:
		 *         description: Internal Server Error. An error occurred on the server.
		 */
		this.router.get('/', async (req: Request, res: Response) => {
			try {
				res.status(StatusCodes.OK).json(await this.questionService.getAll());
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});

		/**
		 * @swagger
		 *
		 * /api/question:
		 *   post:
		 *     summary: Add a new question
		 *     tags:
		 *       - Question
		 *     parameters:
		 *       - in: body
		 *         name: question
		 *         required: true
		 *         schema:
		 *           $ref: '#/definitions/Question'
		 *     responses:
		 *       201:
		 *         description: Created. Returns the added question.
		 *         schema:
		 *           $ref: '#/definitions/Question'
		 *       500:
		 *         description: Internal Server Error. An error occurred on the server.
		 */
		this.router.post('/', async (req: Request, res: Response) => {
			const disease = req.body.question;
			try {
				await this.questionService.add(disease);
				res.status(StatusCodes.CREATED).json(disease);
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});

		/**
		 * @swagger
		 *
		 * /api/question:
		 *   delete:
		 *     summary: Delete all questions
		 *     tags:
		 *       - Question
		 *     responses:
		 *       200:
		 *         description: OK. Returns a message indicating successful deletion.
		 *         schema:
		 *           type: object
		 *           properties:
		 *             message:
		 *               type: string
		 *       500:
		 *         description: Internal Server Error. An error occurred on the server.
		 */
		this.router.delete('/', async (req: Request, res: Response) => {
			try {
				res.json(await this.questionService.deleteAll());
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});
	}
}
