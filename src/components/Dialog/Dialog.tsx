import {default as MuiDialog, DialogProps as MuiDialogProps} from '@mui/material/Dialog';
import React, {MouseEventHandler, ReactNode} from 'react';
import Icon from 'components/Icon';
import IconButton from '@mui/material/IconButton';

export type Props = {
	children?: ReactNode
	closable?: boolean
	fixedWidth?: boolean
	maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	onClose?: MouseEventHandler
	scroll?: 'body' | 'paper'
} & MuiDialogProps;

export default function Dialog({
	children,
	closable = false,
	fixedWidth = false,
	maxWidth = 'md',
	onClose,
	scroll = 'body',
	...rest
}: Props) {
	return (
		<MuiDialog
			PaperProps={{sx: theme => ({
				...!fixedWidth ? {} : {
					width: {
						xs: 256,
						md: 520,
					},
				},
				...!closable ? {} : {
					paddingBlockStart: theme.spacing(6),
					'.MuiDialogContent-root': {
						paddingBlockStart: theme.spacing(3),
					},
				},
			})}}
			maxWidth={maxWidth}
			onClose={onClose}
			scroll={scroll}
			{...rest}
		>
			{
				closable && (
					<IconButton
						color="secondary"
						name="Cancel"
						onClick={onClose}
						size="small"
						sx={theme => ({
							insetInlineEnd: theme.spacing(3),
							position: 'absolute',
							top: theme.spacing(3),
						})}
					>
						<Icon name="Cancel"/>
					</IconButton>
				)
			}
			{children}
		</MuiDialog>
	);
}
