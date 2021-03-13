import React, {useState, useEffect, useRef} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker/index';
import PostCarouselItem from '../../components/PostCarouselItem';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;

  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  const onViewChanged = useRef(({viewableItems}) => {
    console.log(viewableItems);
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return; // 如果 selectedPlaceId 或 flatlist 為 null 不做任何事
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId); // 找出 selectedPlaceId 所有資訊
    flatlist.current.scrollToIndex({index}); // 點選價位 下方移動置 該價位的小卡
    // console.warn('object', selectedPlaceId);

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region); // 地圖移動置該點
  }, [selectedPlaceId]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={map}
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
          keyExtractor={(item) => item.id}
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // 隱藏 scrollbar
          snapToInterval={width - 60} // 滑動置中
          snapToAlignment={'center'} // 滑動置中
          decelerationRate={'fast'} // 滑動速度
          viewabilityConfig={viewConfig.current} // item 於螢幕上顯示超過 70% 才納入 onViewableItemsChanged
          onViewableItemsChanged={onViewChanged.current} // 滾動後於螢幕上可看到的 item 資訊
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
