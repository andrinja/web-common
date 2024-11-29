import ArticlePlayButton, {Props as ArticlePlayButtonProps} from './ArticlePlayButton';
import Box from '@mui/material/Box';
import FallbackImage from '../FallbackImage';
import Grid from '@mui/material/Grid';
import Image from '../Image';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';
import React from 'react';
import Typography from '@mui/material/Typography';

interface Reference {
	imageUrl: string
	subtitle?: string
	title: string
}

export type Props = {
	isExclusive?: boolean
	linkTo?: string
	playButtonProps?: ArticlePlayButtonProps
	reference?: Reference
};

export default function ArticleReference({reference, linkTo, playButtonProps}: Props) {
	if (!reference) {
		return null;
	}

	const image = reference.imageUrl
		? <Image alt={reference.title} borderRadius="50%" src={reference.imageUrl}/>
		: <FallbackImage borderRadius="50%"/>;

	return (
		<Grid alignItems="center" columnSpacing={1} container wrap="nowrap">
			<Grid item xs="auto">
				{linkTo
					? (
						<Link component={RouterLink} display="block" to={linkTo} width={48}>
							{image}
						</Link>
					)
					: <Box width={48} fontWeight="fontWeightMedium">{image}</Box>}
			</Grid>
			<Grid item xs>
				{linkTo
					? (
						<Link component={RouterLink} to={linkTo} variant="subtitle1">
							{reference.title}
						</Link>
					)
					: reference.title}
				<Typography color="text.secondary" variant="subtitle2">
					{reference.subtitle}
				</Typography>
			</Grid>
			<Grid item>
				<ArticlePlayButton {...playButtonProps}/>
			</Grid>
		</Grid>
	);
}
