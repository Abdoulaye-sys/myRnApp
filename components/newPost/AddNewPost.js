import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <FormikPostUploader navigation={navigation} />
    </View>
)

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack('')}>
        <Image
            source={{ 
                
            uri:'https://media.istockphoto.com/vectors/back-icon-vector-illustration-back-button-icon-vector-back-arrow-icon-vector-id953455676?k=20&m=953455676&s=170667a&w=0&h=IZAa6C_ceMI0gVFVqsytgpGmyV8DANEvB0Xf6Mx1wrg='}}
        style={{ width: 30, height: 30}} 
        />
    </TouchableOpacity>
    <Text style={styles.headerText}>Nouvelle publication</Text>
    <Text></Text>
</View> 

)


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        color: '#fff',
        fontWeight:'700',
        fontSize: 20,
        marginRight: 23,
    }
})

export default AddNewPost