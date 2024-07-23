import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "../common/GlobalStyles";

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Trivia App</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
