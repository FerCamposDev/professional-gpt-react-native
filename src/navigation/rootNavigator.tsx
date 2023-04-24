import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThemeExample from '../Screens/ThemeExample';
import Config from '../Screens/Config';
import { Route } from './routes.types';

const Stack = createNativeStackNavigator();

export function RootStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={Route.THEME}
				component={ThemeExample}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={Route.CONFIG}
				component={Config}
				options={{
					title: 'Configuracion'
				}}
			/>
		</Stack.Navigator>
	);
}
