import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormScreen from './FormScreen.js'
import WelcomeScreen from './WelcomeScreen.js'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                <Stack.Screen name='Form' component={FormScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
