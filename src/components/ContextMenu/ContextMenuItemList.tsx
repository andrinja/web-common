import React, {
	Children,
	Dispatch,
	ReactElement,
	ReactNode,
	SetStateAction,
	cloneElement,
} from 'react';
import ContextMenuItem from './ContextMenuItem';
import Icon from 'components/Icon';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {useTranslation} from 'react-i18next';

export type Props = {
	children?: ReactNode[]
	parentIds: string[]
	setParentIds: Dispatch<SetStateAction<string[]>>
};

export default function ContextMenuItemList({children, parentIds, setParentIds}: Props) {
	const {t} = useTranslation();

	const removeParent = () => {
		setParentIds(parentIds => parentIds.slice(0, -1));
	};

	return (
		<>
			{!!parentIds?.length && (
				<ContextMenuItem
					icon={<Icon name="ChevronLeft"/>}
					label={(
						<Link
							color="secondary.main"
							onClick={removeParent}
							role="menuitem"
							underline="none"
							variant="caption"
						>
							{t('Back')}
						</Link>
					)}
					role="none"
				/>
			)}
			{Children.map(children, (Item, index) => {
				if (!Item) {
					return Item;
				}

				const Element = Item as ReactElement;

				const hasNestedMenuItems = !!Element.props.children;

				if (!hasNestedMenuItems) {
					return cloneElement(Element, {
						...Element.props,
						autoFocus: index === 0,
						label: typeof Element.props.label === 'string'
							? <Typography variant="caption">{Element.props.label}</Typography>
							: cloneElement(Element.props.label, {role: 'menuitem', variant: 'caption'}),
						tabIndex: index === 0 ? 0 : -1,
					});
				}

				const {id, onClick, ...rest} = Element.props;

				return cloneElement(Element, {
					key: id,
					...rest,
					autoFocus: index === 0,
					label: (
						<Link
							onClick={() => {
								onClick && onClick();
								setParentIds([...parentIds, id]);
							}}
							role="menuitem"
							variant="caption"
						>
							{Element.props.label}
						</Link>
					),
					tabIndex: index === 0 ? 0 : -1,
				});
			})}
		</>
	);
}
