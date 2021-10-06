import React from "react";
import { Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import movie from "../../assets/data/movie";

const MovieDetailsScreen = () => {
  const firstEpisode = movie.seasons.items[0].episodes.items[0];
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: firstEpisode.poster,
        }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <View>
        <Text style={styles.match}>98% match</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>12+</Text>
        </View>
        <Text style={styles.year}>{movie.numberOfSeasons}</Text>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
