import {Theme} from '@mui/material/styles';

type Themes = {
	default: Theme
	overlay: Theme
};

export default class ThemeStore {
	private static themes: {[key: string]: Themes} = {};

	static add(key: string, themes: Themes) {
		this.themes[key] = themes;
	}

	static get(tenantId?: string) {
		const themes = this.themes[tenantId ?? 'yourbrand'] ?? this.themes.yourbrand;

		if (!themes) {
			throw new Error(`Unable to find theme "${tenantId}", also tried "yourbrand".`);
		}

		return themes;
	}

	static getAll() {
		return Object.values(this.themes);
	}
}
