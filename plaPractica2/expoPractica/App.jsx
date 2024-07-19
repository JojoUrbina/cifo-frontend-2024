import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello world !!!</Text>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/200/200" }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert("hola perri");
          }}
        >
          <Text style={styles.buttonText}>Tocame</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "white" },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: {
    backgroundColor: "blue",
    padding: 7,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default App;
