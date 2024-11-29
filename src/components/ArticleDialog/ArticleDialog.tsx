import Article, {Props as ArticleProps} from './Article';
import ArticleReference, {Props as ArticleReferenceProps} from './ArticleReference';
import Dialog, {DialogProps} from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {alpha} from '@mui/material/styles';
import {useTranslation} from 'react-i18next';

export type Props = {
	articleProps: ArticleProps
	articleReferenceProps?: ArticleReferenceProps
} & DialogProps;

export default function ArticleDialog({
	articleProps,
	articleReferenceProps,
	...dialogProps
}: Props) {
	const {t} = useTranslation();

	return (
		<Dialog
			scroll="body"
			sx={{
				'.MuiPaper-root': {
					bgcolor: 'transparent',
					borderRadius: 2,
					maxWidth: 500,
				},
			}}
			{...dialogProps}
		>
			<Box
				borderRadius="50%"
				height={32}
				position="absolute"
				sx={theme => ({
					bgcolor: alpha(theme.palette.common.white, 0.4),
					right: theme.spacing(2),
					top: theme.spacing(2),
				})}
				width={32}
				zIndex={10}
			>
				<IconButton
					aria-label={t('Close')}
					color="primary"
					onClick={event => dialogProps.onClose && dialogProps.onClose(event, 'backdropClick')}
				>
					<CloseIcon fontSize="large"/>
				</IconButton>
			</Box>
			<Article {...articleProps}>
				<ArticleReference {...articleReferenceProps}/>
			</Article>
		</Dialog>
	);
}
