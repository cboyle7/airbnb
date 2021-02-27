import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      {/* input */}
      <TextInput
        style={styles.textInput}
        placeholder="想去哪裡?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* list of destination */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
