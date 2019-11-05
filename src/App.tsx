import React from 'react';

import HomePage from './container/HomePage/HomePage';
import Routing, {Router} from './utilities/routing/index';

const Route = Routing.Route;

class App extends React.Component {
	public render() {
		return (
			<Router>
				<Route path='/' component={HomePage}/>
			</Router>
		);
	}
}

export default App;
