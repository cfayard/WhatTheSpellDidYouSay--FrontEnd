import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from "lottie-react-native";


 
    export default class Bee extends React.Component {



  render() {
    return (
  <View title='lottie' style={{width: 300, height: 300, alignSelf: 'center'}}>
    <Text></Text>
          <LottieView
            source={require("../assets/teacher.json")}
            loop
            autoPlay
  />
  </View>

    );
  }
}