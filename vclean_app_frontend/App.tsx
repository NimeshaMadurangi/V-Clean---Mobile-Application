import React from 'react';
import {  StyleSheet, ImageBackground, View, Image } from "react-native";
import 'react-native-gesture-handler';
import AppNavigation from './src/navigations/AppNavigation';
// import Carousel from 'react-native-snap-carousel';
import DustbinAll from './src/screens/DustbinAll';



function App(): React.JSX.Element {

//   return (
// <View style={sty.containar}>
//   {/* <Carousel/> */}
  
//     <AppNavigation/>
// </View>

//   );

  return (

    <DustbinAll navigation={undefined}/>

  );
  }
  const  sty = StyleSheet.create({
      containar:{
          flex:1,
          backgroundColor:'white',
          width:'100%',
          height:'100%',
      }
  })

export default App;
