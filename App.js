

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { BasketContext } from './Context';
function App() {


  return (
    <BasketContext>
        <SafeAreaView style={styles.container}>
           <StackNavigator/>
        </SafeAreaView>
    </BasketContext>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  whiteColor:{
    color:'black'
  }
});

export default App;
