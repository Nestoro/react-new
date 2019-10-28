import React from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import HomePage from '../HomePage';

describe('HomePage', () => {
	it('renders correctly', () => {
		renderer.create(<HomePage />);
	});
});
