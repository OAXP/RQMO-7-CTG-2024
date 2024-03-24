import { ReactNode, useState } from 'react';
import RootContext from './RootContext';

interface RootProviderProps {
	children: ReactNode;
}

const RootProvider = ({ children }: RootProviderProps) => {
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

	return (
		<RootContext.Provider
			value={{
				isPasswordValid,
				setIsPasswordValid,
			}}
		>
			{children}
		</RootContext.Provider>
	);
};

export default RootProvider;
