import { StatusBar } from "expo-status-bar";
import { React, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DateTimePicker from "@react-native-community/datetimepicker";

import { darkStyle, lightStyle } from "./styles";
import {Reservations, reservations} from "./reservations";


const AddReservation = ({ navigation }) => {
  const dateNow = new Date();
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date(dateNow));
  const [people, setPeople] = useState(0);
  const [smoker, setSmoker] = useState(false);

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={[darkStyle.container, { flex: 1 }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            onPress={() => navigation.navigate("Inicio")}
            title="Cancelar"
          />
          <Button
            onPress={() => navigation.navigate("Inicio")}
            title="Guardar"
          />
        </View>
        <View style={{ marginLeft: 15, marginTop: 10, position: "relative" }}>
          <Text style={[darkStyle.text, styles.textHeader]}>
            Agregar Reserva
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.inputView}>
            <Text style={[darkStyle.text, styles.inputLabel]}>
              Nombre del cliente
            </Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputView}>
            <Text style={[darkStyle.text, styles.inputLabel]}>
              Fecha a reservar
            </Text>
            <DateTimePicker
              mode="date"
              display="calendar"
              minimumDate={new Date(date)}
              value={date}
              onChange={(e, selected) => {
                setDate(selected);
                console.log(selected);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={[darkStyle.text, styles.inputLabel]}>
              Hora de reserva
            </Text>
            <DateTimePicker
              mode="time"
              display="calendar"
              minimumDate={new Date(date)}
              value={date}
              onChange={(e, selected) => {
                setDate(selected);
                console.log(selected);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <View>
              <Text style={[darkStyle.text, styles.inputLabel]}>
                Personas en mesa
              </Text>
              <Text
                style={[darkStyle.text, styles.inputLabel, { color: "orange" }]}
              >
                (max. 6)
              </Text>
            </View>
            <TextInput
              style={[styles.input, { minWidth: 50 }]} value={people.toString()}
              keyboardType="numeric" onChange={(e) => setPeople(parseInt(e.target.value))}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={[darkStyle.text, styles.inputLabel]}>
              Seccion Cigarros
            </Text>
            <Switch style={{ marginLeft: 10 }}
              onValueChange={() => setSmoker(!smoker)}
              value={smoker}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonCancel: {},
  textHeader: {
    fontSize: 48,
    fontWeight: "bold",
  },
  textSubHeader: { fontSize: 20 },
  content: {
    marginTop: 45,
    marginLeft: 15,
    alignItems: "center",
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderColor: "#fff",
    minWidth: 200,
    color: "#fff",
    padding: 10,
  },
});

export default AddReservation;
