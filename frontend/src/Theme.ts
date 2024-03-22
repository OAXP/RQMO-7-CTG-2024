import { extendTheme } from '@chakra-ui/react';
import { baseTheme } from '@saas-ui/react';

export const colors = {
	background: '#ffffff',
	button: '#6246ea',
	button_hover: '#4833ab',
	button_clicked: '#382985',
	button_text: '#fffffe',
};

const theme = extendTheme({ colors }, baseTheme);

export default theme;
