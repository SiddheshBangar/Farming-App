import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

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
      const response = await axios.post('http://127.0.0.1:5000', {
        n,
        p,
        k,
        temperature,
        humidity,
        ph,
        rainfall,
      });
      setResult(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Model;