import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HotelRoom from './screens/HotelRoom';
import OrderData from './screens/OrderData';


export default function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="HotelRoom" component={HotelRoom} options={{headerShown:false}}/>
      <Stack.Screen name="OrderData" component={OrderData} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}