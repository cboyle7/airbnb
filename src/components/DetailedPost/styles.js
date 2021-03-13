import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: 20,
    // marginTop: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 4, // 寬度 : 高度 = 3:2
    resizeMode: 'cover',
  },
  heart: {
    color: 'black',
    fontSize: 20,
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 15,
  },
  starCountContainer: {
    // marginVertical: 10,
    marginTop: 15,
  },

  commentsCount: {
    color: 'gray',
  },
  roomType: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: '500',
  },
  roomDesc: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: '300',
  },
  roomPrice: {
    fontSize: 18,
  },
  oldPrice: {
    // fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  longDesc: {
    paddingVertical: 20,
    fontSize: 18,
    lineHeight: 24,
  },
});

export default styles;
