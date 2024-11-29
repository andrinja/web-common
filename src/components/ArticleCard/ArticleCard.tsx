import React, {MouseEventHandler} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import Grid from '@mui/material/Grid';
import Icon from 'components/Icon';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';

export type Props = {
	imgSrc: string
	isExclusive?: boolean
	onClick?: MouseEventHandler
	subtitle: string
	title: string
};

export default function ArticleCard({
	imgSrc,
	isExclusive = true,
	onClick,
	subtitle,
	title,
}: Props) {
	const {t} = useTranslation();
	const theme = useTheme();

	return (
		<Grid
			aria-label={t('Read article')}
			borderRadius={2}
			container
			direction="column"
			height={208}
			justifyContent="space-between"
			onClick={onClick}
			overflow="hidden"
			p={2}
			position="relative"
			role="button"
			sx={{
				backgroundImage: `url(${imgSrc})`,
				backgroundPosition: '50% 50%',
				backgroundSize: 'cover',
				cursor: 'pointer',
				'&:hover > .MuiGrid-root:nth-of-type(2) > .MuiGrid-root:nth-of-type(2) > .MuiGrid-root': {
					transform: 'scale(1.2)',
				},
				'&:active > .MuiGrid-root:nth-of-type(2) > .MuiGrid-root:nth-of-type(2) > .MuiGrid-root': {
					transform: 'scale(1.05)',
				},
				'&::before': {
					background: theme.palette.background.article,
					content: '""',
					height: '100%',
					position: 'absolute',
					left: 0,
					top: 0,
					width: '100%',
				},
			}}
		>
			<Grid container item>
				{isExclusive && (
					<Grid
						alignItems="center"
						bgcolor="common.white"
						borderRadius={2}
						item
						px={1}
						sx={{lineHeight: 0, textTransform: 'uppercase'}}
						xs="auto"
						zIndex={1}
					>
						<Typography fontWeight="fontWeightMedium" variant="caption">
							<Trans>{{tenant: theme.text.tenant}} music exclusive</Trans>
						</Typography>
					</Grid>
				)}
			</Grid>
			<Grid
				alignItems="flex-end"
				container
				flexWrap="nowrap"
				item
				justifyContent="space-between"
				zIndex={1}
			>
				<Grid item color="common.white">
					<Typography
						fontWeight="fontWeightMedium"
						sx={{textTransform: 'uppercase'}}
						variant="caption"
					>
						{subtitle}
					</Typography>
					<Typography
						sx={{
							WebkitLineClamp: '2',
							WebkitBoxOrient: 'vertical',
							display: '-webkit-box',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							wordBreak: 'break-word',
						}}
						variant="h3"
					>
						{title}
					</Typography>
				</Grid>
				<Grid container item pl={2} xs="auto">
					<Grid
						alignItems="center"
						bgcolor="common.white"
						borderRadius="50%"
						container
						display="flex"
						height={40}
						item
						justifyContent="center"
						sx={theme => ({
							transform: 'scale(1)',
							transition: theme.transitions.create('all', {
								duration: theme.transitions.duration.shortest,
								easing: theme.transitions.easing.sharp,
							}),
						})}
						width={40}
					>
						<Icon fontSize="large" name="ChevronRight"/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
