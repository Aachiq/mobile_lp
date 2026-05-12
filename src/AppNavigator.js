import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import WelcomePage from './screens/WelcomePage'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='WelcomePage'>

                <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
