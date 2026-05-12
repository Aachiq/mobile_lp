import { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function WelcomePage({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000)
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0C0404"}}>
            <Image
                source={require('../../assets/icon.png')}
                style={{ width: 100, height: 100}}
            />
            <Text style={{color: "white", fontSize: 22, fontWeight: 600, marginTop: 8}}>Splash BrandName</Text>
        </View>
    )
}

