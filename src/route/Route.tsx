import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from '../pages/inputScreen/InputScreen';
import OutputScreen from '../pages/outputScreen/OutputScreen';
import { RootStackParamList } from '../type/Types';

export default function Route() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"input"} screenOptions={{
                gestureEnabled: true,
                headerShown: false,
                animation: "fade"
            }}>
                <Stack.Screen name="input" component={InputScreen} />
                <Stack.Screen name="output" component={OutputScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}