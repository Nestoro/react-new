import React from 'react';
import 'react-native';

import App from './App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
    it('renders correctly', () => {
        renderer.create(<App />);
    });
});
