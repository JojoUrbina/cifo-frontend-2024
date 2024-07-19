import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample({porque}) {
  return (
    <View style={styles.container}>
      <Text style={styles.parrafo}>
       {porque}
      </Text>
      <Image style={styles.logo} source={require('../assets/image.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 24,
    padding: 24,
    shadowRadius: 10,
    shadowColor: "#c4fe5f",
    shadowOpacity: 1, // Para dar sombra en iOS
    elevation: 20, // Para dar sombra en Android
    backgroundColor: '#0b0517',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parrafo: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
