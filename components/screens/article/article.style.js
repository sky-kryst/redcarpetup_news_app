import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export default StyleSheet.create({
  article: {
    flex: 1,
    paddingVertical: "4%",
    paddingHorizontal: "4%",
  },
  title: { fontWeight: "bold", fontSize: 25, marginTop: "4%", color: "black" },
  image: {
    height: height * 0.23,
    borderRadius: 3,
  },
  content: {
    fontSize: 20,
    marginTop: "4%",
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: 9,
    width: "96%",
    height: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "3%",
    borderColor: "darkgrey",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    textShadowColor: "black",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
  },
});
