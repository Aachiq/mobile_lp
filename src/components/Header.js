import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={{backgroundColor: "blue", padding: 26, justifyContent: "space-between", 
        flexDirection: "row", // alwyas define flexDirection to apply flex 4
        // marginTop: 15 // this marin make header move from top to not be attached with status
    }}
    >
      <Text style={{color: "white", fontSize: 22, fontWeight: "bold"}}>NewsApp</Text>
      <Text style={{color: "white", fontSize: 22, fontWeight: "bold"}}>NewsApp</Text>
    </View>
  );
}