import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

import { styles } from './login.styles'
import { Icon } from 'react-native-elements';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 350, height: 300 }} source={require('../../assets/banner.png')} />
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'feather', name: 'mail' }}
        inputContainerStyle={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginHorizontal: 30,
          backgroundColor: '#F2F2F2',
          borderBottomWidth: 0,
          borderRadius: 10
        }}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        leftIcon={{ type: 'feather', name: 'lock' }}
        inputContainerStyle={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginHorizontal: 30,
          backgroundColor: '#F2F2F2',
          borderBottomWidth: 0,
          borderRadius: 10
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonSignUp}>Ou Cadastre-se</Text>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <Icon name='facebook' type='font-awesome' />
        <Icon name='google' type='font-awesome' />
        <Icon name='apple' type='font-awesome' />
      </View>
      

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonForgetPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}