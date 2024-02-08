import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import JoinUsScreen from './screens/JoinUsScreen';
import VerificationInProgressScreen from './screens/VerificationInProgressScreen';
import SuccessAuthScreen from './screens/SuccessAuthScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="JoinUsScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="JoinUsScreen" component={JoinUsScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessAuthScreen" component={SuccessAuthScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="VerificationInProgressScreen"
          component={VerificationInProgressScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
