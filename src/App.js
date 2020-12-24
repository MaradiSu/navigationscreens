// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from './screens/HomeScreen';
//import AboutUs from './screens/AboutUs';
import HomeScreens from './navigationscreens/HomeScreen';
import AboutUs from './navigationscreens/AboutUs';

const Stack = createStackNavigator();

const App=()=> {
  return ( <>
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreens}/>
       <Stack.Screen name="AboutUs" component={AboutUs}/>
     </Stack.Navigator>
   </NavigationContainer>
    </>
  );
}

export default App;