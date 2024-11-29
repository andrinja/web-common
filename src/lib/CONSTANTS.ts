// <editor-fold desc="Validation">
export const COGNITO_CODE_LENGTH = 6;
export const MIN_INPUT_LENGTH = 2;
export const MIN_PASSWORD_LENGTH = 8;
export const MIN_USER_AGE = 13;

export const PASSWORD_REGEX = new RegExp(`^(?=.*[a-z])(?!.*[\\s]).{${MIN_PASSWORD_LENGTH},}$`);
// </editor-fold>

export const LINK = {
	PRIVACY_POLICY: 'https://content.moodagent.net/privacy_11sep19.html',
	TERMS_OF_USE: 'https://content.moodagent.net/terms_11sep19.html',
};
