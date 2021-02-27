import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginBottom: 20,
  },
  button: {
    width: 130,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: '35%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
  },
  searchButton: {
    width: Dimensions.get('screen').width - 20,
    height: 50,
    borderRadius: 20,
    // padding: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 100,
  },
  searchButtonText: {
    marginLeft: 5,
  },
});

export default styles;
