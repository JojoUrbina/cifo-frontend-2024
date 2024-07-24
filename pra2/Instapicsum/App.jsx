import { ScrollView } from "react-native";
import Header from "./src/components/Header";
import ListStories from "./src/components/ListStories";
import SuggestFollow from "./src/components/SuggestFollow";

import styles from "./common/GlobalStyles";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SuggestFollow />
      <ListStories />
    </ScrollView>
  );
}
