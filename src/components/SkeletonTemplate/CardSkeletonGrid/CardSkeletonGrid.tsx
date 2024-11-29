import {CardGridItem, CardGrid} from 'components/CardGrid';
import CardSkeleton, {CardSkeletonProps} from 'components/CardSkeleton';
import React from 'react';

export type Props = {
	nodeCount?: number
} & CardSkeletonProps;

export default function CardSkeletonGrid({nodeCount = 48, ...rest}: Props) {
	return (
		<CardGrid>
			{Array.from(new Array(nodeCount)).map((_, i) => (
				<CardGridItem key={i}>
					<CardSkeleton {...rest}/>
				</CardGridItem>
			))}
		</CardGrid>
	);
}
