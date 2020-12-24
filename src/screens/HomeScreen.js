import * as React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image, Button,Alert } from 'react-native';

import background from '../../asset/birthday-border.jpg'

// components
// JSX
//Props

const myname = "Hometute";

const HomeScreen=({navigation})=> {
    return (
        <View style={styles.container}>
    <ImageBackground source={background} style={styles.image}>
      <Text style={styles.text}>Best Wishes { myname }</Text>
    </ImageBackground>
    <Button
        title="about us screen"
        color="#f194ff"
        onPress={() => navigation.navigate('AboutUs')}
      />
  </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      margin:10,
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });
  

  export default HomeScreen;
  