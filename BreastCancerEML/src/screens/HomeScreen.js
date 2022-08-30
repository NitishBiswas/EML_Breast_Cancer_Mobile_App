/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#0072ff', '#00c6ff']}  style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <Image
          resizeMode="contain"
          source={require('../images/logo.png')}
          style={styles.bannerImage}
        />

        <Text style={styles.bodyTitle}>What is Breast Cancer?</Text>

        <Text style={styles.bodyText}>
          Breast cancer is a disease in which cells in the breast grow out of
          control. There are different kinds of breast cancer. The kind of
          breast cancer depends on which cells in the breast turn into cancer.
          Breast cancer can begin in different parts of the breast.
        </Text>

        <TouchableOpacity
          style={styles.btnView}
          onPress={() => navigation.navigate('Predict')}>
          <Text style={styles.btnText}>Predict Breast Cancer</Text>
        </TouchableOpacity>

        <Image
          resizeMode="contain"
          source={require('../images/banner2.png')}
          style={styles.bannerImage}
        />

        <View style={styles.cardView}>
          <Image
            resizeMode="contain"
            source={require('../images/predict.png')}
            style={styles.cardImage}
          />
          <Text style={styles.bodyTitle}>
            What is prediction and how is it achieved?
          </Text>
          <Text style={styles.bodyText}>
            “Prediction” refers to the output of an algorithm after it has been
            trained on a historical dataset and applied to new data when
            forecasting the likelihood of a particular outcome.
          </Text>
        </View>
        <View style={styles.cardView}>
          <Image
            resizeMode="contain"
            source={require('../images/group.png')}
            style={styles.cardImage}
          />
          <Text style={styles.bodyTitle}>Who is Predict for?</Text>
          <Text style={styles.bodyText}>
            Predict is for clinicians, patients and their families. Patients
            should use it in consultation with a medical professional.
          </Text>
        </View>

        <View style={styles.cardView}>
          <Image
            resizeMode="contain"
            source={require('../images/logo.png')}
            style={styles.cardImage}
          />
          <Text style={styles.bodyTitle}>
            Can a person have malignant or benign know it?
          </Text>
          <Text style={styles.bodyText}>
            Some people have malignant or benign without realizing it. But they
            can predict breast cancer from this machine.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  bodyTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  bodyText: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'justify',
  },
  btnView: {
    backgroundColor: '#0072ff',
    height: 40,
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerImage: {
    width: '100%',
    height: 250,
    marginTop: 10,
  },
  cardView: {
    // backgroundColor: '#070724',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    // marginBottom: 100,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;
