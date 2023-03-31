import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
    card: {
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small / 1.25,
      padding: SIZES.large,
      marginBottom: 10,
      ...SHADOWS.medium,
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    logoImage: {
      width: "70%",
      height: "70%",
    },
    itemName: {
      fontFamily: FONT.bold,
      fontSize: SIZES.medium,
      marginBottom: 5,
    },
    itemDescription: {
      fontFamily: FONT.regular,
      fontSize: SIZES.small,
      marginBottom: 5,
    },
    itemPrice: {
      fontFamily: FONT.medium,
      fontSize: SIZES.medium,
      fontWeight: 'bold',
    },
    itemImage: {
      width: 330,
      height: 150,
      marginRight: 10,
      marginBottom: 10,
      borderRadius: 10,
    },
  });

export default styles;