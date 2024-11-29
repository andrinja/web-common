import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import TuneDialogContent from './TuneDialogContent';
import {Props as TuneDialogContentProps} from './TuneDialogContent';
import Typography from '@mui/material/Typography';
import {alpha} from '@mui/material';
import {useTranslation} from 'react-i18next';

export type Props = {
	onClose: () => void
	open: boolean
	playButton: ReactNode
	subtitle: string
	title: string
} & TuneDialogContentProps;

export default function TuneDialog({
	onClose,
	open,
	playButton,
	subtitle,
	title,
	...rest
}: Props) {
	const {t} = useTranslation();

	return (
		<Dialog
			fullScreen
			onClose={onClose}
			open={open}
			sx={theme => ({
				'.MuiBackdrop-root': {
					backdropFilter: 'blur(8px)',
					backgroundColor: 'transparent',
				},
				'.MuiDialog-container': {
					background: 'transparent',
					padding: 0,
				},
				'.MuiPaper-root': {
					alignItems: 'center',
					backgroundColor: theme.palette.grey.light && alpha(theme.palette.grey.light, 0.7),
					justifyContent: 'center',
					maxWidth: '100%',
				},
			})}
		>
			<Box
				alignItems="center"
				bgcolor="text.primary"
				borderRadius="50%"
				display="flex"
				height={46}
				justifyContent="center"
				position="absolute"
				sx={theme => ({
					right: theme.spacing(5),
					top: theme.spacing(5),
				})}
				width={46}
			>
				<IconButton aria-label={t('Close')} onClick={() => onClose()}>
					<CloseIcon
						fontSize="large"
						sx={theme => ({
							color: theme.palette.common.white,
							cursor: 'pointer',
						})}
					/>
				</IconButton>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				maxHeight={1}
				sx={{
					width: {
						xs: 390,
						lg: 780,
					},
				}}
			>
				<Typography component="h2" mt={5} textAlign="center" variant="h1">{title}</Typography>
				<Typography mb={4} textAlign="center" variant="subtitle1">{subtitle}</Typography>
				<TuneDialogContent mb={4} {...rest}/>
				<Box mb={2} textAlign="center">
					{playButton}
				</Box>
			</Box>
		</Dialog>
	);
}