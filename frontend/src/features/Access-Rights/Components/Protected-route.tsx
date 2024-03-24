import { Dispatch, ReactNode, SetStateAction } from 'react';
import PasswordPage from '@pages/Password-prompt';

interface Props {
	children: ReactNode;
	isPasswordValid: boolean;
	setIsPasswordValid: Dispatch<SetStateAction<boolean>>;
}

export default function ProtectedRoute(props: Props) {
	const { children, isPasswordValid, setIsPasswordValid } = props;

	if (!isPasswordValid) {
		return <PasswordPage setIsPasswordValid={setIsPasswordValid} />;
	}
	return <>{children}</>;
}
