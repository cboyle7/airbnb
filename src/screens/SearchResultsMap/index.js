import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

const SearchResultsMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default SearchResultsMap;
