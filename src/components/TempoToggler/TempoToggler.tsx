import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {useTranslation} from 'react-i18next';

export type Tempo = 'any' | 'low' | 'medium' | 'high';

type TempoLabels = {
	[key in Exclude<Tempo, 'any'>]: string
};

export type Props = {
	defaultTempo?: Tempo
	onChange: (tempo: Tempo) => void
};

export default function TempoToggler({
	defaultTempo = 'any',
	onChange,
}: Props) {
	const {t} = useTranslation();
	const [tempo, setTempo] = useState<Tempo>(defaultTempo);

	const tempos: Exclude<Tempo, 'any'>[] = ['low', 'medium', 'high'];

	const tempoLabels: TempoLabels = {
		low: t('Low'),
		medium: t('Medium'),
		high: t('High'),
	};

	return (
		<Tabs
			aria-label={t('Toggle Tempo')}
			centered
			onChange={(_, newTempo) => {
				onChange(newTempo as Tempo);
				setTempo(newTempo as Tempo);
			}}
			sx={theme => ({
				backgroundColor: theme.palette.tertiary.main,
				borderRadius: 20,
				height: 40,
				minHeight: 'initial',
				'.MuiTabs-indicator': {
					backgroundColor: theme.palette.common.white,
					borderRadius: 20,
					height: 40,
				},
				'.MuiTab-root': {
					backgroundColor: 'transparent',
					borderRadius: 'inherit',
					color: theme.palette.text.secondary,
					flexBasis: '33.3%',
					fontWeight: theme.typography.fontWeightMedium,
					height: 40,
					margin: 0,
					minHeight: 'initial',
					padding: 0,
					zIndex: 1,
					'&.Mui-selected': {
						backgroundColor: 'transparent',
						color: theme.palette.text.primary,
					},
				},
			})}
			value={tempo === 'any' ? false : tempo}
		>
			{tempos.map(tempo => (
				<Tab
					key={tempo}
					disableRipple
					label={tempoLabels[tempo]}
					sx={{textTransform: 'none'}}
					value={tempo}
				/>
			))}
		</Tabs>
	);
}