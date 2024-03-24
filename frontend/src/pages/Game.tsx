import React from 'react';
import { Text } from '@chakra-ui/react';
import Navbar from '@src/layouts/navbar';
import Notebook from '@src/components/notebook';

export default function Game() {
	const [isOpened, setIsOpened] = React.useState(false);

	const handleOpen = () => {
		setIsOpened((isOpened) => !isOpened);
	};

	return (
		<>
			<Navbar />
			<Text>Game page</Text>
			<Notebook isOpened={isOpened} handleOpen={handleOpen} />
			<button onClick={handleOpen}>Open Notebook</button>
		</>
	);
}
