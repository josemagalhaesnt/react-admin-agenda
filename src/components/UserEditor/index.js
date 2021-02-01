/* eslint-disable react/prop-types */
import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const SelectedUser = ({ record }) => {
	return <span>Editing {record ? `"${record.name}"` : ''}</span>;
};

export const UserEditor = (props) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Edit title={<SelectedUser />} {...props}>
		<SimpleForm>
			<TextInput disabled source="id" />
			<TextInput source="name" />
			<TextInput source="username" />
			<TextInput source="email" />
			<TextInput source="address.street" />
			<TextInput source="phone" />
			<TextInput source="website" />
			<TextInput source="company.name" />
		</SimpleForm>
	</Edit>
);
