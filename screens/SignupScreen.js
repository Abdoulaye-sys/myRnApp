import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const PLAYGRAM_LOGO =
'https://static.free-logo-design.net/uploads/2020/07/free-playground-logo-design.jpg'

const SignupSreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{ uri: PLAYGRAM_LOGO, height: 100, width:100 }} />
         </View>
         <SignupForm  navigation={navigation}/>
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


export default SignupSreen