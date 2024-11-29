import ListItemIcon, {ListItemIconProps} from '@mui/material/ListItemIcon';
import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import Image from '../Image';
import Typography from '@mui/material/Typography';

export type Props = {
	children?: ReactNode
	imgSrc?: string
	index?: ReactNode
} & ListItemIconProps;

export default function ListItemIndicator({children, imgSrc, index, ...rest}: Props) {
	return (
		<ListItemIcon {...rest}>
			{imgSrc && (
				<Image
					alt=""
					borderRadius={0.5}
					draggable={false}
					src={imgSrc}
					style={{backgroundColor: 'transparent', width: '100%'}}
				/>
			)}
			{!imgSrc && (
				<Box alignItems="center" display="flex" height={1} justifyContent="center">
					<Typography color="text.primary" variant="caption">{index}</Typography>
				</Box>
			)}
			{children}
		</ListItemIcon>
	);
}
