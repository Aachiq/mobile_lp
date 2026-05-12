import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BottomNavigation() {

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 15}}>
      <TouchableOpacity>
        <Text style={ {fontSize: 24, color: "gray"}}>🏠</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={ {fontSize: 24, color: "gray"}}>ℹ️</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={ {fontSize: 24, color: "gray"}}>📞</Text>
      </TouchableOpacity>

    </View>
  );
}
