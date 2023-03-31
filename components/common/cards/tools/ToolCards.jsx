import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from "./toolcards.style"

const Card = ({ item }) => {

return (
<View style={styles.card}>
<View style={styles.cardContent}>
<View style={styles.itemDetails}>
<Image source={item.image} style={styles.itemImage} />
<Text style={styles.itemName}>{item.name}</Text>
<Text style={styles.itemDescription}>{item.description}</Text>
<Text style={styles.itemPrice}>${item.price}</Text>
</View>
</View>
</View>
);
};

export default Card;