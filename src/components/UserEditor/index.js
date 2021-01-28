import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEditor = (props) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Edit {...props}>
		<SimpleForm>
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
