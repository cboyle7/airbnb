import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
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
    marginTop: 10,
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
  disabledButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMinus: {
    fontSize: 20,
    color: '#474747',
  },
  disabledButtonMinus: {
    fontSize: 20,
    color: 'lightgrey',
  },
  buttonPlus: {
    fontSize: 20,
    color: '#474747',
  },
  submitButton: {
    marginBottom: 30,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  submitButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
