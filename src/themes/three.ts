import {yourbrandOverlayTheme, yourbrandTheme} from './yourbrand';
import {createTheme} from '@mui/material/styles';
import getComponents from './components';
import {lighten} from '@mui/material';
import {threePalette} from './palettes';

export const threeTheme = createTheme({}, yourbrandTheme, {
	mixins: {
		...yourbrandTheme.mixins,
		logo: {
			backgroundImage: 'url(/logos/Three.png)',
			backgroundSize: 'cover',
			borderRadius: 0.5,
			height: 52,
			width: 52,
		},
	},
	palette: {
		action: {
			imageHover: threePalette.transparent.black30,
			listHover: threePalette.transparent.black10,
		},
		background: {
			artistHeader: threePalette.gradients.artistHeader,
		},
		common: {
			black: threePalette.black,
			black10: threePalette.transparent.black10,
			black50: threePalette.transparent.black50,
			black60: threePalette.transparent.black60,
		},
		primary: {
			main: threePalette.orange.main,
			light: lighten(threePalette.orange.main, 0.4),
			dark: threePalette.orange.light,
		},
		secondary: {
			main: threePalette.black,
		},
		text: {
			primary: threePalette.black,
		},
	},
	text: {
		tenant: 'Three',
	},
});

const components = getComponents(threeTheme);

export const threeOverlayTheme = createTheme({}, {components}, yourbrandOverlayTheme);

export default createTheme({}, {components}, threeTheme);
