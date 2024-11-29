import * as icons from 'icons';
import * as largeIcons from 'icons/large';
import React, {forwardRef} from 'react';
import {SvgIcon, SvgIconProps} from '@mui/material';
import Box from '@mui/material/Box';

export type Props = {
	fallback?: keyof typeof icons
	name: keyof typeof icons
} & SvgIconProps;

const Icon = forwardRef<SVGSVGElement, Props>(({fallback, name, ...rest}: Props, ref) => {
	const Icon = icons[name] || fallback && icons[fallback];

	if (!Icon) {
		return null;
	}

	const isLargeIcon = Object.keys(largeIcons).includes(name);

	const icon = (
		<SvgIcon
			ref={ref}
			{...!isLargeIcon ? {} : {fontSize: 'inherit', sx: {display: 'block'}, viewBox: '0 0 260 260'}}
			{...rest}
		>
			<Icon/>
		</SvgIcon>
	);

	return !isLargeIcon ? icon : <Box fontSize="260px">{icon}</Box>;
});

Icon.displayName = 'Icon';

export default Icon;
