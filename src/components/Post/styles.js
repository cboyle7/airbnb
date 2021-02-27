import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2, // 寬度 : 高度 = 3:2
    resizeMode: 'cover',
    borderRadius: 20,
  },
  heart: {
    position: 'absolute',
    right: 20,
    top: 20,
    // backgroundColor: 'black',
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
    fontSize: 20,
    fontWeight: '300',
  },
  roomDesc: {
    fontSize: 18,
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
});

export default styles;
