import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MenuItem = ({ name, price, description }) => (
  <>
    <View style={styles.item}>
      {/* Contenedor para el nombre y la descripción */}
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>

      {/* Precio alineado a la derecha y a la altura de la descripción */}
      <Text style={styles.itemPrice}>${price}</Text>
    </View>
    <View style={styles.separator} />
  </>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row", // Organiza en fila
    justifyContent: "space-between", // Espacia texto y precio
    alignItems: "flex-end", // Alinea el precio con la descripción
    paddingVertical: 8,
  },
  textContainer: {
    flex: 1, // Ocupa el espacio disponible para texto
    marginRight: 10, // Espaciado entre texto y precio
  },
  itemName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4, // Espacio entre nombre y descripción
  },
  itemDescription: {
    fontSize: 16,
    color: "black",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "right", // Alinea el precio a la derecha
  },
  separator: {
    borderBottomWidth: 1, // Línea delgada
    borderColor: "#ccc", // Color gris claro
    marginVertical: 8, // Separación arriba y abajo
    opacity: 0.5, // Hacerla más tenue
  },
});

export default MenuItem;
