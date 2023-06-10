import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

import { styles } from './home.styles'
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import Title from '../../components/Titles/title';

export default function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const highlightContent = [
    {
      img: require('../../assets/banner-2.png'),
      title: 'Oficina de Jogos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id aliquet arcu...'
    },
    {
      img: require('../../assets/banner-2.png'),
      title: 'Oficina de Jogos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id aliquet arcu...'
    },
  ]

  return (
    <View style={styles.container}>
      <Title title='Boa tarde, Steven' showMore={false} profile={true} />
      <View style={styles.createButtonsContainer}>
        <TouchableOpacity
          style={styles.createButtonsButton}
          onPress={() => navigation.navigate('Talks')}
        >
          <Text style={styles.createButtonsButtonText}>Criar Talk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createButtonsButton}
          onPress={() => navigation.navigate('Events')}
        >
          <Text style={styles.createButtonsButtonText}>Criar Evento</Text>
        </TouchableOpacity>
      </View>
      <Title title='Eventos e talks em destaque' showMore={true} />
      <View style={styles.highlightContainer}>
        {highlightContent.map((item, i) => (
          <View key={i} style={styles.highlightWrapper}>
            <Image style={{ width: '30%', height: '100%', borderRadius: 8 }} source={item?.img} />
            <View style={styles.highlightContent}>
              <Text style={styles.highlightTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
      <Title title='Eventos e talks perto de você' showMore={true} />
      <View style={styles.highlightContainer}>
        {highlightContent.map((item, i) => (
          <View key={i} style={styles.highlightWrapper}>
          <Image style={{ width: '30%', height: '100%', borderRadius: 8 }} source={item?.img} />
          <View style={styles.highlightContent}>
            <Text style={styles.highlightTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


