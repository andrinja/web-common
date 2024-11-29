import {globalPalette, yourbrandPalette} from './palettes';
import {baseTheme} from './base';
import {createTheme} from '@mui/material/styles';
import getComponents from './components';

export const yourbrandTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 567,
			md: 768,
			lg: 1056,
			xl: 1440,
		},
	},
	mixins: {
		listItem: {
			height: 64,
		},
		logo: {
			backgroundImage: 'url(/logos/YourBrand.svg)',
			backgroundSize: 'cover',
			height: 22,
			width: 130,
		},
		pageContainer: {
			padding: `0 ${baseTheme.spacing(3)}`,
		},
		genericPlayButton: ({
			enableHover = true,
			isBusy,
			isPaused,
			isPlaying,
			isReadyToPlay,
			showPlayByDefault = false,
		}) => ({
			'.MagentGenericPlayButton': {
				opacity: 0,
				visibility: 'hidden',
				...isPaused || isReadyToPlay || isPlaying || isBusy || showPlayByDefault ? {
					opacity: 1,
					visibility: 'visible',
				} : {},
				'> .MuiIconButton-root': {
					display: 'none',
					':nth-of-type(1)': {
						...showPlayByDefault && !isPaused && !isPlaying && !isBusy ? {display: 'flex'} : {},
					},
					':nth-of-type(2)': {
						...isPaused ? {display: 'flex'} : {},
					},
					':nth-of-type(3)': {
						...isPlaying ? {display: 'flex'} : {},
					},
					':nth-of-type(4)': {
						...isBusy ? {display: 'block'} : {},
					},
					'&.Mui-disabled': {
						color: 'inherit',
						opacity: 1,
					},
				},
			},
			...enableHover ? {
				'&:hover': {
					'.MagentGenericPlayButton': {
						opacity: 1,
						visibility: 'visible',
						'> .MuiIconButton-root': {
							display: 'none',
							':nth-of-type(1)': {
								...isReadyToPlay ? {display: 'flex'} : {},
							},
							':nth-of-type(2)': {
								...isPlaying ? {display: 'flex'} : {},
							},
							':nth-of-type(4)': {
								...isBusy ? {display: 'block'} : {},
							},
						},
					},
				},
			} : {},
		}),
		sidebar: {
			width: 230,
		},
		snackbar: {
			mb: 1,
		},
		topBar: {
			height: 80,
		},
	},
	options: {
		carousel: {
			maxSlidesPerView: 6,
		},
	},
	palette: {
		action: {
			active: globalPalette.standard.grey.dark,
			disabled: globalPalette.standard.grey.medium,
			focus: globalPalette.standard.grey.dark,
			hover: globalPalette.standard.grey.dark,
			imageHover: yourbrandPalette.transparent.black30,
			listHover: yourbrandPalette.transparent.black10,
			selected: globalPalette.standard.grey.dark,
		},
		background: {
			article: yourbrandPalette.gradients.article,
			artistHeader: yourbrandPalette.gradients.artistHeader,
			default: globalPalette.standard.grey.light,
			queueOverlay: globalPalette.gradients.queueOverlay,
			skeleton: globalPalette.gradients.skeleton,
			slimCardOverlay: globalPalette.gradients.slimCardOverlay,
			tuneDialogOverlay: globalPalette.gradients.tuneDialogOverlay,
		},
		blue: {
			main: globalPalette.original.blue.main,
		},
		common: {
			black: yourbrandPalette.black,
			black10: yourbrandPalette.transparent.black10,
			black50: yourbrandPalette.transparent.black50,
			black60: yourbrandPalette.transparent.black60,
			white: globalPalette.standard.white,
		},
		error: {
			main: globalPalette.standard.red,
		},
		grey: {
			dark: globalPalette.standard.grey.dark,
			main: globalPalette.standard.grey.main,
			medium: globalPalette.standard.grey.medium,
			light: globalPalette.standard.grey.light,
		},
		moods: {
			default: {
				main: globalPalette.moods.default.main,
				medium: globalPalette.moods.default.medium,
				light: globalPalette.moods.default.light,
				hover: globalPalette.moods.default.hover,
			},
			sensual: {
				main: globalPalette.moods.sensual.main,
				medium: globalPalette.moods.sensual.medium,
				light: globalPalette.moods.sensual.light,
				hover: globalPalette.moods.sensual.hover,
			},
			angry: {
				main: globalPalette.moods.angry.main,
				medium: globalPalette.moods.angry.medium,
				light: globalPalette.moods.angry.light,
				hover: globalPalette.moods.angry.hover,
			},
			happy: {
				main: globalPalette.moods.happy.main,
				medium: globalPalette.moods.happy.medium,
				light: globalPalette.moods.happy.light,
				hover: globalPalette.moods.happy.hover,
			},
			sad: {
				main: globalPalette.moods.sad.main,
				medium: globalPalette.moods.sad.medium,
				light: globalPalette.moods.sad.light,
				hover: globalPalette.moods.sad.hover,
			},
			tender: {
				main: globalPalette.moods.tender.main,
				medium: globalPalette.moods.tender.medium,
				light: globalPalette.moods.tender.light,
				hover: globalPalette.moods.tender.hover,
			},
		},
		orange: {
			main: globalPalette.original.orange.main,
		},
		primary: {
			main: yourbrandPalette.red.main,
			dark: yourbrandPalette.red.light,
		},
		red: {
			main: globalPalette.original.red.main,
		},
		secondary: {
			main: yourbrandPalette.black,
			light: globalPalette.standard.grey.dark,
		},
		success: {
			main: globalPalette.standard.green,
		},
		tertiary: {
			main: globalPalette.standard.grey.main,
			dark: globalPalette.standard.grey.medium,
			light: globalPalette.standard.grey.light,
		},
		text: {
			primary: yourbrandPalette.black,
			secondary: globalPalette.standard.grey.dark,
		},
		warning: {
			main: globalPalette.standard.red,
		},
		yellow: {
			main: globalPalette.original.yellow.main,
		},
	},
	shape: {
		borderRadius: 8,
	},
	typography: {
		fontFamily: 'inter, verdana, serif',
		h1: {
			fontSize: 36,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightBold,
			letterSpacing: 0,
		},
		h2: {
			fontSize: 20,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightBold,
			letterSpacing: 0,
		},
		h3: {
			fontSize: 16,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightBold,
			letterSpacing: 0,
		},
		subtitle1: {
			fontSize: 16,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightMedium,
			letterSpacing: 0,
		},
		subtitle2: {
			fontSize: 14,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightMedium,
			letterSpacing: 0,
		},
		body1: {
			fontSize: 16,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightRegular,
			letterSpacing: 0,
		},
		body2: {
			fontSize: 14,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightRegular,
			letterSpacing: 0,
		},
		button: {
			fontSize: 14,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightMedium,
			letterSpacing: 0.4,
			textTransform: 'none',
		},
		caption: {
			fontSize: 12,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightRegular,
			letterSpacing: 0,
		},
		// maps to 'Caption small' typography definition in the design system.
		overline: {
			fontSize: 10,
			lineHeight: 'normal',
			fontWeight: baseTheme.typography.fontWeightRegular,
			letterSpacing: 0.2,
			textTransform: 'none',
		},
	},
	text: {
		tenant: 'Your Brand',
	},
	transitions: {
		...baseTheme.transitions,
	},
	zIndex: {
		spinner: 11,
	},
});

const components = getComponents(yourbrandTheme);

export const yourbrandOverlayTheme = createTheme(
	{},
	baseTheme,
	yourbrandTheme,
	{components},
	{
		palette: {
			...yourbrandTheme.palette,
			action: {
				disabled: globalPalette.standard.grey.medium,
				disabledBackground: globalPalette.standard.grey.medium,
				listHover: globalPalette.standard.black,
				hoverOpacity: 0.25,
			},
			background: {
				default: globalPalette.standard.black,
			},
			common: {
				black: globalPalette.standard.white,
				white: globalPalette.standard.black,
			},
			mode: 'dark',
			primary: {
				main: globalPalette.standard.white,
				dark: globalPalette.standard.grey.medium,
			},
			secondary: {
				main: globalPalette.standard.white,
				dark: globalPalette.standard.grey.medium,
			},
			text: {
				primary: globalPalette.standard.white,
				secondary: globalPalette.standard.white,
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					contained: {
						color: globalPalette.standard.black,
						'&.Mui-disabled': {
							color: globalPalette.standard.white,
						},
					},
				},
			},
			MuiIconButton: {
				styleOverrides: {
					colorPrimary: {
						color: globalPalette.standard.white,
						'&:hover': {
							backgroundColor: globalPalette.transparent.white60,
						},
					},
					colorSecondary: {
						color: globalPalette.transparent.white60,
						'&:hover': {
							backgroundColor: globalPalette.standard.grey.dark,
						},
					},
				},
			},
			MuiListItem: {
				styleOverrides: {
					root: {
						backgroundColor: globalPalette.transparent.black90,
						'&:hover': {
							backgroundColor: globalPalette.standard.black,
						},
					},
				},
			},
			MuiLoadingButton: {
				styleOverrides: {
					loadingIndicator: {
						color: globalPalette.standard.white,
					},
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					colorSecondary: {
						color: globalPalette.standard.white,
					},
				},
			},
		},
	}
);

export default createTheme(
	{},
	baseTheme,
	yourbrandTheme,
	{components}
);
