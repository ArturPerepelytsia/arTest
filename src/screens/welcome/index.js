import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './styles';
import ButtonsList from '../../components/ButtonsList';

const  WelcomeScreen = ({ navigation }) => {
  const goToArCamera = () => {
    navigation.navigate('ARCamera');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Choose View:
      </Text>
      <ButtonsList
        pressHandler={goToArCamera}
      />
      {/* <TouchableOpacity style={styles.button} onPress={goToArCamera}>
        <Text style={styles.buttonText}>Go to AR Camera</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default WelcomeScreen;
