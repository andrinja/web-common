import Link, {LinkProps, LinkTypeMap} from '@mui/material/Link';
import React, {ElementType, ReactNode} from 'react';
import Icon from 'components/Icon';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';

const StyledLink = styled(Link)(({theme}) => ({
	alignItems: 'center',
	display: 'flex',
	'&:disabled': {
		color: theme.palette.action.disabled,
		cursor: 'default',
		'>.MuiTypography-root': {
			'&:hover': {
				borderColor: 'transparent',
			},
		},
	},
	'>.MuiTypography-root': {
		transition: theme.transitions.create('border-color', {
			duration: theme.transitions.duration.complex,
			easing: theme.transitions.easing.easeIn,
		}),
		'&:hover': {
			borderColor: theme.palette.text.primary,
		},
	}}));

export type Props<
	C extends ElementType = LinkTypeMap['defaultComponent']
> = LinkProps<C, {component?: C}> & {
	alignment?: 'right' | 'left'
	children?: ReactNode
};

export default function ChevronLink<C extends ElementType>({
	alignment = 'right',
	children,
	...rest
}: Props<C>) {
	return (
		<StyledLink color="inherit" underline="none" {...rest}>
			{alignment === 'left' && <Icon name="ChevronLeft"/>}
			{children && (
				<Typography
					borderBottom={1}
					borderColor="transparent"
					sx={{
						marginBlockStart: '2px',
						paddingBlockEnd: '2px',
						textTransform: 'uppercase',
					}}
					variant="caption"
				>
					{children}
				</Typography>
			)}
			{alignment === 'right' && <Icon name="ChevronRight"/>}
		</StyledLink>
	);
}
