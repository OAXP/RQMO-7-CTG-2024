import IDisease from '@src/types/disease';
import Symptom from '@src/types/symptom';
import { Question } from '@src/interfaces/Question';
import { Disease } from '@src/interfaces/Disease';

export type dataInterface = IDisease | Symptom | Question | Disease | { password: string };
