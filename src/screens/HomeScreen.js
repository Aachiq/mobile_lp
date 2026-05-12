import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import newsData from "../data/news";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Staging App</Text>

      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />

      <BottomNavigation navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});