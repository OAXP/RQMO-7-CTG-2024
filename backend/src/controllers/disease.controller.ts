import { Request, Response, Router } from 'express';
import { Service } from 'typedi';
import { StatusCodes } from 'http-status-codes';
import { DiseaseService } from '@src/services/disease.service';

@Service()
export class DiseaseController {
	router: Router;

	constructor(private readonly diseaseService: DiseaseService) {
		this.configureRouter();
	}

	private configureRouter(): void {
		this.router = Router();
		/**
		 * @swagger
		 *
		 * definitions:
		 *   Disease:
		 *     type: object
		 *     properties:
		 *       name:
		 *         type: string
		 *       symptoms:
		 *         type: object
		 *         additionalProperties:
		 *           type: string
		 */

		/**
		 * @swagger
		 * tags:
		 *   - name: Disease
		 *     description: Diseases
		 */

		/**
		 * @swagger
		 *
		 * /api/disease:
		 *   get:
		 *     summary: Return all the diseases
		 *     tags:
		 *       - Disease
		 *     produces:
		 *       - application/json
		 *     responses:
		 *       200:
		 *         description: OK
		 *         schema:
		 *           type: array
		 *           items:
		 *             $ref: '#/definitions/Disease'
		 *
		 */
		this.router.get('/', async (req: Request, res: Response) => {
			try {
				res.status(StatusCodes.OK).json(await this.diseaseService.getAll());
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});

		/**
		 * @swagger
		 * /api/disease/random:
		 *   get:
		 *     summary: Get a random disease
		 *     tags: [Disease]
		 *     parameters: []
		 *     responses:
		 *       200:
		 *         description: Successful response. Returns the random disease.
		 *         schema:
		 *           $ref: '#/definitions/Disease'
		 *       500:
		 *         description: Internal server error.
		 */
		this.router.get('/random', async (req: Request, res: Response) => {
			try {
				res.status(StatusCodes.OK).json(await this.diseaseService.getRandom());
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});

		/**
		 * @swagger
		 * /api/disease/{name}:
		 *   get:
		 *     summary: Get a disease by its name
		 *     tags: [Disease]
		 *     parameters:
		 *       - in: path
		 *         name: name
		 *         required: true
		 *         schema:
		 *           type: string
		 *         description: name of the disease
		 *     responses:
		 *       200:
		 *         description: The requested disease
		 *       500:
		 *         description: Internal server error
		 */
		this.router.get('/:name', async (req: Request, res: Response) => {
			try {
				res
					.status(StatusCodes.OK)
					.json(await this.diseaseService.getByName(req.params.name));
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});

		/**
		 * @swagger
		 * /api/disease:
		 *   post:
		 *     summary: Create a new disease
		 *     tags: [Disease]
		 *     requestBody:
		 *       required: true
		 *       content:
		 *         application/json:
		 *           schema:
		 *             type: object
		 *     responses:
		 *       201:
		 *         description: The newly created disease
		 *       500:
		 *         description: Internal server error
		 */
		this.router.post('/', async (req: Request, res: Response) => {
			const disease = req.body.disease;
			try {
				await this.diseaseService.add(disease);
				res.status(StatusCodes.CREATED).json(disease);
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});

		/**
		 * @swagger
		 * /api/disease:
		 *   put:
		 *     summary: Modify an existing disease
		 *     tags: [Disease]
		 *     requestBody:
		 *       required: true
		 *       content:
		 *         application/json:
		 *           schema:
		 *             type: object
		 *     responses:
		 *       201:
		 *         description: The modified disease
		 *       500:
		 *         description: Internal server error
		 */
		this.router.put('/', async (req: Request, res: Response) => {
			const { disease, name } = req.body;
			try {
				await this.diseaseService.update(disease, name);
				res.status(StatusCodes.OK).json(disease);
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});

		/**
		 * @swagger
		 * /api/disease/{name}:
		 *   delete:
		 *     summary: Delete a disease by name
		 *     tags: [Disease]
		 *     parameters:
		 *       - in: path
		 *         name: name
		 *         required: true
		 *         schema:
		 *           type: string
		 *         description: name of the disease to delete
		 *     responses:
		 *       200:
		 *         description: Disease deleted successfully
		 *       500:
		 *         description: Internal server error
		 */
		this.router.delete('/:name', async (req: Request, res: Response) => {
			try {
				res.json(await this.diseaseService.delete(req.params.name));
			} catch (e) {
				res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
			}
		});
	}
}
