import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 2,
    width: 200,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },

  button: {
    height: 30,
    width: 70,
    margin: 15,
    left: 50,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },

  centerLabel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  errorText: {
    color: 'red',
    marginTop: 50,
  },
  Text: {
    color: 'green',
    marginTop: 50,
  },
});


const validarEmail = (input: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValido = input.trim().length > 0 && emailRegex.test(input);
  return emailValido;
};

export { styles, validarEmail }