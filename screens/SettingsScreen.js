import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Layout from '../constants/Layout'
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
   
    return(
      <View style={styles.container}>
        <Image
        source={require('../assets/images/BCmap.png')}
        style={styles.map}
        />
        <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          position: "absolute",
          top: 180
          }}
        />
        <View
        style={{
          width: 70,
          height: 70,
          backgroundColor: 'red',
          position: "absolute",
          left: 170,
          top: 150
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#DCEDC8',
    justifyContent: 'center',
    alignSelf: 'stretch',    
  },
  map: {    
    width: Layout.window.width,     
  }
});