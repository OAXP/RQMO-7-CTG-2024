import React, { SetStateAction } from 'react';

export interface RootContextType {
	isPasswordValid: boolean;
	setIsPasswordValid: React.Dispatch<SetStateAction<boolean>>;
}
