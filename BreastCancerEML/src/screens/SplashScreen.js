/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
    navigation.replace('HomeScreen');
  }, 2000);
  return (
    <LinearGradient colors={['#0072ff', '#00c6ff']} style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logoImage} resizeMode="contain" />
      <Text style={styles.logoTitle}>Breast Cancer Prediction</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: 300,
    width: '100%',
  },
  logoTitle: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
});

export default SplashScreen;
