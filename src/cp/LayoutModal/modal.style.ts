import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    margin: 2,
    height: 40,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },

  buttonAbrirModal: {
    margin: 20,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },

  buttonFecharModal: {
    margin: 30,
    width: 100,
    height: 30,
    right: 30,
    borderRadius: 5,
    borderWidth: 1,
  },

  fixedButton: {
    width: 20,
  },

  centerModal: {
    width: 400,
    top: 50,
    left: 990,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
 }
});


export { styles }