import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <Text style={styles.parrafo}>
        Si puede hacer observar tres componentes significa que venezuela participara en la proxima copa del mundo.
      </Text>
        <Card style={styles.card}>
          <AssetExample porque={"Porque si"} />
          <AssetExample porque={"Porque somo muy buenos"} />
          <AssetExample porque={"Porque ahora damos miedo y pavor"}  />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0b0517',
    padding: 8,
  },
  parrafo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  card: {
    marginHorizontal: 24,
    backgroundColor: '#0b0517',
    padding: 24,
    elevation: 4, // Añadido para sombra en Android
  },
});
