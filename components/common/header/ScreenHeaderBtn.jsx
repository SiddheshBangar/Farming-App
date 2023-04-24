import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { images } from "../../../constants";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.HeaderText}>Hello Sanika!</Text>
      <Image source={ images.profile } style={styles.profileImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 6,
  },
  HeaderText: {
    fontSize: 20,
  },
});

export default Header;
