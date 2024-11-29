import i18n from 'i18next';

i18n.init({
	fallbackLng: 'en',
	debug: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
