import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";

export default function ContactScreen() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Header/>
      <Text>Contact Page</Text>
    </View>
  );
}