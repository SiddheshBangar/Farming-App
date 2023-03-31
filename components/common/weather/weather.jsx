import React from 'react';
import { View, Text, Image } from 'react-native';

const WeatherCard = ({ weatherData, style }) => {
  const { temp, description, icon } = weatherData;

  // set background color based on the description of the weather
  let backgroundColor;
  if (description.includes('cloud')) {
    backgroundColor = 'lightgray';
  } else if (description.includes('sun')) {
    backgroundColor = 'yellow';
  } else if (description.includes('rain')) {
    backgroundColor = 'blue';
  } else {
    backgroundColor = 'white';
  }

  return (
    <View style={[{ alignItems: 'center', marginTop: 20, padding: 10, borderRadius: 10, backgroundColor }, style]}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
        {temp}&deg;C
      </Text>
      <Image
        source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }}
        style={{ width: 50, height: 50 }}
        resizeMode="contain"
        accessibilityLabel="Weather image"
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>{description}</Text>
    </View>
  );
};

export default WeatherCard;