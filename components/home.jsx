import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { darkStyle, lightStyle } from "./styles";

export default function App({ navigation }) {
  return (
    <SafeAreaView style={[ darkStyle.container, { flex: 1}]}>
      <View style={{ marginLeft: 30, marginTop: 15 , position: "relative" }}>
        <TouchableHighlight
          style={styles.addButton}
          onPress={() => navigation.navigate("Agregar Reserva")}
        >
          <Text style={[darkStyle.text, { fontSize: 36 }]}>+</Text>
        </TouchableHighlight>
        <Text style={[darkStyle.text, styles.textHeader]}>Inicio</Text>
        <Text style={[darkStyle.text, styles.textSubHeader]}>
          Restaurante "El Gran Malo"
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={[darkStyle.text, { fontSize: 36 }]}>
          Tus reservaciones
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 48,
    fontWeight: "bold",
    width: "50%",
  },
  textSubHeader: { fontSize: 20 },
  content: {
    marginTop: 30,
    alignItems: "center",
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#21e6ed",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 30,
    top: 0,
  },
});
