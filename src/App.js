import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// import ROUTES, { RenderRoutes } from './routes';
import UserIcon from '@material-ui/icons/Group';
import { UserList, UserCreator, UserEditor } from './components';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
	return (
		<div className="App">
			<main className="Main">
				<Admin dataProvider={dataProvider}>
					{/* <RenderRoutes routes={ROUTES} /> */}
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
