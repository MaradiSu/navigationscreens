import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

const HomeScreen=({navigation})=>
{
    return(<View style={Styles.container}>
        <Text style={Styles.text}>Home Screen</Text>

        <Button title="About Us" color="#f984ff" onPress={()=>navigation.navigate('AboutUs')}/>
    </View>);
    
}
const Styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
}
,
    text:{
        color:"white",
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center",
        backgroundColor:"#000000a0"
    }
});
export default HomeScreen;