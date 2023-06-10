import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      width: '92%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 15
    },
    
    title: {
      fontSize: 20,
      fontWeight: 900
    },

    profileContainer: {
      elevation: 8,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      backgroundColor: '#F1F1F1',
      paddingLeft: 10,
      borderRadius: 20
    }
  });