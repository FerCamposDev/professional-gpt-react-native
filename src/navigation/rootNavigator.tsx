import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Route } from './routes.types';
import Config from '../Screens/Config';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

export function RootStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={Route.HOME}
				component={Home}
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
