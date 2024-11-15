import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanPlantInfo from './Components/OnboardingScreens/ScanPlantInfo'
import CommunityInfo from './Components/OnboardingScreens/CommunityInfo'
import CultivationTips from './Components/OnboardingScreens/CultivationTips'
import Login from './Components/LoginSignUpScreens/LogIn'
import SignUp from './Components/LoginSignUpScreens/SignUp'
import LoginVerification from './Components/LoginSignUpScreens/LoginVerification'
import SignUpVerification from './Components/LoginSignUpScreens/SignUpVerification'
import CropSelection from './Components/SelectionScreen/CropSelection'
import Home from './Components/Home/Home'
import Store from './Components/Store/StoreScreen'
import ProductDetails from './Components/Store/ProductDetails'
import Community from './Components/Community&NotificationScreens/Community'
import Notifications from './Components/Community&NotificationScreens/Notification'
import NavBar from './Components/Drawer&NavigationScreens/navigationBar'
import Appointment from './Components/AppointmentScreen/Appointment'
import DiagnosisDetails from './Components/Diagnosis/DiagnosisInfo';
import Camera from './Components/Diagnosis/DiagnosisCamera'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ScanPlantInfo"
        screenOptions={{
          headerShown: false, // Show header
        }}>
          <Stack.Screen
          name="ScanPlantInfo"
          component={ScanPlantInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CommunityInfo"
          component={CommunityInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CultivationTips"
          component={CultivationTips}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginVerification"
          component={LoginVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpVerification"
          component={SignUpVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CropSelection"
          component={CropSelection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Community"
          component={Community}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavBar"
          component={NavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DiagnosisDetails"
          component={DiagnosisDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
