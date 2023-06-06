import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';


import { styles } from './signUp.styles'
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';

export default function SignUp({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  return (
    <View style={styles.container}>
      <Input
        label="Nome"
        placeholder="Nome"
        labelStyle={{ paddingHorizontal: 30, color: "#4B4B4B" }}
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
        label="Sobrenome"
        placeholder="Sobrenome"
        labelStyle={{ paddingHorizontal: 30, color: "#4B4B4B" }}
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
        label="E-mail"
        placeholder="E-mail"
        labelStyle={{ paddingHorizontal: 30, color: "#4B4B4B" }}
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
        label="Senha"
        placeholder="Senha"
        secureTextEntry={true}
        labelStyle={{ paddingHorizontal: 30, color: "#4B4B4B" }}
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
        label="Confirmar Senha"
        placeholder="Confirmar senha"
        secureTextEntry={true}
        labelStyle={{ paddingHorizontal: 30, color: "#4B4B4B" }}
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
        onPress={() => setOpenModal(!openModal)}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonLogin}>Já possui uma conta?</Text>
      </TouchableOpacity>
      {
        openModal &&
        <View style={styles.warningModal}>
          <Text style={styles.warningModalTitle}>Antes de prosseguir com sua inscrição leia atentamente:</Text>
          <Text style={styles.warningModalBody}>Fazemos o uso de dados pessoais e localização, para maior precisão nas buscas e para segurança de nossos usuários.</Text>
          <CheckBox
            title='Li e aceito o uso das minhas informações'
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0
            }}
            textStyle={{
              color: '#FFFFFF'
            }}
            checkedColor='#FFF'
            uncheckedColor='#FFF'
            onPress={() => setIsChecked(!isChecked)}
            checked={!isChecked}
          />
          <TouchableOpacity
            style={styles.warningModalButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.warningModalButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}


