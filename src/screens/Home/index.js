import React from 'react';
import {View, Text, ImageBackground, Pressable, ScrollView} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native'; //轉址用
const HomeScreen = () => {
  const navigation = useNavigation();
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
        style={styles.image}>
        {/* title */}
        <Text style={styles.title}>近在咫尺的美</Text>

        {/* Button */}
        <Pressable style={styles.button} onPress={() => console.warn('object')}>
          <Text style={styles.buttonText}>瀏覽周邊住宿</Text>
        </Pressable>
      </ImageBackground>
      <ScrollView>
        <Text>sss</Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
