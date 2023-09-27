import { StatusBar } from "expo-status-bar";
import { React, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Appearance } from "react-native";

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { darkStyle, lightStyle } from "./components/styles";
import HomePage from "./components/home";
import AddReservation from "./components/addReservation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /* <SafeAreaView style={[styles.container, darkStyle.container]}>
      <View style={styles.content}>
        <HomePage />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView> */
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Agregar Reserva" component={AddReservation} />
        <Stack.Screen name="Inicio" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 25,
  },
});
