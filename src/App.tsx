import React, { FC } from 'react';

import HomePage from './container/HomePage/HomePage';
import Router, { Route, Routes } from './utilities/routing/index';

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;
