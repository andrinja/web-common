import Dialog, {DialogProps} from 'components/Dialog';
import React, {MouseEvent, ReactElement, UIEvent} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';

interface ModalAction {
	text: string
	callback?: () => void
}

export interface ModalContent {
	image?: string
	icon?: ReactElement
	title?: string
	description?: string | JSX.Element
	confirmAction?: ModalAction
	rejectAction?: ModalAction
	footer?: string | JSX.Element
}

export type Props = {
	content?: ModalContent
	setOpen?: (open: boolean) => void
} & Omit<DialogProps, 'content'>;

export default function Modal({content, open, setOpen, ...rest}: Props) {
	if (!content) {
		return null;
	}
	const {spacing} = useTheme();
	const confirmAction = content.confirmAction;
	const rejectAction = content.rejectAction;

	const handleConfirm = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setOpen && setOpen(false);
		const callback = confirmAction?.callback;
		callback && callback();
	};

	const handleReject = (event: UIEvent) => {
		event.stopPropagation();
		setOpen && setOpen(false);
		const callback = rejectAction?.callback;
		callback && callback();
	};

	const hasAction = !!(confirmAction || rejectAction);
	const icon = content.icon;

	return (
		<Dialog fixedWidth onClose={handleReject} open={open} {...rest}>
			{content.image && <img alt="" src={content.image}/>}
			<DialogContent
				dividers={hasAction}
				sx={{
					...!hasAction ? {} : {
						paddingBlockEnd: spacing(3),
					},
				}}
			>
				{icon && (
					<Box fontSize="40px" textAlign="center">
						{icon}
					</Box>
				)}
				{content.title && (
					<Typography className="title" sx={{pb: 2}} variant="h1">
						{content.title}
					</Typography>
				)}
				<Typography variant="body2">{content.description}</Typography>
			</DialogContent>
			{hasAction && (
				<DialogActions
					disableSpacing
					sx={{
						flexWrap: 'wrap-reverse',
						gap: 1,
						padding: 2,
						justifyContent: {
							xs: 'center',
							md: 'flex-end',
						},
					}}
				>
					{rejectAction && (
						<Button color="secondary" onClick={handleReject} variant="text">
							{rejectAction.text}
						</Button>
					)}
					{confirmAction && (
						<Button autoFocus onClick={handleConfirm} variant="contained">
							{confirmAction.text}
						</Button>
					)}
				</DialogActions>
			)}
			{content.footer && (
				<Box
					sx={{
						marginBlockEnd: 2,
						marginBlockStart: 3,
					}}
					textAlign="center"
					typography="caption"
				>
					{content.footer}
				</Box>
			)}
		</Dialog>
	);
}
