import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/UserList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource name="users" list={UserList} />
		</Admin>
	);
};

export default App;
