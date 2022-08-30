/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const UserResult = props => {
    const { item, key, predictedResults } = props.route.params;

    //remove item from local storage
    const deleteItem = async () => {
        //confirm delete
        Alert.alert(
            'Delete',
            'Do you want to delete this result?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        //filter data
                        const newData = predictedResults.filter((items) => predictedResults.indexOf(items) !== key);
                        try {
                            AsyncStorage.removeItem('BreastCancerResults');
                            if (newData.length > 0) {
                                AsyncStorage.setItem('BreastCancerResults', JSON.stringify(newData));
                            }
                            props.navigation.navigate('BreastCancerPredictedResults');
                        } catch (error) {
                            console.log(error);
                        }
                    },
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <LinearGradient colors={['#0072ff', '#00c6ff']} style={styles.container}>
            <ScrollView style={styles.resultView}>
                <Text style={styles.patientName}>Predicted Result of Breast Cancer</Text>
                <Text style={styles.date}>{item.date}</Text>
                <View style={styles.br} />

                {/* Crerate table */}
                <View style={styles.table}>
                    <View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Name</Text>
                            <Text style={styles.tableRowValue}>{item.name}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Radius mean</Text>
                            <Text style={styles.tableRowValue}>{item.radius_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Texture mean</Text>
                            <Text style={styles.tableRowValue}>{item.texture_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Perimeter mean</Text>
                            <Text style={styles.tableRowValue}>{item.perimeter_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Area mean</Text>
                            <Text style={styles.tableRowValue}>{item.area_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Smoothness mean</Text>
                            <Text style={styles.tableRowValue}>{item.smoothness_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Compactness mean</Text>
                            <Text style={styles.tableRowValue}>{item.compactness_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Concavity mean</Text>
                            <Text style={styles.tableRowValue}>{item.concavity_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Concave points mean</Text>
                            <Text style={styles.tableRowValue}>{item.concave_points_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Symmetry mean</Text>
                            <Text style={styles.tableRowValue}>{item.symmetry_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Fractal dimension mean</Text>
                            <Text style={styles.tableRowValue}>{item.fractal_dimension_mean}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Radius se</Text>
                            <Text style={styles.tableRowValue}>{item.radius_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Texture se</Text>
                            <Text style={styles.tableRowValue}>{item.texture_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Perimeter se</Text>
                            <Text style={styles.tableRowValue}>{item.perimeter_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Area se</Text>
                            <Text style={styles.tableRowValue}>{item.area_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Smoothness se</Text>
                            <Text style={styles.tableRowValue}>{item.smoothness_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Compactness se</Text>
                            <Text style={styles.tableRowValue}>{item.compactness_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Concavity se</Text>
                            <Text style={styles.tableRowValue}>{item.concavity_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Concave points se</Text>
                            <Text style={styles.tableRowValue}>{item.concave_points_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Symmetry se</Text>
                            <Text style={styles.tableRowValue}>{item.symmetry_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Fractal dimension se</Text>
                            <Text style={styles.tableRowValue}>{item.fractal_dimension_se}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Radius worst</Text>
                            <Text style={styles.tableRowValue}>{item.radius_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Texture worst</Text>
                            <Text style={styles.tableRowValue}>{item.texture_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Perimeter worst</Text>
                            <Text style={styles.tableRowValue}>{item.perimeter_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Area worst</Text>
                            <Text style={styles.tableRowValue}>{item.area_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Smoothness worst</Text>
                            <Text style={styles.tableRowValue}>{item.smoothness_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Compactness worst</Text>
                            <Text style={styles.tableRowValue}>{item.compactness_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Concavity worst</Text>
                            <Text style={styles.tableRowValue}>{item.concavity_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Concave points worst</Text>
                            <Text style={styles.tableRowValue}>{item.concave_points_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Symmetry worst</Text>
                            <Text style={styles.tableRowValue}>{item.symmetry_worst}</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableRowTitle}>Fractal dimension worst</Text>
                            <Text style={styles.tableRowValue}>{item.fractal_dimension_worst}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.result}>{item.result == '0' ? `${item.name} please consult a doctor immediately!\nYou have malignant breast cancer!` : `${item.name} please consult a doctor immediately!\nYou have benign breast cancer!`}</Text>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem()}>
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.backBtn}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    resultView: {
        marginTop: 15,
        marginHorizontal: 10,
    },
    patientName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    date: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    br: {
        borderBottomWidth: 0.8,
        borderBottomColor: 'black',
        marginTop: 7,
        marginBottom: 20,
    },
    bodyText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
    },
    tableText: {
        fontSize: 18,
        color: '#fff',
        padding: 8,
    },
    result: {
        fontSize: 20,
        color: '#000',
        marginTop: 10,
        textAlign: 'center',
    },
    deleteButton: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        width: '100%',
        marginBottom: 2,
    },
    deleteText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'red',
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    table: {
        flexDirection: 'row',
    },
    tableRow: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
    },
    tableRowTitle: {
        fontSize: 18,
        color: '#fff',
        padding: 8,
        width: '50%',
        paddingLeft: 10,
    },
    tableRowValue: {
        fontSize: 18,
        color: '#fff',
        padding: 8,
        width: '50%',
        borderLeftWidth: 1,
        borderLeftColor: '#000',
        paddingLeft: 10,
    },
    backBtn: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
    },
});

export default UserResult;
