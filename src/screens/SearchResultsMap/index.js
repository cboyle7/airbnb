import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker/index';
import PostCarouselItem from '../../components/Post/PostCarouselItem';
const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={() =>
              selectedPlaceId === place.id
                ? setSelectedPlaceId(null)
                : setSelectedPlaceId(place.id)
            }
            coordinate={place.coordinate}
            price={place.newPrice}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 45}}>
        <PostCarouselItem post={places[0]} />
      </View>
    </View>
  );
};

export default SearchResultsMap;
