import React, {PropsWithChildren} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {Trans} from 'react-i18next';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';

export type Props = PropsWithChildren<{
	content: string
	createdDate: string
	imageUrl: string
	isExclusive?: boolean
	link?: {text: string, url: string}
	subtitle: string
	title: string
}>;

export default function Article({
	children,
	content,
	createdDate,
	imageUrl,
	isExclusive = false,
	link,
	subtitle,
	title,
}: Props) {
	const theme = useTheme();

	return (
		<Grid container>
			<Grid
				color="common.white"
				container
				direction="column"
				height={408}
				item
				justifyContent="flex-end"
				p={2}
				sx={theme => ({
					position: 'relative',
					backgroundImage: `url(${imageUrl})`,
					backgroundPosition: '50% 50%',
					backgroundSize: 'cover',
					'&::before': {
						background: theme.palette.background.article,
						content: '""',
						height: 1,
						left: 0,
						position: 'absolute',
						top: 0,
						width: 1,
					}})}
			>
				{isExclusive && (
					<Grid item mb={2} zIndex={2}>
						<Typography
							bgcolor="primary.main"
							borderRadius={2}
							fontWeight="fontWeightMedium"
							px={1}
							sx={{lineHeight: 0, textTransform: 'uppercase'}}
							variant="caption"
						>
							<Trans>{{tenant: theme.text.tenant}} music exclusive</Trans>
						</Typography>
					</Grid>
				)}
				<Grid item zIndex={2}>
					<Typography
						fontWeight="fontWeightMedium"
						sx={{textTransform: 'uppercase'}}
						variant="caption"
					>
						{subtitle}
					</Typography>
					<Typography variant="h2">
						{title}
					</Typography>
				</Grid>
			</Grid>
			<Grid bgcolor="common.white" container direction="column" item p={2} xs>
				{link && (
					<Grid item mb={2}>
						<Button
							component={Link}
							fullWidth
							href={link.url}
							size="small"
							target="_blank"
							variant="contained"
						>
							{link.text}
						</Button>
					</Grid>
				)}
				{children && (
					<Grid item mb={2} xs>
						{children}
					</Grid>
				)}
				<Grid item mb={3} typography="body2">
					{content}
				</Grid>
				<Grid color="text.secondary" item typography="overline">
					{createdDate}
				</Grid>
			</Grid>
		</Grid>
	);
}
