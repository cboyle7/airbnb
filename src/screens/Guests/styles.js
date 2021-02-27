import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4',
  },
  typeName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  typeAgeRange: {
    color: '#444545',
  },
  peopleConsoleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  peopleCount: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#676767',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMinus: {
    fontSize: 20,
    color: '#474747',
  },
  buttonPlus: {
    fontSize: 20,
    color: '#474747',
  },
});

export default styles;
