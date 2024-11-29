import {default as MuiTableCell} from '@mui/material/TableCell';
import {styled} from '@mui/material/styles';

export default styled(MuiTableCell)(({theme}) => ({
	border: `1px solid ${theme.palette.common.black}`,
	color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
}));
