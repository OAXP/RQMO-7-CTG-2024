export interface Disease {
	type: 'rare' | 'common';
	gene_sequences: string[];
	blood_types: string[];
	name: string;
	symptoms: { part: string; description: string }[];
}
