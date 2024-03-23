import { extendTheme } from '@chakra-ui/react';
import { baseTheme } from '@saas-ui/react';

export const colors = {
	background: '#dbebf5',
	button: '#6246ea',
	button_hover: '#4833ab',
	button_clicked: '#382985',
	button_text: '#d66b32',
	Primary: '#199ad6',
};

const theme = extendTheme({ colors }, baseTheme);

export default theme;
