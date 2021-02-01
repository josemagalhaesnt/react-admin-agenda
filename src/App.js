import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserCreator, UserEditor } from './components';
// import dataProvider from './api/dbAPI';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
	return (
		<div className="App">
			<main className="Main">
				<Admin dataProvider={dataProvider}>
					<Resource
						name="users"
						icon={UserIcon}
						list={UserList}
						create={UserCreator}
						edit={UserEditor}
					/>
				</Admin>
			</main>
		</div>
	);
};

export default App;
