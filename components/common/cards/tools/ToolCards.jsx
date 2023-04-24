import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import styles from "./toolcards.style"

const Card = ({ item }) => {

  const handleBuy = () => {
    Alert.alert(item.name+" bought");
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.itemDetails}>
          <Image source={item.image} style={styles.itemImage} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>₹{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
