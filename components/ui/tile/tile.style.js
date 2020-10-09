import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export default StyleSheet.create({
  tile: {
    marginTop: "3.2%",
    width,
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: height * 0.24,
    overflow: "hidden",
    borderRadius: 9,
    justifyContent: "flex-end",
    paddingHorizontal: 2,
    paddingVertical: 8,
  },
  text: {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 5,
    borderRadius: 3,
    alignSelf: "center",
    width: "95%",
  },
});
