import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	EmailField,
	UrlField,
	SimpleList,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

export const UserList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
	console.log(isSmall);

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<List {...props}>
			{isSmall ? (
				<SimpleList
					primaryText={(user) => user.name}
					secondaryText={(user) => user.phone}
				/>
			) : (
				<Datagrid rowClick="edit">
					<TextField source="id" />
					<TextField source="name" />
					<TextField source="username" />
					<EmailField source="email" />
					<TextField source="address.street" />
					<TextField source="phone" />
					<UrlField source="website" />
					<TextField source="company.name" />
				</Datagrid>
			)}
		</List>
	);
};
