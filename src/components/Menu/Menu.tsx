import React, {KeyboardEvent, PropsWithChildren, SyntheticEvent, useCallback, useRef} from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import type {PopperProps} from '@mui/material/Popper';

export type Props = PopperProps & PropsWithChildren & {
	setOpen: (open: boolean) => void
};

export default function Menu({anchorEl, children, open, setOpen, ...rest}: Props) {
	const prevOpen = useRef(open);

	const handleListKeyDown = useCallback((event: KeyboardEvent) => {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}, [setOpen]);

	const handleClose = useCallback((event: Event | SyntheticEvent) => {
		if (
			anchorEl && anchorEl instanceof HTMLElement && anchorEl.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	}, [anchorEl, setOpen]);

	// Return focus to the button after closing
	React.useEffect(() => {
		if (prevOpen.current && !open && anchorEl instanceof HTMLElement) {
			anchorEl.focus();
		}

		prevOpen.current = open;
	}, [anchorEl, open]);

	return (
		<Popper
			anchorEl={anchorEl}
			disablePortal
			open={open}
			placement="bottom-start"
			role={undefined}
			transition
			{...rest}
		>
			{({TransitionProps, placement}) => (
				<Grow
					{...TransitionProps}
					style={{transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'}}
				>
					<Paper>
						<ClickAwayListener onClickAway={handleClose}>
							<MenuList autoFocusItem={open} disablePadding onKeyDown={handleListKeyDown}>
								{children}
							</MenuList>
						</ClickAwayListener>
					</Paper>
				</Grow>
			)}
		</Popper>
	);
}
