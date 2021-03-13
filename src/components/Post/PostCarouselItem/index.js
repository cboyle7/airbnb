import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const PostCarouselItem = ({
  post: {image, area, type, desc, oldPrice, newPrice},
}) => {
  const width = useWindowDimensions().width; // 依據機型寬度 做 container寬度的彈性調整
  return (
    <View style={[styles.container, {width: width - 60}]}>
      {/* image */}
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.infoContainer}>
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
          <Text style={styles.roomDesc} numberOfLines={2}>
            {desc}
          </Text>
          {/* price */}
          <Text style={styles.roomPrice}>
            {/* <Text style={styles.oldPrice}>${oldPrice} </Text> */}
            <Text style={styles.newPrice}> ${newPrice} </Text>/ 晚
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;
