import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormScreen from './FormScreen.js'
import WelcomeScreen from './WelcomeScreen.js'
import ProfileScreen from './ProfileScreen.js'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                <Stack.Screen name='Form' component={FormScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;