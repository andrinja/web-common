import List from '@mui/material/List';
import {styled} from '@mui/material/styles';

export default styled(List)(({theme}) => ({
	paddingBlock: 0,
	paddingInline: 0,
	width: '100%',
	'.MuiList-root > .MuiListItem-root': {
		height: '40px',
		'.MuiListItemButton-root': {
			height: '40px',
			paddingInlineStart: theme.spacing(4),
			'.MuiListItemText-root > .MuiTypography-root': {
				...theme.typography.caption,
				fontWeight: theme.typography.fontWeightBold,
			},
		},
	},
}));
