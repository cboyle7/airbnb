import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import DetailedPost from '../../components/DetailedPost';
import places from '../../../assets/data/feed';
import styles from './styles';

const PostScreen = () => {
  const route = useRoute(); // get postId from ( Post->index.js)
  console.log(route.params); // expect print postId: ?
  const post = places.find((place) => place.id === route.params.postId);
  return (
    <View style={styles.container}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
