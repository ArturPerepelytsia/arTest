import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  rugButton: {
    height: height / 4,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rugImage: {
    height: width,
    width: height / 5,
    transform: [{ rotate: '90deg'}],
  },
});

export default styles;
