import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { UserScreen, WelcomeScreen } from '../screens';
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
	return (
		<NavigationContainer>
			<BottomTabs.Navigator
				initialRouteName='Welcome'
				screenOptions={{
					headerStyle: { backgroundColor: '#3c0a6b' },
					headerTintColor: 'white',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					tabBarActiveTintColor: '#3c0a6b',
				}}
			>
				<BottomTabs.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='home' color={color} size={size} />
						),
					}}
				/>
				<BottomTabs.Screen
					name='User'
					component={UserScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='person' color={color} size={size} />
						),
					}}
				/>
			</BottomTabs.Navigator>
		</NavigationContainer>
	);
};
