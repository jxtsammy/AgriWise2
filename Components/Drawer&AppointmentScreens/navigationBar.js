import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import Home from '../../Components/Home/Home'
import Store from '../../Components/Store/StoreScreen'
import Community from '../../Components/Community&NotificationScreens/Community'
import Appointments from '../AppointmentScreen/Appointment'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Simple ProfileScreen component
const ProfileScreen = () => <></>;

// Create stack navigators for each tab if needed
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      {/* Add other screens for Home stack */}
    </Stack.Navigator>
  );
};

const CommunityStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CommunityScreen" component={Community} />
      {/* Add other screens for Community stack */}
    </Stack.Navigator>
  );
};

const StoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StoreScreen" component={Store} />
      {/* Add other screens for Store stack */}
    </Stack.Navigator>
  );
};

const AppointmentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Appointment" component={Appointments} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#088a6a',
          tabBarInactiveTintColor: '#8e8e8e',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Store"
          component={StoreStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="store-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AppointmentStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default App;