import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    height: 120,
    padding: 5,
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
