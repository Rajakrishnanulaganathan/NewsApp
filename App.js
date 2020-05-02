/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet, 
  View,
  Text,
  
} from 'react-native';

import TabScreens from './src/TabScreen'



export default class App extends React.Component {
  render(){
    return(
      <TabScreens/>
    )
  }
}
        

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
    

  }
});


