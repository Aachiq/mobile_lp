import React from "react";
import { View } from "react-native";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

export default function AppLayout({ children, navigation }) {
  return (
    <View style={{ flex: 1 }}>

      {/* TOP */}
      <Header />

      {/* CONTENT: secret is here "flex: 1" */}
      <View style={{ flex: 1 }}>
        {children}
      </View>

      {/* BOTTOM */}
      <BottomNavigation navigation={navigation} />

    </View>
  );
}