import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { UserScreen, WelcomeScreen } from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName='Welcome'
				screenOptions={{
					headerStyle: { backgroundColor: '#3c0a6b' },
					headerTintColor: 'white',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					drawerActiveBackgroundColor: '#f0e1ff',
					drawerActiveTintColor: '#3c0a6b',
					// drawerStyle: { backgroundColor: '#ccc' },
				}}
			>
				<Drawer.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{
						// headerStyle: { backgroundColor: '#3c0a6b' },
						// headerTintColor: 'white',
						// headerTitleStyle: {
						// 	fontWeight: 'bold',
						// },
						drawerLabel: 'Welcome Screen',
						// drawerActiveBackgroundColor: '#f0e1ff',
						// drawerActiveTintColor: '#3c0a6b',
						// drawerStyle: { backgroundColor: '#ccc' },
						drawerIcon: ({ color, size }) => (
							<Ionicons name='home' color={color} size={size} />
						),
					}}
				/>
				<Drawer.Screen
					name='User'
					component={UserScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons name='person' color={color} size={size} />
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};
