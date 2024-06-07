import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Fondo claro para mejor contraste
  },
  title: {
    fontSize: 24, // Tamaño de fuente más grande para el título
    fontWeight: 'bold',
    color: '#333333', // Color del texto más oscuro para mejor legibilidad
    textAlign: 'center',
    marginBottom: 20, // Espacio adicional debajo del título
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, // Espacio adicional debajo del contenedor de entrada
  },
  textInput: {
    flex: 1,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 25, // Bordes más redondeados
    padding: 10,
    backgroundColor: '#ffffff',
    marginRight: 10, // Espacio entre el campo de texto y el botón
  },
  addButton: {
    backgroundColor: '#4CAF50', // Color verde para el botón de añadir
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25, // Bordes más redondeados
  },
  whiteText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold', // Texto en negrita para mejor legibilidad
  },
  scrollContainer: {
    flex: 1,
  },
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10, // Espacio entre los elementos de la lista
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000', // Sombra para mejor separación visual
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, // Elevación para sombra en Android
  },
  text: {
    fontSize: 16,
    color: '#333333',
  },
  textDone: {
    fontSize: 16,
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  removeButton: {
    backgroundColor: '#F44336', // Color rojo para el botón de eliminar
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default styles;
