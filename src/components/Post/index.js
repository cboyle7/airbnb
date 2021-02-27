import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Post = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri:
            'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
      <Text style={styles.roomType}>整套公寓·中正區</Text>
      {/* 標題 */}
      <Text style={styles.roomDesc}>台北車站60秒 台北 二人房</Text>
      {/* price */}
      <Text style={styles.roomPrice}>
        <Text style={styles.oldPrice}>$900 </Text>
        <Text style={styles.newPrice}> $732 </Text>/ 晚
      </Text>
    </View>
  );
};

export default Post;
