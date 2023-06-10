import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { styles } from './createForm.styles';
import { useState } from 'react';
import { ButtonGroup, Icon, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native';

export default function CreateForm({ buttonName, navigation }) {
  const [image, setImage] = useState(null);

  const buttons = ['Homens', 'Mulheres', 'Todos'];
  const yearsButtons = ['-18', '+18', 'LIVRE']

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center' }}>
        {
          image ?
            <View style={{ marginTop: 10 }}>
              <Image
                source={{ uri: image }}
                style={{
                  width: 170,
                  height: 170,
                  borderRadius: 15,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,

                }}
                onPress={() => pickImage()}
              />
              <TouchableOpacity style={styles.imagePickerButton} onPress={() => pickImage()}>
                {/* <Icon name='camera' type='font-awesome' color='#fff' /> */}
                <Text style={{ fontWeight: '900', color: '#FFF' }}>Escolher outra foto</Text>
              </TouchableOpacity>
            </View>
            :
            <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage()}>
              <Icon name='camera' type='font-awesome' />
              <Text style={{ fontWeight: '900', color: '#4D089A' }}>Incluir foto</Text>
              <Text style={{ fontWeight: '900', color: '#CAC9CA' }}>Adicionar foto de capa</Text>
            </TouchableOpacity>
        }
        <Text style={{ width: '95%', textAlign: 'left', fontWeight: '600', marginVertical: 5 }}>Título</Text>
        <Input
          placeholder="Título"
          inputStyle={{ fontSize: 15 }}
          inputContainerStyle={{
            elevation: 4,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: '#FFF',
            borderBottomWidth: 0,
            borderRadius: 10,
          }}
        />
        <Text style={{ width: '95%', textAlign: 'left', fontWeight: '600', marginVertical: 5 }}>Categoria</Text>
        <Input
          placeholder="Categoria"
          inputStyle={{ fontSize: 15 }}
          inputContainerStyle={{
            elevation: 4,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: '#FFF',
            borderBottomWidth: 0,
            borderRadius: 10
          }}
        />

        <Text style={{ width: '95%', textAlign: 'left', fontWeight: '600', marginVertical: 5 }}>Descrição</Text>
        <Input
          multiline={true}
          numberOfLines={4}
          placeholder="Descrição"
          inputStyle={{ fontSize: 15, textAlignVertical: 'top' }}
          inputContainerStyle={{
            elevation: 4,
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: '#FFF',
            borderBottomWidth: 0,
            borderRadius: 10,
          }}
        />
        <Text style={{ width: '95%', textAlign: 'left', fontWeight: '600', marginVertical: 5 }}>Quem pode fazer parte?</Text>
        <ButtonGroup
          selectedButtonStyle={{ backgroundColor: '#000' }}
          disabledSelectedStyle={{ backgroundColor: '#fff' }}
          selectedTextStyle={{ backgroundColor: '#000' }}
          containerStyle={{
            width: '100%',
            borderWidth: 0,
            gap: 10,
            height: 50,
            marginBottom: 15
          }}
          buttonStyle={{
            elevation: 4,
            backgroundColor: '#FFF',
            borderRadius: 12,
            width: '100%',
            // padding: 5
          }}
          buttonContainerStyle={{ borderColor: '#FFF', padding: 12 }}
          buttons={buttons} />
        <Text style={{ width: '95%', textAlign: 'left', fontWeight: '600', marginVertical: 5 }}>Idade</Text>
        <ButtonGroup
          selectedButtonStyle={{ backgroundColor: '#000' }}
          disabledSelectedStyle={{ backgroundColor: '#fff' }}
          selectedTextStyle={{ backgroundColor: '#000' }}
          containerStyle={{
            width: '100%',
            borderWidth: 0,
            gap: 10,
            height: 50,
            marginBottom: 15
          }}
          buttonStyle={{
            elevation: 4,
            backgroundColor: '#FFF',
            borderRadius: 12,
            width: '100%',
            // padding: 5
          }}
          buttonContainerStyle={{ borderColor: '#FFF', padding: 12 }}
          buttons={yearsButtons} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>{ buttonName }</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}


