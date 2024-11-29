import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

export type Props = {
	nodeCount?: number
};

export default function ListSkeleton({nodeCount = 8}: Props) {
	return (
		<List>
			{Array.from(new Array(nodeCount)).map((_, i) => (
				<ListItem key={i}>
					<ListItemAvatar sx={{minWidth: '48px', mr: 2}}>
						<Skeleton
							sx={{
								aspectRatio: '1/1',
								height: 'auto',
								transform: 'none',
								width: '100%',
							}}
						/>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Skeleton sx={theme => ({marginBlockEnd: theme.spacing(0.5), width: '80px'})}/>
						}
						secondary={<Skeleton sx={{width: '140px'}}/>}
					/>
				</ListItem>
			))}
		</List>
	);
}
