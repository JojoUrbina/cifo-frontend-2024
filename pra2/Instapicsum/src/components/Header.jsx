import styles from "../../common/GlobalStyles";
import { StatusBar } from "expo-status-bar";
import {Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Instapicsum</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
