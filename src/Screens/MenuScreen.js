import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderInfo from "../Components/HeaderInfo";

const MenuScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const buttonWidth = Platform.OS === "web" ? width * 0.4 : width * 0.7;

  // Datos de los botones
  const menuItems = [
    { id: "1", name: "Para Comer", icon: "food", screen: "Comidas" },
    { id: "2", name: "Para Tomar", icon: "glass-cocktail", screen: "Bebidas" },
  ];

  // Renderizado de cada elemento
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth }]}
      onPress={() =>
        navigation.navigate("RositaComidas", { screen: item.screen })
      } // Navega a la pantalla correspondiente
    >
      <View style={styles.buttonContent}>
        <MaterialCommunityIcons name={item.icon} color="white" size={30} />
        <Text style={styles.buttonText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderInfo />

      {/* Title */}
      <Text style={styles.title}>Menú</Text>

      {/* Lista de botones */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false} // Oculta el indicador de scroll vertical
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4a5b0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    alignItems: "center", // Centra los botones horizontalmente
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default MenuScreen;
