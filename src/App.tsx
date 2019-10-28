import React from 'react';
import {Provider} from 'react-redux';

import HomePage from './container/HomePage/HomePage';
import Routing, {Router} from './utilities/routing/index';
import store from './utilities/storage/store';

const Route = Routing.Route;

class App extends React.Component {
	public render() {
		return (
			<Provider store={store}>
				<Router>
					<Route path='/' component={HomePage}/>
				</Router>
			</Provider>
		);
	}
}

export default App;
