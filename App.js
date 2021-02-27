/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {FlatList, SafeAreaView, StatusBar} from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';
import feed from './assets/data/feed';
//import Entype from 'react-native-vector-icons/Entypo';
const post1 = feed[0];
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post post={post1} />
      </SafeAreaView>
    </>
  );
};

export default App;
