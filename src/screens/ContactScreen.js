import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

export default function ContactScreen({navigation}) {
  return (
    <View style={{ flex:1 }}>
      <Header/>
      <Text>Contact Page</Text>

      <BottomNavigation navigation={navigation} />
      
    </View>
  );
}