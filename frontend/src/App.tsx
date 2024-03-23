import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@src/pages/Home'));

const routes = [
	{ path: '/home', element: <Home /> },
	{ path: '/', element: <Home /> },
];

function App() {
	return (
		<Suspense>
			<BrowserRouter>
				<Routes>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
