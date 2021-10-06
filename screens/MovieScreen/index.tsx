import React from "react";
import { Image, Pressable } from "react-native";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
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
      <View style={{ padding: 12, backgroundColor: "black" }}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ backgroundColor: "black", flexDirection: "row" }}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
          <Text style={styles.year}>{movie.numberOfSeasons} Seassons</Text>
          <MaterialIcons name="hd" size={24} color="white" />
        </View>
        {/* play button  */}
        <Pressable
          onPress={() => {
            console.warn("Plage");
          }}
          style={styles.playButton}
        >
          <Text style={styles.playButtonText}>
            <Entypo name="controller-play" size={16} color="black" /> Play
          </Text>
        </Pressable>
        {/* download  button  */}
        <Pressable
          onPress={() => {
            console.warn("Download");
          }}
          style={styles.downloadButton}
        >
          <Text style={styles.downloadButtonText}>
            <AntDesign name="download" size={16} color="white" /> Download
          </Text>
        </Pressable>
        <Text style={{ color: "white", marginVertical: 10 }}>{movie.plot}</Text>
        <Text style={styles.year}>Cast:{movie.cast}</Text>
        <Text style={styles.year}>Creator:{movie.creator}</Text>
        <View style={{ flexDirection: "row", backgroundColor: "black" }}>
          <View
            style={{
              backgroundColor: "black",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <AntDesign name="plus" color="white" size={24} />
            <Text style={{ color: "darkgrey" }}>My List </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Feather name="thumbs-up" color="white" size={24} />
            <Text style={{ color: "darkgrey" }}>Rate </Text>
          </View>
          <View
            style={{
              backgroundColor: "black",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Ionicons name="share-social" color="white" size={24} />
            <Text style={{ color: "darkgrey", marginTop: 5 }}>Share </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
