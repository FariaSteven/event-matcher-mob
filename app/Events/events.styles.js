import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      // elevation: 8,
      backgroundColor: "#0095FF",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },

    buttonText: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: 600,
      paddingHorizontal: 20,
    },

    buttonSignUp: {
      marginTop: 5,
      color: '#0095FF',
      fontSize: 15,
      fontWeight: 300,
      textDecorationLine: 'underline',
      paddingHorizontal: 20,
    },

    buttonForgetPassword: {
      marginTop: 5,
      color: '#000',
      fontSize: 15,
      fontWeight: 300,
      textDecorationLine: 'underline',
      paddingHorizontal: 20,
    },

    socialContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 100,
      marginVertical: 20
    }
  });