import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BottomNavigation({ navigation }) {

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 15 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 24, color: "gray" }}>🏠</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")} >
        <Text style={{ fontSize: 24, color: "gray" }}>ℹ️</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
        <Text style={{ fontSize: 24, color: "gray" }}>📞</Text>
      </TouchableOpacity>

    </View>
  );
}
