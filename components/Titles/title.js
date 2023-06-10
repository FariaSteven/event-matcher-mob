import { View, Text, Image } from 'react-native';

import { styles } from './title.styles'

export default function Title({ title, showMore, profile, navigation }) {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>{ title }</Text>
          { showMore && <Text>Ver mais</Text> }
          { profile && 
            <View style={styles.profileContainer}>
              <Text>Seu perfil</Text>
              <Image style={{width: 30, height: 30}} source={require('../../assets/profile.png')}/>
            </View> 
          }
      </View>
  );
}


