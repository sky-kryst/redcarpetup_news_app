import React from "react";
import { Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./tile.style";
import { useNavigation } from "@react-navigation/native";

const Tile = ({ source, title, id }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.tile}
      onPress={() => navigate("Summary", { id })}
    >
      <ImageBackground source={source} style={styles.image}>
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Tile;
