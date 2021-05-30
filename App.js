
import React from 'react';
import Home from './src/screens/Home'
import News from './src/screens/News'
import Report from './src/screens/Report'
import Chart from './src/screens/Chart';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Foundation';  

const Tab = createBottomTabNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name = { 'HOME' } component = { Home } options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="home" size={30} color={focused?"#00f":"#546"} />
            ),
        }} />
        <Tab.Screen name = { 'Report' } component = { Report } options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="graph-bar" size={30} color={focused?"#00f":"#546"} />
            ),
        }} />
        <Tab.Screen name = { 'Chart' } component = { Chart } options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="graph-pie" size={30} color={focused?"#00f":"#546"} />
            ),
        }} />
        
        <Tab.Screen name = { 'News' } component = { News } options={{
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name="compass" size={30} color={focused?"#00f":"#546"} />
            ),
          }}/>
        
    </Tab.Navigator>

    </NavigationContainer>
  );
};


export default App;
