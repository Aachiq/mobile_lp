import React from "react";
import { Text } from "react-native";
import AppLayout from "../components/AppLayout";

export default function ContactScreen({ navigation }) {
  return (
    <AppLayout navigation={navigation}>
      <Text>Contact Page</Text>
    </AppLayout>
  );
}