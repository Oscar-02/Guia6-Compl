import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Appearance } from "react-native";

const reservations = useState([]);

class Reservations {
    constructor(name, date, people, smoker) {
        this.name = name;
        this.date = date;
        this.people = people;
        this.smoker = smoker;
    }
}

export { Reservations, reservations}