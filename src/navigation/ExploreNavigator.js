import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

import SearchResultsTabNavigator from './SearchResultsTabNavigator';
const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      {/* 最先出現 default page*/}
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {/* 因為是 stack 所以覆蓋上頭的 screen */}
      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{title: '搜尋地點'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
