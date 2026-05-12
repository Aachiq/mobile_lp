import React from "react";
import { View, Text, Button } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";

export default function AboutScreen({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <Header/>

            {/* Here fix issue of layout without create Layout COmp is by adding other "flex:1" for inner content */}
            <View style={{flex: 1, backgroundColor: 'beige'}}>
                <Text>About Page</Text>
                <Button title="Go Back" onPress={() => navigation.goBack()}/>
            </View>

            <BottomNavigation navigation={navigation} />
        </View>
    );
}