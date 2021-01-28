import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreator = (props) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Create {...props}>
			<SimpleForm>
				<TextInput source="name" />
				<TextInput source="username" />
				<TextInput source="email" />
				<TextInput source="address.street" />
				<TextInput source="phone" />
				<TextInput source="website" />
				<TextInput source="company.name" />
			</SimpleForm>
		</Create>
	);
};
