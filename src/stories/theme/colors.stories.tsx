import type {Meta, StoryObj} from '@storybook/react';
import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';

const colors: Meta = {
	title: 'Theme/colors',
};

export default colors;

const getThemeColors = (objKey: string, objValue: object): ReactNode[] => {

	return Object.entries(objValue)
		.map(([key, value]) => {
			const colorPath = `${objKey}.${key}`;

			if (typeof value === 'string') {
				const subtitle = colorPath.split('.').slice(2)
					.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' / ');
				return (
					<Grid container key={colorPath}>
						<Grid item xs={6} md={4} xl={3}>
							<Typography>{colorPath}</Typography>
							<Typography color="text.secondary" variant="body2">{subtitle}</Typography>
						</Grid>
						<Grid item xs={6} md={8}>
							<Box alignItems="center" display="flex" flexDirection="column" my={1} width={1}>
								<div
									title={colorPath}
									style={{
										background: value,
										border: '1px solid rgba(0, 0, 0, 0.1)',
										boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 0px',
										height: 48,
										width: '100%',
									}}
								/>
								<Typography color="text.secondary" variant="body2">{value}</Typography>
							</Box>
						</Grid>
					</Grid>
				);
			}

			return getThemeColors(colorPath, value).flat();
		});
};

export const Colors: StoryObj = {
	name: 'colors',
	render: () => {
		const {palette} = useTheme();
		return (
			<>
				<Typography variant="h1">Colors</Typography>
				<Box mt={2}>{getThemeColors('theme.palette', palette).flat()}</Box>
			</>
		);
	},
};
