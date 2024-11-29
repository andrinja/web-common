import Grid, {GridProps} from '@mui/material/Grid';
import MoodSliders, {Mood, Slider, SliderValue} from '../MoodSliders';
import React, {ReactNode, useCallback} from 'react';
import TempoToggler, {Tempo} from '../TempoToggler';
import TuneDialogPreview, {Props as TuneDialogPreviewProps} from './TuneDialogPreview';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export type Sliders = {
	[key in Mood]: SliderValue
} & {
	tempo: Tempo
	masterSlider: MasterSlider
};

type MasterSlider = Mood | 'tempo' | 'none';

export type Headings = {
	mood: string
	preview: string
	tempo: string
};

export type Props = {
	error?: ReactNode
	headings: Headings
	onChange: (sliders: Sliders) => void
	onChangeCommitted: (sliders: Sliders) => void
	previews: TuneDialogPreviewProps[]
	sliders: Sliders
} & Omit<GridProps, 'onChange'>;

export default function TuneDialogContent({
	error,
	headings,
	onChange,
	onChangeCommitted,
	previews,
	sliders,
	...rest
}: Props) {

	const handleSlidersChange = useCallback(
		(newSliders: Slider[], masterSlider: MasterSlider) => {
			onChange({
				...Object.fromEntries(
					newSliders.map(slider => [slider.mood, slider.value])
				) as {[key in Mood]: SliderValue},
				masterSlider,
				tempo: sliders.tempo,
			});
		},
		[onChange, sliders]
	);

	const handleSlidersChangeCommitted = useCallback(
		(newSliders: Slider[], masterSlider: MasterSlider) => {
			onChangeCommitted({
				...Object.fromEntries(
					newSliders.map(slider => [slider.mood, slider.value])
				) as {[key in Mood]: SliderValue},
				masterSlider,
				tempo: sliders.tempo,
			});
		},
		[onChangeCommitted, sliders]
	);

	const handleTempoChange = useCallback((tempo: Tempo) => {
		onChangeCommitted({...sliders, tempo});
	}, [onChangeCommitted, sliders]);

	return (
		<Grid
			container
			maxHeight={1}
			overflow="hidden"
			position="relative"
			sx={theme => ({
				borderRadius: 2,
				boxShadow: theme.shadows[8],
			})}
			{...rest}
		>
			<Box
				bottom={0}
				height={24}
				position="absolute"
				sx={theme => ({
					background: theme.palette.background.tuneDialogOverlay,
				})}
				width={1}
				zIndex={1}
			/>
			<Grid
				bgcolor="background.default"
				item
				pb={3}
				pt={2}
				px={3}
				sx={theme => ({
					borderBottomLeftRadius: {
						xs: 0,
						lg: theme.shape.borderRadius * 2,
					},
					borderBottomRightRadius: 0,
					borderTopLeftRadius: theme.shape.borderRadius * 2,
					borderTopRightRadius: {
						xs: theme.shape.borderRadius * 2,
						lg: 0,
					},
				})}
				xs={12}
				lg={6}
			>
				<Grid container direction="column">
					<Grid component="h3" item my={2} typography="h3">{headings.tempo}</Grid>
					<Grid item mb={1}>
						<TempoToggler defaultTempo={sliders.tempo} onChange={handleTempoChange}/>
					</Grid>
				</Grid>
				<Grid container direction="column">
					<Grid component="h3" item my={2} typography="h3">{headings.mood}</Grid>
					<Grid item>
						<MoodSliders
							onChange={handleSlidersChange}
							onChangeCommitted={handleSlidersChangeCommitted}
							sliders={
								(
									Object.entries(sliders).filter(([key]) => {
										return key !== 'masterSlider' && key !== 'tempo';
									}) as [Mood, SliderValue][]
								).map<Slider>(([key, value]: [Mood, SliderValue]) => ({
									mood: key,
									value,
								}))
							}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				bgcolor="common.white"
				item
				pb={3}
				pt={2}
				px={3}
				sx={theme => ({
					borderBottomLeftRadius: {
						xs: theme.shape.borderRadius * 2,
						lg: 0,
					},
					borderBottomRightRadius: theme.shape.borderRadius * 2,
					borderTopLeftRadius: 0,
					borderTopRightRadius: {
						xs: 0,
						lg: theme.shape.borderRadius * 2,
					},
				})}
				xs={12}
				lg={6}
			>
				<Grid container direction="column">
					<Grid component="h3" item my={2} typography="h3">{headings.preview}</Grid>
					<Grid item>
						{error && <Typography color="error">{error}</Typography>}
						{!error && previews.map(props => (
							<TuneDialogPreview key={`${props.artist}-${props.album}-${props.title}`} {...props}/>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
