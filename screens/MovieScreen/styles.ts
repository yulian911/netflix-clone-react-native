import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  match: {
    backgroundColor: "black",
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: { color: "#757575", marginRight: 5 },
  ageContainer: {
    backgroundColor: "#e6e229",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 3,
  },
  age: { color: "black", fontWeight: "bold" },
  playButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
