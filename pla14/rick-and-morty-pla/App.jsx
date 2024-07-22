import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./src/screens/ListScreen";
import DetailScreen from "./src/screens/DetailScreen";
import Colors from "./src/common/Colors";
import { Button, Text } from "react-native";

// Steps to add navigation:
// 1. See https://reactnative.dev/docs/navigation.
// 2. Execute command: npm install @react-navigation/native @react-navigation/native-stack
// 3. Execute command: npx expo install react-native-screens react-native-safe-area-context
// 4. Add NavigationContainer.
// 5. Add stack using createNativeStackNavigator hook.

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {/* TODO #1 
        /// Afegeix una altra Stack.Screen (abans de la que ja hi ha) pel component ListScreen, passant-li el títol dins de les opcions. */}
        {/* Añade otra Stack.Screen (antes de la que ya hay) por el componente ListScreen, pasándole el título dentro de las opciones. */}
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: "Rick & Morty" }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params?.name,
            headerBackTitle: "Custom Back",
            headerBackTitleStyle: { fontSize: 30 },
            color:"white"
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 22,

    // TODO #2
    // Fes que el text de la barra de navegació es mostri en negreta i de mida 22.
    //Haz que el texto de la barra de navegación se muestre en negrita y tamaño 22.
  },
  headerTitleAlign: "center",
};

export default App;
