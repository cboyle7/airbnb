import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('object')}>
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
    </View>
  );
};

export default HomeScreen;
