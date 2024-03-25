import Symptom from './symptom';

export default interface IDisease {
	name: string;
	symptoms: Symptom[];
	type: string;
}
