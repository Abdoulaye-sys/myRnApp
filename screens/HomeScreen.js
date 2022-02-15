import { StyleSheet} from 'react-native';
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/home/Header';
import  Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import {POSTS}  from '../data/posts';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
         <Post post={post} key={index} /> 

        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#497909',
        flex: 1,
    },
})



export default HomeScreen;
