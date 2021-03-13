import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native'; //轉址用
import places from '../../../assets/data/feed';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import PostCarouselItem from '../../components/PostCarouselItem';
const HomeScreen = () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      {/* search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={20} color={'#f15454'} />
        <Text style={styles.searchButtonText}>想去哪裡?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={[styles.image, styles.fix, {zIndex: -1}]}>
        {/* title */}
        <Text style={styles.title}>近在咫尺的美</Text>

        {/* Button */}
        <Pressable style={styles.button} onPress={() => console.warn('object')}>
          <Text style={styles.buttonText}>瀏覽周邊住宿</Text>
        </Pressable>
      </ImageBackground>
      <View style={{marginVertical: 10, padding: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#444545',
            marginVertical: 10,
          }}>
          在任何角落都能找得到舒適的環境
        </Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // 隱藏 scrollbar
          snapToInterval={width - 60} // 滑動置中
          snapToAlignment={'center'} // 滑動置中
          decelerationRate={'fast'} // 滑動速度
        />
      </View>
    </View>
  );
};

export default HomeScreen;
