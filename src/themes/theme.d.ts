import * as React from 'react';
import {CSSProperties} from '@mui/material/styles/createMixins';
import {PaletteColor} from '@mui/material';
import {PaletteColorOptions} from '@mui/material/styles/createPalette';
import {createTheme} from '@mui/material/styles';

declare module '@mui/material/Slider' {
	interface SliderComponentsPropsOverrides {
		mood?: 'sensual' | 'angry' | 'happy' | 'sad' | 'tender'
	}
}

declare module '@mui/material' {
	interface Color {
		dark: React.CSSProperties['color']
		main: React.CSSProperties['color']
		medium: React.CSSProperties['color']
		light: React.CSSProperties['color']
	}
}

declare module '@mui/material/styles/createMixins' {
	interface Mixins {
		listItem: CSSProperties
		logo: CSSProperties
		pageContainer: CSSProperties
		genericPlayButton: ({
			enableHover,
			isBusy,
			isPaused,
			isPlaying,
			isReadyToPlay,
			showPlayByDefault,
		}: {
			enableHover?: boolean
			isBusy: boolean
			isPaused: boolean
			isPlaying: boolean
			isReadyToPlay: boolean
			showPlayByDefault?: boolean
		}) => CSSProperties
		sidebar: CSSProperties
		snackbar: CSSProperties
		topBar: CSSProperties
	}
}

declare module '@mui/material/styles/createPalette' {
	interface CommonColors {
		black10: string
		black50: string
		black60: string
	}

	interface TypeBackground {
		article: string
		artistHeader: string
		queueOverlay: string
		skeleton: string
		slimCardOverlay: string
		tuneDialogOverlay: string
	}

	interface TypeAction {
		imageHover: string
		listHover: string
	}
}

declare module '@mui/material/styles/createTypography' {
	interface FontStyle {
		fontWeightSemiBold: React.CSSProperties['fontWeight']
		fontWeightBlack: React.CSSProperties['fontWeight']
	}
}

declare module '@mui/material/styles' {
	interface MoodColor {
		main: CSSProperties['color']
		medium: CSSProperties['color']
		light: CSSProperties['color']
		hover: CSSProperties['color']
	}

	interface ZIndex {
		sidebar: number
		spinner: number
	}

	interface ZIndexOptions {
		sidebar: number
		spinner: number
	}

	interface Palette {
		tertiary: PaletteColor
		moods: {
			default: MoodColor
			sensual: MoodColor
			angry: MoodColor
			happy: MoodColor
			sad: MoodColor
			tender: MoodColor
		}
	}

	interface PaletteOptions {
		blue?: PaletteColorOptions
		moods: {
			default: MoodColor
			sensual: MoodColor
			angry: MoodColor
			happy: MoodColor
			sad: MoodColor
			tender: MoodColor
		}
		orange?: PaletteColorOptions
		red?: PaletteColorOptions
		tertiary?: PaletteColorOptions
		yellow?: PaletteColorOptions
	}

	interface Theme {
		text: {
			tenant: string
		}
	}

	interface ThemeOptions {
		text?: {
			tenant?: string
		}
	}

	interface Theme {
		options: {
			carousel: {
				maxSlidesPerView: number
			}
		}
	}

	interface ThemeOptions {
		options?: {
			carousel?: {
				maxSlidesPerView?: number
			}
		}
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		tertiary: true
	}
}

export default createTheme;
