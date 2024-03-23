import IDisease from '@src/types/disease';
import Symptom from '@src/types/symptom';
import {Question} from '@src/interfaces/Question';

export const SERVER_URL = 'http://localhost:3000';
export type dataInterface = IDisease | Symptom | Question;
