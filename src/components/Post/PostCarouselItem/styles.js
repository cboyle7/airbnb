import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    height: 150,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1, // 寬度 : 高度 = 3:2
    resizeMode: 'cover',
    // borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  heart: {
    position: 'absolute',
    right: 20,
    top: 20,
    // backgroundColor: 'black',
  },
  starCountContainer: {
    // marginVertical: 10,
    marginTop: 5,
  },

  commentsCount: {
    color: 'gray',
  },
  roomType: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '300',
  },
  roomDesc: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: '300',
  },
  roomPrice: {
    fontSize: 13,
    marginBottom: 5,
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
