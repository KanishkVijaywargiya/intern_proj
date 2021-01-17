import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Screens/Home.js';
import VideoScreen from '../Screens/VideoScreen.js';

const Tab = createMaterialBottomTabNavigator();

export default BottomTabs = () => (
    <Tab.Navigator initialRouteName='Home' shifting={true}>
        <Tab.Screen name='Home'
            component={Home}
            options={{
                tabBarLabel: 'User List',
                tabBarColor: '#0A79DF',
                tabBarIcon: ({ color }) => (
                    <Icon name='ios-list' color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen name='VideoScreen'
            component={VideoScreen}
            options={{
                tabBarLabel: 'Video',
                tabBarColor: '#E83350',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-list" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)