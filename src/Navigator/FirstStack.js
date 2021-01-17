import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../Screens/Home.js';
import VideoScreen from '../Screens/VideoScreen.js';

import BottomTabs from '../Navigator/BottomTab.js';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default FirstStack = ({ navigation }) => (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
            name='Home'
            component={BottomTabs}
            options={{
                title: 'Home',
                headerShown: false,
            }}
        />
        <Stack.Screen
            name='VideoScreen'
            component={VideoScreen}
            options={{
                title: 'VideoScreen',
                headerShown: false,
            }}
        />
    </Stack.Navigator>
)