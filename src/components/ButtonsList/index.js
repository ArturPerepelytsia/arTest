import React from 'react';
import { TouchableHighlight, Image } from 'react-native';

import Rugs from '../../constants/images';
import styles from './styles';

const rugNamesArr = ['rug1', 'rug2', 'rug3'];

export default ButtonsList = ({ pressHandler }) => {
  return rugNamesArr.map(item =>
    <TouchableHighlight
      key={item}
      onPress={() => pressHandler(item)}
      style={styles.rugButton}
    >
      <Image
        source={Rugs[`${item}`]}
        resizeMode="contain"
        style={styles.rugImage}
      />
    </TouchableHighlight>
  )
}