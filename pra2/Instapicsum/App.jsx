import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import styles from "./common/GlobalStyles";
import SuggestFollow from "./components/SuggestFollow";
import ListStories from "./components/ListStories";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SuggestFollow />
      <ListStories/>
    </ScrollView>
  );
}
