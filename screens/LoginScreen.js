import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const PLAYGRAM_LOGO =
'https://static.free-logo-design.net/uploads/2020/07/free-playground-logo-design.jpg'

const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{ uri: PLAYGRAM_LOGO, height: 100, width:100 }} />
            <LoginForm  navigation={navigation}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
})

export default LoginScreen