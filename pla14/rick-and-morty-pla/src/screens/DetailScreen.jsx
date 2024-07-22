import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const [data, setData] = useState({});

  // Data -- Using real API.
  const api = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api}/${route.params.id}`);
      const data = await response.json();
      setData(data);
      // TODO #6
      // Afegeix el codi que manca en aquesta funció en aquest punt (Pista: 2 línies de sobres conegudes).
      //Agregue el código faltante en esta función en este punto (Track: 2 líneas de sobres conocidas)
    };

    fetchData();
  }, []);

  if (!data.name || !data.image || !data.episode) {
    return (
      <View style={styles.nodataContainer}>
        <Text style={styles.nodataText}>Datos no disponibles</Text>
      </View>
    );
  }

  return (
    // TODO #7
    // Afegeix els estils corresponents a cadascun dels quatre components del següent subarbre de components.
    //Agregue los estilos correspondientes a cada uno de los cuatro componentes del siguiente componente subterráneo.
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: data.image }}
        accessibilityLabel={data.name}
      />
      {/* TODO #8
      /// Afegeix el contingut que ha de mostrar aquest component Text. 
      Agregue el contenido para mostrar este componente de texto.*/}

      <Text style={styles.episodes}>{`${data.episode?.length} ${
        data.episode?.length === 1 ? "episode" : "episodes"
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width,
  },
  name: {
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
  },
  episodes: {
    fontSize: 22,
    fontWeight: "700",
    color: "#888",
  },
  nodataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.cell,
  },
  nodataText: { fontSize: 22 },
});

export default DetailScreen;
