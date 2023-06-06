import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

import { styles } from './home.styles'
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';

export default function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  return (
    <View style={styles.container}>
      <View style={ styles.createButtonsContainer }>
        <TouchableOpacity
          style={styles.createButtonsButton}
          onPress={() => navigation.navigate('Talks')}
        >
          <Text style={styles}>Criar Talk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createButtonsButton}
          onPress={() => navigation.navigate('Talks')}
        >
          <Text style={styles}>Criar Evento</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


