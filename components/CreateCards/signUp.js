import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

import { styles } from './signUp.styles'

export default function SignUp({ navigation }) {
  return (
      <View style={styles.container}>
        <Text>CADASTRO</Text>
        <StatusBar style="auto" />
        <Button title='TESTE' onPress={() => navigation.navigate('Login')}/>
      </View>
  );
}


