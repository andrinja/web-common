import * as icons from 'icons';
import type {Meta, StoryObj} from '@storybook/react';
import {Icon} from 'components/Icon';
import React from 'react';

const errorIcons: Meta = {
	title: 'Icons/Error Icons',
};

export default errorIcons;

const border = '1px solid lightGrey';

export const ErrorIcons: StoryObj = {
	render: () => (
		<table style={{border, borderCollapse: 'collapse'}}>
			<thead style={{border}}>
				<tr style={{border}}>
					<th style={{border}}>Name</th>
					<th>Icon</th>
				</tr>
			</thead>
			<tbody style={{border}}>
				{Object.entries(icons).map(([name]) =>
					name.includes('Error') && (
						<tr key={name} style={{border}}>
							<td style={{border}}>{name}</td>
							<td><Icon name={name as keyof typeof icons}/></td>
						</tr>
					))}
			</tbody>
		</table>
	),
};
