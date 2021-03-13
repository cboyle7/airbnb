import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker/index';
import PostCarouselItem from '../../components/Post/PostCarouselItem';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
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
      <View style={{position: 'absolute', bottom: 30}}>
        <FlatList
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

export default SearchResultsMap;
