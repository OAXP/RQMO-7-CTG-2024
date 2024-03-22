import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@src/pages/Home'));
const Game = lazy(() => import('@src/pages/Game'));
const Help = lazy(() => import('@src/pages/Help'));
const Activities = lazy(() => import('@src/pages/Activities'));
const Services = lazy(() => import('@src/pages/Services'));
const Contact = lazy(() => import('@src/pages/Contact'));

const routes = [
	{ path: '/home', element: <Home /> },
	{ path: '/', element: <Home /> },
	{ path: '/Game', element: <Game /> },
	{ path: '/Help', element: <Help /> },
	{ path: '/Activities', element: <Activities /> },
	{ path: '/Services', element: <Services /> },
	{ path: '/Contact', element: <Contact /> },
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
