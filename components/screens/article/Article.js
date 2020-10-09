import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { useStore } from "../../../hooks-store/store";
import styles from "./article.style";
import * as WebBrowser from "expo-web-browser";

const Article = ({
  route: {
    params: { id },
  },
}) => {
  const { feed } = useStore()[0];

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(feed.filter((e) => e.id === id)[0]);
  }, [feed]);

  if (!data) {
    return (
      <View>
        <ActivityIndicator size="large" color="darkgrey" />
      </View>
    );
  }

  return (
    <View style={styles.article}>
      <Image
        style={styles.image}
        source={{
          uri: data.urlToImage,
        }}
      />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.content}>
        {data.content && data.content.split(" [+")[0]}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync(data.url)}
      >
        <Text style={styles.buttonText}>Read More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Article;
