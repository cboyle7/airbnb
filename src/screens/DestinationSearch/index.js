import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles';
// import searchResults from '../../../assets/data/search';

import {useNavigation} from '@react-navigation/native'; //轉址用
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';
const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* input */}
      <GooglePlacesAutocomplete
        style={styles.textInput}
        placeholder="想去哪裡?"
        renderRow={(item) => <SuggestionRow item={item} />} // 客製自己的 result row
        suppressDefaultStyles // 取消預設style
        enablePoweredByContainer={false} // 取消底下 Power by Google 浮水印
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails // 取得地點細節，例如經緯度ㄋ
        query={{
          key: 'AIzaSyAd6ViOoUVY6q5cacsG54kiTLLTmWpRoqU',
          language: 'zh-TW',
          types: '(cities)', // return only cities
        }}
      />
    </View>
  );
};

export default DestinationSearchScreen;
