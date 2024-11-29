import ListItemText from '@mui/material/ListItemText';
import {styled} from '@mui/material/styles';

export default styled(ListItemText)(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'start',
	'.MuiListItemText-primary': {
		WebkitBoxOrient: 'vertical',
		display: '-webkit-inline-box',
		WebkitLineClamp: '1',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '100%',
		wordBreak: 'break-word',
		'.MuiLink-root': {
			color: theme.palette.text.primary,
		},
	},
	'.MuiListItemText-secondary': {
		'.MuiLink-root': {
			color: theme.palette.text.secondary,
		},
	},
	'.MuiLink-root': {
		fontWeight: 'inherit',
	},
}));
