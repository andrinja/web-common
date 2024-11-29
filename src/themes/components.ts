// https://mui.com/material-ui/about-the-lab/#typescript
import type {} from '@mui/lab/themeAugmentation';
import {Components, Theme} from '@mui/material';
import InterBoldWoff from '../fonts/inter/Inter-Bold.woff';
import InterBoldWoff2 from '../fonts/inter/Inter-Bold.woff2';
import InterMediumWoff from '../fonts/inter/Inter-Medium.woff2';
import InterMediumWoff2 from '../fonts/inter/Inter-Medium.woff2';
import InterRegularWoff from '../fonts/inter/Inter-Regular.woff';
import InterRegularWoff2 from '../fonts/inter/Inter-Regular.woff2';
import RobotoLatin100ItalicWoff from '../fonts/roboto/roboto-v19-latin-100italic.woff';
import RobotoLatin100ItalicWoff2 from '../fonts/roboto/roboto-v19-latin-100italic.woff2';
import RobotoLatin100Woff from '../fonts/roboto/roboto-v19-latin-100.woff';
import RobotoLatin100Woff2 from '../fonts/roboto/roboto-v19-latin-100.woff2';
import RobotoLatin300ItalicWoff from '../fonts/roboto/roboto-v19-latin-300italic.woff';
import RobotoLatin300ItalicWoff2 from '../fonts/roboto/roboto-v19-latin-300italic.woff2';
import RobotoLatin300Woff from '../fonts/roboto/roboto-v19-latin-300.woff';
import RobotoLatin300Woff2 from '../fonts/roboto/roboto-v19-latin-300.woff2';
import RobotoLatin500ItalicWoff from '../fonts/roboto/roboto-v19-latin-500italic.woff';
import RobotoLatin500ItalicWoff2 from '../fonts/roboto/roboto-v19-latin-500italic.woff2';
import RobotoLatin500Woff from '../fonts/roboto/roboto-v19-latin-500.woff';
import RobotoLatin500Woff2 from '../fonts/roboto/roboto-v19-latin-500.woff2';
import RobotoLatin700ItalicWoff from '../fonts/roboto/roboto-v19-latin-700italic.woff';
import RobotoLatin700ItalicWoff2 from '../fonts/roboto/roboto-v19-latin-700italic.woff2';
import RobotoLatin700Woff from '../fonts/roboto/roboto-v19-latin-700.woff';
import RobotoLatin700Woff2 from '../fonts/roboto/roboto-v19-latin-700.woff2';
import RobotoLatin900ItalicWoff from '../fonts/roboto/roboto-v19-latin-900italic.woff';
import RobotoLatin900ItalicWoff2 from '../fonts/roboto/roboto-v19-latin-900italic.woff2';
import RobotoLatin900Woff from '../fonts/roboto/roboto-v19-latin-900.woff';
import RobotoLatin900Woff2 from '../fonts/roboto/roboto-v19-latin-900.woff2';
import RobotoLatinItalicWoff from '../fonts/roboto/roboto-v19-latin-italic.woff';
import RobotoLatinItalicWoff2 from '../fonts/roboto/roboto-v19-latin-italic.woff2';
import RobotoLatinRegularWoff from '../fonts/roboto/roboto-v19-latin-regular.woff';
import RobotoLatinRegularWoff2 from '../fonts/roboto/roboto-v19-latin-regular.woff2';
import {baseUnit} from 'themes/globalStyles';

const getComponents = (theme: Theme): Components => ({
	MuiAppBar: {
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.grey.light,
				borderRadius: 0,
				boxShadow: 'none',
				color: theme.palette.common.black,
				height: '80px',
				justifyContent: 'center',
				'.MuiTypography-root': {
					display: 'block',
					[`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
						display: 'none',
					},
				},
			},
		},
	},
	MuiAvatar: {
		styleOverrides: {
			root: {
				height: '32px',
				pointerEvents: 'none',
				width: '32px',
				'&svg': {
					height: '100%',
					width: '100%',
				},
				'&.MuiAvatar-square': {
					borderRadius: theme.shape.borderRadius * 0.5,
				},
			},
		},
	},
	MuiButton: {
		defaultProps: {
			variant: 'outlined',
		},
		styleOverrides: {
			root: {
				boxShadow: 'none',
				display: 'inline-flex',
				lineHeight: 1,
				outline: 'none',
				paddingBlock: 0,
				paddingInline: theme.spacing(2),
				transition: theme.transitions.create('all', {
					duration: theme.transitions.duration.standard,
					easing: theme.transitions.easing.easeInOut,
				}),
				':active, :hover': {
					boxShadow: 'none',
				},
				'.MuiButton-startIcon': {
					marginRight: '4px',
					// Explicitly need to target ':nth-of-type(1)' to override native MUI style:
					'>*, >:nth-of-type(1)': {
						fontSize: '24px',
					},
				},
			},
			sizeLarge: {
				height: '48px',
				minWidth: '168px',
			},
			sizeMedium: {
				height: '48px',
				minWidth: '168px',
			},
			sizeSmall: {
				height: '40px',
				minWidth: '136px',
			},
		},
	},
	MuiCircularProgress: {
		defaultProps: {
			size: baseUnit * 4,
			thickness: 5.5,
			variant: 'indeterminate',
		},
		styleOverrides: {
			colorPrimary: theme.palette.primary.dark,
		},
	},
	MuiCssBaseline: {
		styleOverrides: `
			@font-face {
				font-family: 'Inter';
				font-style: normal;
				font-weight: 400;
				src: local('Inter Regular'), local('Inter-Regular'),
				url(${InterRegularWoff2}) format('woff2'),
				url(${InterRegularWoff}) format('woff');
			}
			@font-face {
				font-family: 'Inter';
				font-style: medium;
				font-weight: 500;
				src: local('Inter Medium'), local('Inter-Medium'),
				url(${InterMediumWoff2}) format('woff2'),
				url(${InterMediumWoff}) format('woff');
			}
			@font-face {
				font-family: 'Inter';
				font-style: bold;
				font-weight: 700;
				src: local('Inter Bold'), local('Inter-Bold'),
				url(${InterBoldWoff2}) format('woff2'),
				url(${InterBoldWoff}) format('woff');
			}

			@font-face {
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 100;
				src: local('Roboto Thin'), local('Roboto-Thin'),
				url(${RobotoLatin100Woff2}) format('woff2'),
				url(${RobotoLatin100Woff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: italic;
				font-weight: 100;
				src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'),
				url(${RobotoLatin100ItalicWoff2}) format('woff2'),
				url(${RobotoLatin100ItalicWoff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 300;
				src: local('Roboto Light'), local('Roboto-Light'),
				url(${RobotoLatin300Woff2}) format('woff2'),
				url(${RobotoLatin300Woff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: italic;
				font-weight: 300;
				src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
				url(${RobotoLatin300ItalicWoff2}) format('woff2'),
				url(${RobotoLatin300ItalicWoff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 400;
				src: local('Roboto'), local('Roboto-Regular'),
				url(${RobotoLatinRegularWoff2}) format('woff2'),
				url(${RobotoLatinRegularWoff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: italic;
				font-weight: 400;
				src: local('Roboto Italic'), local('Roboto-Italic'),
				url(${RobotoLatinItalicWoff2}) format('woff2'),
				url(${RobotoLatinItalicWoff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 500;
				src: local('Roboto Medium'), local('Roboto-Medium'),
				url('${RobotoLatin500Woff2}) format('woff2'),
				url(${RobotoLatin500Woff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: italic;
				font-weight: 500;
				src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'),
				url(${RobotoLatin500ItalicWoff2}) format('woff2'),
				url(${RobotoLatin500ItalicWoff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 700;
				src: local('Roboto Bold'), local('Roboto-Bold'),
				url(${RobotoLatin700Woff2}) format('woff2'),
				url(${RobotoLatin700Woff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: italic;
				font-weight: 700;
				src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
				url(${RobotoLatin700ItalicWoff2}) format('woff2'),
				url(${RobotoLatin700ItalicWoff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 900;
				src: local('Roboto Black'), local('Roboto-Black'),
				url(${RobotoLatin900Woff2}) format('woff2'),
				url(${RobotoLatin900Woff}) format('woff');
			}
			@font-face {
				font-family: 'Roboto';
				font-style: italic;
				font-weight: 900;
				src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
				url(${RobotoLatin900ItalicWoff2}) format('woff2'),
				url(${RobotoLatin900ItalicWoff}) format('woff');
			}
		`,
	},
	MuiCollapse: {
		styleOverrides: {
			root: {
				paddingInline: 0,
			},
		},
	},
	MuiDialog: {
		styleOverrides: {
			container: {
				background: theme.palette.common.black50,
				paddingBlock: theme.spacing(4),
				paddingInline: theme.spacing(4),
			},
			paper: {
				'>img': {
					width: '100%',
					verticalAlign: 'inherit',
					'+.MuiDialogContent-dividers': {
						borderTop: 0,
					},
				},
			},
			paperWidthXs: {
				maxWidth: 256,
				'&$paperScrollBody': {
					[theme.breakpoints.down(256 + parseInt(theme.spacing(3)) * 2)]: {
						maxWidth: '100%',
					},
					[theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2)]: {
						maxWidth: '256px',
					},
				},
			},
			paperWidthSm: {
				maxWidth: 256,
				'&$paperScrollBody': {
					[theme.breakpoints.down(256 + parseInt(theme.spacing(3)) * 2)]: {
						maxWidth: '100%',
					},
					[theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2)]: {
						maxWidth: '256px',
					},
				},
			},
			paperWidthMd: {
				maxWidth: 520,
				'&$paperScrollBody': {
					[theme.breakpoints.down(256 + parseInt(theme.spacing(3)) * 2)]: {
						maxWidth: '100%',
					},
					[theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2)]: {
						maxWidth: '520px',
					},
				},
			},
			paperWidthLg: {
				maxWidth: 900,
				'&$paperScrollBody': {
					[theme.breakpoints.down(256 + parseInt(theme.spacing(3)) * 2)]: {
						maxWidth: '100%',
					},
					[theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2)]: {
						maxWidth: '900px',
					},
				},
			},
			paperWidthXl: {
				maxWidth: 1200,
				'&$paperScrollBody': {
					[theme.breakpoints.down(256 + parseInt(theme.spacing(3)) * 2)]: {
						maxWidth: '100%',
					},
					[theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2)]: {
						maxWidth: '1200px',
					},
				},
			},
		},
	},
	MuiDialogActions: {
		styleOverrides: {
			root: {
				paddingBlock: theme.spacing(1),
				paddingInline: theme.spacing(1),
			},
		},
	},
	MuiDialogContent: {
		styleOverrides: {
			root: {
				paddingBlock: theme.spacing(4),
				paddingInline: theme.spacing(4),
			},
			dividers: {
				borderColor: theme.palette.grey.main,
			},
		},
	},
	MuiDrawer: {
		styleOverrides: {
			paper: {
				background: theme.palette.common.white,
				borderRadius: 0,
				borderRight: 'none',
				paddingBottom: theme.spacing(5),
				width: theme.mixins.sidebar.width,
			},
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			root: {
				color: theme.palette.text.primary,
				fontWeight: theme.typography.fontWeightMedium,
				'&.Mui-error, &.Mui-focused': {
					color: theme.palette.text.primary,
				},
				'&.Mui-disabled': {
					color: theme.palette.grey.medium,
				},
			},
		},
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				marginBlock: 0,
				marginInline: 0,
				paddingBlock: 0,
				paddingInline: 0,
				':disabled': {
					color: theme.palette.grey.dark,
					opacity: '0.3',
				},
				':hover': {
					fontSize: '20px',
				},
			},
			colorPrimary: {
				color: theme.palette.common.black,
				'&:hover': {
					backgroundColor: theme.palette.common.black10,
				},
			},
			colorSecondary: {
				color: theme.palette.grey.dark,
				'&:hover': {
					backgroundColor: theme.palette.grey.main,
				},
			},
			sizeMedium: {
				height: '32px',
				width: '32px',
			},
			sizeLarge: {
				height: '40px',
				width: '40px',
			},
		},
	},
	MuiInput: {
		defaultProps: {
			disableUnderline: true,
		},
	},
	MuiInputBase: {
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.common.white,
				border: '1px solid',
				borderColor: theme.palette.common.white,
				borderRadius: theme.shape.borderRadius,
				transition: theme.transitions.create([
					'border-color',
					'background-color',
					'box-shadow',
				]),
				'&:hover': {
					borderColor: theme.palette.grey.medium,
				},
				'&.Mui-focused': {
					borderColor: theme.palette.grey.dark,
				},
				'&.Mui-error': {
					borderColor: theme.palette.error.main,
				},
				'& .MuiInputBase-input': {
					WebkitBackgroundClip: 'text',
					padding: '12px 16px',
					'&::placeholder': {
						color: theme.palette.grey.medium,
						opacity: 1,
					},
				},
			},
		},
	},
	MuiInputLabel: {
		defaultProps: {
			shrink: true,
		},
	},
	MuiLink: {
		defaultProps: {
			color: 'secondary',
			fontWeight: 'fontWeightBold',
			underline: 'hover',
		},
	},
	MuiListItem: {
		defaultProps: {
			disableGutters: true,
		},
		styleOverrides: {
			root: {
				backgroundColor: 'transparent',
				borderRadius: theme.spacing(1),
				height: theme.mixins.listItem.height,
				outline: 'none',
				paddingInlineStart: theme.spacing(1),
				paddingInlineEnd: theme.spacing(2),
				transition: theme.transitions.create('background-color', {
					duration: theme.transitions.duration.shorter,
					easing: theme.transitions.easing.easeInOut,
				}),
				'&:hover': {
					backgroundColor: theme.palette.common.black10,
				},
			},
		},
	},
	MuiListItemIcon: {
		styleOverrides: {
			root: {
				alignItems: 'center',
				borderRadius: 0.5,
				display: 'block',
				height: '48px',
				justifyContent: 'center',
				marginInlineEnd: theme.spacing(2),
				minWidth: '48px',
				position: 'relative',
				width: '48px',
				img: {
					pointerEvents: 'none',
				},
			},
		},
	},
	MuiListItemText: {
		defaultProps: {
			primaryTypographyProps: {
				variant: 'body2',
			},
			secondaryTypographyProps: {
				variant: 'caption',
			},
		},
	},
	MuiLoadingButton: {
		defaultProps: {
			variant: 'outlined',
		},
	},
	MuiMenuItem: {
		styleOverrides: {
			root: {
				background: 'transparent',
				color: theme.palette.text.primary,
				display: 'flex',
				height: '40px',
				minWidth: '200px',
				paddingBlock: theme.spacing(1),
				paddingInline: theme.spacing(1),
				'&.Mui-focusVisible': {
					background: 'transparent',
				},
				'&.MuiButtonBase-root': {
					':hover': {
						backgroundColor: theme.palette.grey.light,
					},
				},
				'.MuiSvgIcon-root': {
					fontSize: '18px',
				},
				'.MuiTypography-root': {
					alignItems: 'center',
					color: 'inherit',
					display: 'flex',
					fontWeight: theme.typography.fontWeightMedium,
					height: '100%',
					width: '100%',
				},
				'.MuiLink-root': {
					':hover': {
						textDecoration: 'none',
					},
				},
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				'.MuiList-root': {
					'.MuiMenuItem-root': {
						'&:first-of-type': {
							borderTopLeftRadius: theme.shape.borderRadius,
							borderTopRightRadius: theme.shape.borderRadius,
						},
						'&:last-of-type': {
							borderBottomLeftRadius: theme.shape.borderRadius,
							borderBottomRightRadius: theme.shape.borderRadius,
						},
					},
				},
			},
		},
	},
	MuiSkeleton: {
		defaultProps: {
			animation: false,
			variant: 'rectangular',
		},
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.grey.main,
				borderRadius: theme.spacing(0.5),
			},
		},
	},
	MuiSlider: {
		defaultProps: {
			color: 'secondary',
		},
		styleOverrides: {
			root: {
				height: '2px',
				padding: 0,
				width: '72px',
			},
			colorSecondary: {
				color: theme.palette.grey.medium,
			},
			thumb: {
				height: '10px',
				marginTop: 0,
				width: '10px',
			},
			thumbColorSecondary: {
				color: theme.palette.common.black,
			},
			track: {
				border: 0,
				color: theme.palette.common.black,
				height: 'inherit',
			},
		},
	},
	MuiSnackbar: {
		defaultProps: {
			anchorOrigin: {
				horizontal: 'center',
				vertical: 'bottom',
			},
			autoHideDuration: 4000,
		},
	},
	MuiSnackbarContent: {
		styleOverrides: {
			root: {
				background: theme.palette.grey.dark,
				maxWidth: '320px',
				minHeight: '56px',
				minWidth: 'auto',
				paddingBlock: theme.spacing(1),
				paddingInline: theme.spacing(2),
				[`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
					maxWidth: '702px',
				},
			},
		},
	},
	MuiSvgIcon: {
		styleOverrides: {
			colorSecondary: {
				color: theme.palette.grey.dark,
			},
			fontSizeLarge: {
				fontSize: '32px',
			},
			fontSizeMedium: {
				fontSize: '20px',
			},
			fontSizeSmall: {
				fontSize: '16px',
			},
		},
	},
	MuiTab: {
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.tertiary.main,
				borderRadius: '8px',
				color: theme.palette.text.primary,
				fontWeight: theme.typography.fontWeightMedium,
				marginRight: theme.spacing(1),
				minHeight: '40px',
				minWidth: 'auto',
				paddingBlock: 0,
				paddingInline: theme.spacing(2),
				transition: theme.transitions.create('all', {
					duration: theme.transitions.duration.standard,
					easing: theme.transitions.easing.easeInOut,
				}),
				'&.Mui-selected': {
					backgroundColor: theme.palette.secondary.main,
					color: theme.palette.secondary.contrastText,
				},
			},
		},
	},
	MuiTabs: {
		styleOverrides: {
			root: {
				minHeight: '32px',
			},
			indicator: {
				backgroundColor: 'transparent',
			},
		},
	},
	MuiTextField: {
		defaultProps: {
			variant: 'standard',
		},
	},
	MuiTooltip: {
		styleOverrides: {
			tooltip: {
				alignItems: 'center',
				backgroundColor: theme.palette.common.white,
				borderRadius: theme.spacing(0.5),
				boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.15)',
				display: 'flex',
				paddingBlock: theme.spacing(0.5),
				paddingInline: theme.spacing(1),
				'.MuiTypography-root': {
					color: theme.palette.text.primary,
				},
			},
		},
	},
});

export default getComponents;
