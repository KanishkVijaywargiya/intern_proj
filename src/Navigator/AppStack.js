import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import FirstStack from '../Navigator/FirstStack.js';

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <FirstStack />
            </NavigationContainer>
        )
    }
}
export default App;