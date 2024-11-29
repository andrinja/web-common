import {yourbrandOverlayTheme, yourbrandTheme} from './yourbrand';
import {createTheme} from '@mui/material/styles';
import getComponents from './components';
import {lighten} from '@mui/material';
import {oisterPalette} from './palettes';

export const oisterTheme = createTheme({}, yourbrandTheme, {
	mixins: {
		...yourbrandTheme.mixins,
		logo: {
			backgroundImage: 'url(/logos/Oister.png)',
			backgroundSize: 'cover',
			height: 44,
			width: 132,
		},
	},
	palette: {
		action: {
			imageHover: oisterPalette.transparent.black30,
			listHover: oisterPalette.transparent.black10,
		},
		background: {
			artistHeader: oisterPalette.gradients.artistHeader,
		},
		common: {
			black: oisterPalette.black,
			black10: oisterPalette.transparent.black10,
			black50: oisterPalette.transparent.black50,
			black60: oisterPalette.transparent.black60,
		},
		primary: {
			main: oisterPalette.purple.main,
			light: lighten(oisterPalette.purple.main, 0.4),
			dark: oisterPalette.purple.light,
		},
		secondary: {
			main: oisterPalette.black,
		},
		text: {
			primary: oisterPalette.black,
		},
	},
	text: {
		tenant: 'Oister',
	},
});

const components = getComponents(oisterTheme);

export const oisterOverlayTheme = createTheme({}, {components}, yourbrandOverlayTheme);

export default createTheme({}, {components}, oisterTheme);
