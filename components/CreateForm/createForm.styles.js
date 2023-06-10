import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    containerScroll: {
      width: 800,
      height: '100%',
      alignItems: 'center',
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },

    imagePicker: {
      elevation: 8,
      justifyContent: 'center',
      alignItems: 'center',
      width: 230,
      height: 180,
      height: 200,
      backgroundColor: '#FFF',
      borderWidth: 2,
      borderRadius: 10,
      borderStyle: 'dotted',
      marginTop: 10
    },

    imagePickerButton: {
      justifyContent: 'center',
      backgroundColor: '#4D089A',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      padding: 10,
      borderRadius: 15, 
      borderTopLeftRadius: 0, 
      borderTopRightRadius: 0
    },

    button: {
      elevation: 8,
      width: '60%',
      fontWeight: '900',
      backgroundColor: "#4D089A",
      textAlign: 'center',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom: 10
    },

    buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 20,
      fontWeight: 600,
      paddingHorizontal: 20,
    },
  });