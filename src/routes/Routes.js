import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <StackMain/>
  )
}

const StackMain = () => (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}  />
    </Stack.Navigator>
)