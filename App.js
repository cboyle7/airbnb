/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import DestinationSearchScreen from './src/screens/DestinationSearch';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
//import Entype from 'react-native-vector-icons/Entypo';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearchScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
