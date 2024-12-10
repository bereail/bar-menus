import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Platform } from "react-native";
import HeaderInfo from "../Components/HeaderInfo";
import MenuDataComidas from "./Menu/MenuData/MenuDataComidas";
import MenuItem from "./Menu/MenuItem/MenuItem";

const ParaComer = () => {
  const { width, height } = Dimensions.get("window");
  const isWeb = Platform.OS === "web";
  const webScaleFactor = isWeb ? 1.2 : 1;

  const dynamicFontSize = Math.min(Math.max(width * 0.05 * webScaleFactor, 16), 45);
  const dynamicMargin = Math.min(Math.max(height * 0.05 * webScaleFactor, 25), 60); // Aumentado

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollViewContent,
          {
            paddingHorizontal: Math.min(width * 0.05 * webScaleFactor, 60),
          },
        ]}
      >
        <HeaderInfo style={{ marginBottom: dynamicMargin }} />

        {MenuDataComidas.map((category) => (
          <View key={category.category} style={{ marginBottom: dynamicMargin }}>
            <Text style={[styles.title, { fontSize: dynamicFontSize }]}>
              {category.category}
            </Text>
            {category.items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4a5b0",
  },
  scrollView: {
    flexGrow: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  title: {
    color: "#4A4A4A",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ParaComer;
