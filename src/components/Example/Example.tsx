import React, { FC } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
	web: 'You are good to go.',
});

const Example: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to react-new, a react-native boilerplate that works on any system
			</Text>
			<Text style={styles.instructions}>
				To get started, edit App.tsx
			</Text>
			<Text style={styles.instructions}>
				{instructions}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default Example;
