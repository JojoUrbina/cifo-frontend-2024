import styles from "./common/GlobalStyles";
import Header from "./src/components/Header";
import ListStories from "./src/components/ListStories";
import SuggestFollow from "./src/components/SuggestFollow";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SuggestFollow />
      <ListStories />
    </ScrollView>
  );
}
