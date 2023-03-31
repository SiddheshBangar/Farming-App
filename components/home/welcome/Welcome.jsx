import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Hello Sanika</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Image source={icons.search} style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;