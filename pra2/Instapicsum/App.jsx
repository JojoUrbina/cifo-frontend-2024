import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import styles from "./common/GlobalStyles";
import SuggestFollow from "./components/SuggestFollow";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SuggestFollow />
    </View>
  );
}
