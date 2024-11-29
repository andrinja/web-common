import * as icons from 'icons';
import type {Meta, StoryObj} from '@storybook/react';
import Icon from 'components/Icon';
import React from 'react';

const systemIcons: Meta = {
	title: 'Icons/System Icons',
};

export default systemIcons;

const border = '1px solid lightGrey';

export const SystemIcons: StoryObj = {
	render: () => (
		<table style={{border, borderCollapse: 'collapse'}}>
			<thead style={{border}}>
				<tr style={{border}}>
					<th style={{border}}>Name</th>
					<th>Icon</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(icons).map(([name]) => (
					!name.includes('Error') && !name.includes('Empty') && (
						<tr key={name} style={{border}}>
							<td style={{border, padding: 8}}>{name}</td>
							<td
								style={{
									backgroundColor: name === 'ExplicitNegative' ? 'black' : 'transparent',
									border,
									padding: 8,
								}}
							>
								<Icon name={name as keyof typeof icons}/>
							</td>
						</tr>
					)
				))}
			</tbody>
		</table>
	),
};
