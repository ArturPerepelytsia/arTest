import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/welcome';
import ARCameraScreen from './screens/arcamera/';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ARCamera" component={ARCameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
