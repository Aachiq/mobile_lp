import React from "react";
import { View, Text } from "react-native";

export default function AboutScreen({navigtaion}) {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>About Page</Text>
             <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}