import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import styles from './model.style.js';

const Model = () => {
    const [n, setN] = useState('');
    const [p, setP] = useState('');
    const [k, setK] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [ph, setPh] = useState('');
    const [rainfall, setRainfall] = useState('');
    const [result, setResult] = useState('');

    const predictCrop = async () => {
        try {
            console.log("Working!");
            const response = await axios.post('http://127.0.0.1:5000/predict_model', {
                n: n,
                p: p,
                k: k,
                temperature: temperature,
                humidity: humidity,
                ph: ph,
                rainfall: rainfall
            });
            setResult(response.data.crop);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Crop Prediction</Text>
                <TextInput
                    style={styles.input}
                    placeholder="N"
                    onChangeText={(value) => setN(value)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="P"
                    onChangeText={(value) => setP(value)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="K"
                    onChangeText={(value) => setK(value)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Temperature"
                    onChangeText={(value) => setTemperature(value)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Humidity"
                    onChangeText={(value) => setHumidity(value)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="pH"
                    onChangeText={(value) => setPh(value)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Rainfall"
                    onChangeText={(value) => setRainfall(value)}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button} onPress={predictCrop}>
                    <Text style={styles.buttonText}>Predict</Text>
                </TouchableOpacity>
                <Text style={styles.result}>Result: {result}</Text>
            </View>
        </ScrollView>
    );
}

export default Model;