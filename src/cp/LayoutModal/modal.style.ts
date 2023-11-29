import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  buttonAbrirModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 15,
  },

  buttonFecharModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: 100,
    right: 30,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 22,
  },

  fixedButton: {
    width: 20,
  },

  centerModal: {
    width: 400,
    top: 50,
    left: 670,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
 }
});


export { styles }