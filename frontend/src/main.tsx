import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { SaasProvider } from '@saas-ui/react';

import theme from '@src/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<SaasProvider theme={theme}>
			<App />
		</SaasProvider>
	</React.StrictMode>
);
