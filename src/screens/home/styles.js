import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // centraliza verticalmente
    alignItems: 'center',      // centraliza horizontalmente
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#D6DEE2',
  },
  titulo: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: 'contain',
  },
  numero: {
    fontSize: 32,
    color: '#000',
    marginBottom: 4,
  },
  
  linha: {
    height: 2,
    width: 60,
    backgroundColor: 'red',
    marginBottom: 20,
  },

  mensagem: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },

  
});

export default styles;