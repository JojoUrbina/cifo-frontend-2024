import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

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
    paddingTop: 30,
    paddingBottom: 15,
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
});
export default styles;
