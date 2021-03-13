import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Post = ({post: {id, image, area, type, desc, oldPrice, newPrice}}) => {
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {postId: id}); // 轉址到  PostScreen 並傳送 Id
  };
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <FontAwesome
        style={styles.heart}
        name="heart-o"
        size={25}
        color={'white'}
      />

      {/* star */}

      <Text style={styles.starCountContainer}>
        <FontAwesome
          style={styles.star}
          name="star"
          color={'#f15454'}
          size={15}
        />
        <Text style={styles.starCount}>
          {' '}
          5.0 <Text style={styles.commentsCount}>(18)</Text>
        </Text>
      </Text>
      {/*  房型 . 地區 */}
      <Text style={styles.roomType}>
        {type}·{area}
      </Text>
      {/* 標題 */}
      <Text style={styles.roomDesc}>{desc}</Text>
      {/* price */}
      <Text style={styles.roomPrice}>
        <Text style={styles.oldPrice}>${oldPrice} </Text>
        <Text style={styles.newPrice}> ${newPrice} </Text>/ 晚
      </Text>
    </Pressable>
  );
};

export default Post;
