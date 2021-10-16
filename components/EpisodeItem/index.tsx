import React from "react";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import { Image } from "react-native";

interface EpisodeItemProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode } = props;
  //   console.log(episode);
  return (
    <View>
      <View>
        <Image style={styles.image} source={{ uri: episode.poster }} />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
