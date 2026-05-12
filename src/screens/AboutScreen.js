import React from "react";
import { View, Text, Button } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";

export default function AboutScreen({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <Header/>
            <Text>About Page</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />

            <BottomNavigation navigation={navigation} />
            
        </View>
    );
}