export default class Logger {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	info(content: string) {
		// eslint-disable-next-line no-console
		console.info(`${this.name} - ${Date.now()}: ${content}`);
	}

	err(content: string) {
		// eslint-disable-next-line no-console
		console.error(`${this.name} - ${Date.now()}: ${content}`);
	}
}
