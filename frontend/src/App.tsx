import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<Suspense>
			<Outlet />
		</Suspense>
	);
}

export default App;
