import { ReactNode, useContext } from 'react';
import PasswordPage from '@pages/Password-prompt';
import RootContext from '@hooks/RootContext';
import { RootContextType } from '@src/interfaces/RootContextType';

interface Props {
	children: ReactNode;
}

export default function ProtectedRoute(props: Props) {
	const { children } = props;
	const { isPasswordValid } = useContext<RootContextType>(RootContext);

	if (!isPasswordValid) {
		return <PasswordPage />;
	}
	return <>{children}</>;
}
