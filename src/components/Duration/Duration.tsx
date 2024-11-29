import React, {JSX} from 'react';
import {useTranslation} from 'react-i18next';

type Item = {
	getDuration?: () => number
	getTracks?: () => {getDuration: () => number}[]
};

export type Props = {
	duration?: number
	item?: Item
};

export default function Duration({duration, item}: Props): JSX.Element {

	const formattedDuration = duration !== undefined
		? getTrackDuration(duration)
		: item && item.getDuration
			? getTrackDuration(item.getDuration())
			: item && item.getTracks
				? getTracksDuration(calculateTracksDuration(item.getTracks()))
				: null;

	if (formattedDuration === null) {
		throw new Error('Invalid item.');
	}

	return <>{formattedDuration}</>;
}

function secondsToHms(seconds: number): {hours: number, minutes: number, seconds: number} {
	return {
		hours: Math.floor(seconds / 3600),
		minutes: Math.floor(seconds % 3600 / 60),
		seconds: seconds % 60,
	};
}

function calculateTracksDuration(tracks: {getDuration: () => number}[]): number {
	return tracks.reduce(
		(tracksDuration, track) => tracksDuration + track.getDuration(),
		0
	);
}

function getTrackDuration(seconds: number): string {
	const duration = secondsToHms(seconds);
	return duration.hours > 0
		? `${duration.hours}:${duration.minutes.toString().padStart(2, '0')}:${duration.seconds.toString().padStart(2, '0')}`
		: `${duration.minutes}:${duration.seconds.toString().padStart(2, '0')}`;
}

function getTracksDuration(seconds: number): string {
	const {t} = useTranslation();
	const duration = secondsToHms(seconds);
	return duration.hours > 0
		? t('{{hours}} h {{minutes}} min', {hours: duration.hours, minutes: duration.minutes})
		: t('{{minutes}} min', {minutes: duration.minutes});
}
