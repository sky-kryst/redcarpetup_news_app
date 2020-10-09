import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

const tens = Math.floor(height / 100);

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: `${tens % 2 === 0 ? tens + 0.1 : tens - 1.5}%`,
  },
});
