import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResultsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
