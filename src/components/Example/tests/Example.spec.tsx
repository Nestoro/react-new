import React from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Example from '../Example';

describe('Example', () => {
	it('renders correctly', () => {
		renderer.create(<Example />);
	});
});
