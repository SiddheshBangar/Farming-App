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
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: 10,
    },
    itemDescription: {
      fontFamily: FONT.regular,
      fontSize: SIZES.small,
      marginBottom:10,
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
    buyButton: {
      backgroundColor: '#FFC107',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginLeft: 280,
      marginRight:0,
    },
    buyButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default styles;