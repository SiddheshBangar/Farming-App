import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, Icon, Input } from 'react-native-elements';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '629f024171956d9493f43b148de2e903';
  const [text, setText] = useState('');
  const [city, setCity] = useState('');

  const handleSearch = () => {
    setCity(text);
  };

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      try {
        const { data } = await axios.get(API_URL);
        const { main, weather } = data;
        const { temp } = main;
        const { description, icon } = weather[0];
        setWeatherData({ temp, description, icon });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBar}>
        <Input
          placeholder="Enter city name"
          leftIcon={<Icon name="search" size={24} color="#000" />}
          onChangeText={setText}
          value={text}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Button
          title="Get Weather"
          onPress={handleSearch}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
      {weatherData ? (
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.cardTitle}>{city}</Card.Title>
          <View style={styles.cardContent}>
            <Image
              source={{
                uri: `https://openweathermap.org/img/w/${weatherData.icon}.png`,
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTemp}>{weatherData.temp}°C</Text>
          </View>
          <Card.Divider />
          <Text style={styles.cardDescription}>{weatherData.description}</Text>
        </Card>
      ) : (
        <Text style={styles.noDataText}>
          Enter a city name to get weather information.
        </Text>
      )}
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 20,
  },
  searchBar: {
    backgroundColor: '#2E2E2E',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 20,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
  },
  input: {
    color: '#2E2E2E',
    fontSize: 18,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonTitle: {
    color: '#2E2E2E',
  },
  searchBarContainer: {
  backgroundColor: '#EFEFEF',
  borderRadius: 25,
  paddingHorizontal: 20,
  paddingVertical: 10,
  marginHorizontal: 20,
  marginBottom: 20,
  },
  searchBarInput: {
  fontSize: 16,
  color: '#2E2E2E',
  },
  card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  marginHorizontal: 20,
  marginBottom: 20,
  padding: 20,
  },
  cardTitle: {
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 10,
  },
  cardSubtitle: {
  fontSize: 20,
  marginBottom: 10,
  },
  cardImage: {
  width: 60,
  height: 60,
  marginRight: 10,
  },
  cardDescription: {
  fontSize: 20,
  color: '#2E2E2E',
  marginBottom: 5,
  },
  cardTemp: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 2,
  },
  cardTempIcon: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  cardTempText: {
    fontSize: 30,
    color: '#2E2E2E',
  },  
  }

export default Weather;