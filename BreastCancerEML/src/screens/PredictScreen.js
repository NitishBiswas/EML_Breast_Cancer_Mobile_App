/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Modal,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const PredictScreen = ({navigation}) => {
  //loading state
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [radius_mean, setRadius_mean] = useState('');
  const [texture_mean, setTexture_mean] = useState('');
  const [perimeter_mean, setPerimeter_mean] = useState('');
  const [area_mean, setArea_mean] = useState('');
  const [smoothness_mean, setSmoothness_mean] = useState('');
  const [compactness_mean, setCompactness_mean] = useState('');
  const [concavity_mean, setConcavity_mean] = useState('');
  const [concave_points_mean, setConcave_points_mean] = useState('');
  const [symmetry_mean, setSymmetry_mean] = useState('');
  const [fractal_dimension_mean, setFractal_dimension_mean] = useState('');
  const [radius_se, setRadius_se] = useState('');
  const [texture_se, setTexture_se] = useState('');
  const [perimeter_se, setPerimeter_se] = useState('');
  const [area_se, setArea_se] = useState('');
  const [smoothness_se, setSmoothness_se] = useState('');
  const [compactness_se, setCompactness_se] = useState('');
  const [concavity_se, setConcavity_se] = useState('');
  const [concave_points_se, setConcave_points_se] = useState('');
  const [symmetry_se, setSymmetry_se] = useState('');
  const [fractal_dimension_se, setFractal_dimension_se] = useState('');
  const [radius_worst, setRadius_worst] = useState('');
  const [texture_worst, setTexture_worst] = useState('');
  const [perimeter_worst, setPerimeter_worst] = useState('');
  const [area_worst, setArea_worst] = useState('');
  const [smoothness_worst, setSmoothness_worst] = useState('');
  const [compactness_worst, setCompactness_worst] = useState('');
  const [concavity_worst, setConcavity_worst] = useState('');
  const [concave_points_worst, setConcave_points_worst] = useState('');
  const [symmetry_worst, setSymmetry_worst] = useState('');
  const [fractal_dimension_worst, setFractal_dimension_worst] = useState('');


  //store data in local storage
  const storeData = async data => {
    try {
      //marge data with current data
      const currentData = await AsyncStorage.getItem('BreastCancerResults');
      const newData = currentData ? JSON.parse(currentData) : [];
      newData.push(data);
      await AsyncStorage.setItem('BreastCancerResults', JSON.stringify(newData));
    } catch (error) {
      console.log(error);
    }
  };

  const predictResult = () => {
    setLoading(true);
    if (
      name === '' ||
      radius_mean === '' ||
      texture_mean === '' ||
      perimeter_mean === '' ||
      area_mean === '' ||
      smoothness_mean === '' ||
      compactness_mean === '' ||
      concavity_mean === '' ||
      concave_points_mean === '' ||
      symmetry_mean === '' ||
      fractal_dimension_mean === '' ||
      radius_se === '' ||
      texture_se === '' ||
      perimeter_se === '' ||
      area_se === '' ||
      smoothness_se === '' ||
      compactness_se === '' ||
      concavity_se === '' ||
      concave_points_se === '' ||
      symmetry_se === '' ||
      fractal_dimension_se === '' ||
      radius_worst === '' ||
      texture_worst === '' ||
      perimeter_worst === '' ||
      area_worst === '' ||
      smoothness_worst === '' ||
      compactness_worst === '' ||
      concavity_worst === '' ||
      concave_points_worst === '' ||
      symmetry_worst === '' ||
      fractal_dimension_worst === ''
    ) {
      setLoading(false);
      Alert.alert(
        'Warning',
        'Please fill all the fields!',
        [
          {
            text: 'Ok',
            style: 'default',
          },
        ],
        {
          cancelable: true,
        },
      );
    } else {
      let formData = new FormData();
      formData.append('radius_mean', radius_mean);
      formData.append('texture_mean', texture_mean);
      formData.append('perimeter_mean', perimeter_mean);
      formData.append('area_mean', area_mean);
      formData.append('smoothness_mean', smoothness_mean);
      formData.append('compactness_mean', compactness_mean);
      formData.append('concavity_mean', concavity_mean);
      formData.append('concave_points_mean', concave_points_mean);
      formData.append('symmetry_mean', symmetry_mean);
      formData.append('fractal_dimension_mean', fractal_dimension_mean);
      formData.append('radius_se', radius_se);
      formData.append('texture_se', texture_se);
      formData.append('perimeter_se', perimeter_se);
      formData.append('area_se', area_se);
      formData.append('smoothness_se', smoothness_se);
      formData.append('compactness_se', compactness_se);
      formData.append('concavity_se', concavity_se);
      formData.append('concave_points_se', concave_points_se);
      formData.append('symmetry_se', symmetry_se);
      formData.append('fractal_dimension_se', fractal_dimension_se);
      formData.append('radius_worst', radius_worst);
      formData.append('texture_worst', texture_worst);
      formData.append('perimeter_worst', perimeter_worst);
      formData.append('area_worst', area_worst);
      formData.append('smoothness_worst', smoothness_worst);
      formData.append('compactness_worst', compactness_worst);
      formData.append('concavity_worst', concavity_worst);
      formData.append('concave_points_worst', concave_points_worst);
      formData.append('symmetry_worst', symmetry_worst);
      formData.append('fractal_dimension_worst', fractal_dimension_worst);


      fetch('https://eml-breast-cancer-api.herokuapp.com/result', {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(res => {
          //current date and time
          let date = new Date().toLocaleString();

          // send data to local storage

          const data = {
            name: name,
            radius_mean: radius_mean,
            texture_mean: texture_mean,
            perimeter_mean: perimeter_mean,
            area_mean: area_mean,
            smoothness_mean: smoothness_mean,
            compactness_mean: compactness_mean,
            concavity_mean: concavity_mean,
            concave_points_mean: concave_points_mean,
            symmetry_mean: symmetry_mean,
            fractal_dimension_mean: fractal_dimension_mean,
            radius_se: radius_se,
            texture_se: texture_se,
            perimeter_se: perimeter_se,
            area_se: area_se,
            smoothness_se: smoothness_se,
            compactness_se: compactness_se,
            concavity_se: concavity_se,
            concave_points_se: concave_points_se,
            symmetry_se: symmetry_se,
            fractal_dimension_se: fractal_dimension_se,
            radius_worst: radius_worst,
            texture_worst: texture_worst,
            perimeter_worst: perimeter_worst,
            area_worst: area_worst,
            smoothness_worst: smoothness_worst,
            compactness_worst: compactness_worst,
            concavity_worst: concavity_worst,
            concave_points_worst: concave_points_worst,
            symmetry_worst: symmetry_worst,
            fractal_dimension_worst: fractal_dimension_worst,
            result: res.prediction,
            date: date,
          };

          storeData(data);

          setRadius_mean('');
          setTexture_mean('');
          setPerimeter_mean('');
          setArea_mean('');
          setSmoothness_mean('');
          setCompactness_mean('');
          setConcavity_mean('');
          setConcave_points_mean('');
          setSymmetry_mean('');
          setFractal_dimension_mean('');
          setRadius_se('');
          setTexture_se('');
          setPerimeter_se('');
          setArea_se('');
          setSmoothness_se('');
          setCompactness_se('');
          setConcavity_se('');
          setConcave_points_se('');
          setSymmetry_se('');
          setFractal_dimension_se('');
          setRadius_worst('');
          setTexture_worst('');
          setPerimeter_worst('');
          setArea_worst('');
          setSmoothness_worst('');
          setCompactness_worst('');
          setConcavity_worst('');
          setConcave_points_worst('');
          setSymmetry_worst('');
          setFractal_dimension_worst('');
          setLoading(false);
          if (res.prediction === '1') {
            Alert.alert(
              name,
              'Please consult a doctor immediately!\nYou have benign breast cancer!',
              [
                {
                  text: 'Ok',
                  style: 'default',
                },
              ],
              {
                cancelable: true,
              },
            );
          } else {
            Alert.alert(
              name,
              'Please consult a doctor immediately!\nYou have malignant breast cancer!',
              [
                {
                  text: 'Ok',
                  style: 'default',
                },
              ],
              {
                cancelable: true,
              },
            );
          }
            setName('');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <LinearGradient colors={['#0072ff', '#00c6ff']} style={styles.container}>
      <ScrollView style={styles.formView}>

        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Radius mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your radius mean"
          value={radius_mean}
          onChangeText={text => setRadius_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Texture mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your texture mean"
          value={texture_mean}
          onChangeText={text => setTexture_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Perimeter mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your perimeter mean"
          value={perimeter_mean}
          onChangeText={text => setPerimeter_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Area mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your area mean"
          value={area_mean}
          onChangeText={text => setArea_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Smoothness mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your smoothness mean"
          value={smoothness_mean}
          onChangeText={text => setSmoothness_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Compactness mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your compactness mean"
          value={compactness_mean}
          onChangeText={text => setCompactness_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Concavity mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your concavity mean"
          value={concavity_mean}
          onChangeText={text => setConcavity_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Concave points mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your concave points mean"
          value={concave_points_mean}
          onChangeText={text => setConcave_points_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Symmetry mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your symmetry mean"
          value={symmetry_mean}
          onChangeText={text => setSymmetry_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Fractal dimension mean</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your fractal dimension mean"
          value={fractal_dimension_mean}
          onChangeText={text => setFractal_dimension_mean(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Radius se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your radius se"
          value={radius_se}
          onChangeText={text => setRadius_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Texture se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your texture se"
          value={texture_se}
          onChangeText={text => setTexture_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Perimeter se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your perimeter se"
          value={perimeter_se}
          onChangeText={text => setPerimeter_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Area se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your area se"
          value={area_se}
          onChangeText={text => setArea_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Smoothness se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your smoothness se"
          value={smoothness_se}
          onChangeText={text => setSmoothness_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Compactness se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your compactness se"
          value={compactness_se}
          onChangeText={text => setCompactness_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Concavity se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your concavity se"
          value={concavity_se}
          onChangeText={text => setConcavity_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Concave points se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your concave points se"
          value={concave_points_se}
          onChangeText={text => setConcave_points_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Symmetry se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your symmetry se"
          value={symmetry_se}
          onChangeText={text => setSymmetry_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Fractal dimension se</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your fractal dimension se"
          value={fractal_dimension_se}
          onChangeText={text => setFractal_dimension_se(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Radius worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your radius worst"
          value={radius_worst}
          onChangeText={text => setRadius_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Texture worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your texture worst"
          value={texture_worst}
          onChangeText={text => setTexture_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Perimeter worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your perimeter worst"
          value={perimeter_worst}
          onChangeText={text => setPerimeter_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Area worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your area worst"
          value={area_worst}
          onChangeText={text => setArea_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Smoothness worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your smoothness worst"
          value={smoothness_worst}
          onChangeText={text => setSmoothness_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Compactness worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your compactness worst"
          value={compactness_worst}
          onChangeText={text => setCompactness_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Concavity worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your concavity worst"
          value={concavity_worst}
          onChangeText={text => setConcavity_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Concave points worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your concave points worst"
          value={concave_points_worst}
          onChangeText={text => setConcave_points_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Symmetry worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your symmetry worst"
          value={symmetry_worst}
          onChangeText={text => setSymmetry_worst(text)}
          placeholderTextColor="black"
        />
        <Text style={styles.inputTitle}>Fractal dimension worst</Text>
        <TextInput
          style={styles.inputView}
          placeholder="Enter your fractal dimension worst"
          value={fractal_dimension_worst}
          onChangeText={text => setFractal_dimension_worst(text)}
          placeholderTextColor="black"
        />

        {loading ? (
          <Modal animationType="fade" transparent={true} visible={loading}>
            <ActivityIndicator size="large" color="tomato" />
          </Modal>
        ) : (
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => predictResult()}>
            <Text style={styles.btnText}>Predict</Text>
          </TouchableOpacity>
        )}
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
    color: '#fff',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputTitle: {
    color: '#000',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  inputView: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    color: 'white',
    fontSize: 20,
  },
  btnView: {
    height: 40,
    width: '100%',
    borderRadius: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
      marginBottom: 20,
  },
  btnText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PredictScreen;