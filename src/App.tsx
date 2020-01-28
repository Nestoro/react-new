import React, { FC } from 'react';

import HomePage from './container/HomePage/HomePage';
import Routing, {Router} from './utilities/routing/index';

const Route = Routing.Route;

const App: FC = () => {
	return (
		<Router>
			<Route path='/' component={HomePage}/>
		</Router>
	);
};

export default App;
