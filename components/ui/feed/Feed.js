import React from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import Tile from "../tile/Tile";
import useFeed from "../../../hooks/useFeed";
import styles from "./feed.style";

const Feed = ({ category }) => {
  const { data, loading, error } = useFeed({ category });

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="darkgrey" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.screen}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (data.length < 1) {
    return (
      <View style={styles.screen}>
        <Text>Nothing to see here. Try again later!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item: { urlToImage, title, id } }) => (
        <Tile source={{ uri: urlToImage }} title={title} id={id} />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

export default Feed;
