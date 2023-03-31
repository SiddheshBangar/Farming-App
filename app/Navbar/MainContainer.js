import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../home';
import ModelScreen from '../model';
import WeatherScreen from '../weather';

//Screen names
const homeName = "Home";
const modelName = "Predict";
const weatherName = "Weather"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === modelName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === weatherName) {
              iconName = focused ? 'cloudy-night' : 'cloudy-night-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#006400',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={modelName} component={ModelScreen} />
        <Tab.Screen name={weatherName} component={WeatherScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
