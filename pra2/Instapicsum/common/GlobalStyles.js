import { StyleSheet } from "react-native";

const blue = "#58a";
const red = "#d34";
const gray = "#333";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6200ea",
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 25,
    marginBottom: 10,
    elevation: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerAvatar: {
    marginHorizontal: 10,
    textAlign: "center",
  },
  textAvatar: {
    textAlign: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title2: {
    fontSize: 25,
    padding: 10,
  },
  listSuggest: {
    flex: 1,
    flexDirection: "row",
    height: 20,
  },
  photoStory: {
    width: "auto",
    height: 300,
  },
  story: {
    marginVertical: 10,
  },
  storyFigcaption: {
    fontSize: 10,
    paddingHorizontal: 20,
    paddingVertical: 3,
    color: blue,
  },
  storyComments: {
    paddingHorizontal: 30,
    paddingVertical: 3,
  },
  authorComment:{
    color: blue,
    fontSize: 15,


  }
});
export default styles;
