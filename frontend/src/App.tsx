import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '@src/pages/Search';
import {QueryClient, QueryClientProvider} from "react-query";

const Home = lazy(() => import('@src/pages/Home'));
const Game = lazy(() => import('@src/pages/Game'));
const Help = lazy(() => import('@src/pages/Help'));
const Activities = lazy(() => import('@src/pages/Activities'));
const Services = lazy(() => import('@src/pages/Services'));
const Contact = lazy(() => import('@src/pages/Contact'));

const routes = [
	{ path: '/home', element: <Home /> },
	{ path: '/', element: <Home /> },
	{ path: '/game', element: <Game /> },
	{ path: '/help', element: <Help /> },
	{ path: '/activities', element: <Activities /> },
	{ path: '/services', element: <Services /> },
	{ path: '/contact', element: <Contact /> },
	{ path: '/search', element: <Search /> },
];

const queryClient = new QueryClient();

function App() {
	return (
		<Suspense>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						{routes.map((route, index) => (
							<Route key={index} path={route.path} element={route.element} />
						))}
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</Suspense>
	);
}

export default App;
