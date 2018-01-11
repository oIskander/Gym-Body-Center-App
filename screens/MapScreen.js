import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Layout from '../constants/Layout';
import { FontAwesome } from '@expo/vector-icons';
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
  constructor(props){
    super(props);
    this.state = {
      cardio: false,
      muscle: false
    }
  }

  componentWillMount() {
      let type = this.props.navigation.state.params.type
      if (type === "cardio") {
          this.setState({ cardio: true})
      } else if (type === "muscle") {
        this.setState({ muscle: true})
      } else {
          console.log("No type Passed")
      }
  }

  render() {
   
    return(
      <View style={styles.container}>
        <Image
        source={require('../assets/images/BCmap.png')}
        style={styles.map}
        />
        {this.state.muscle ? 
            <FontAwesome
            name={"map-marker"}
            size={70}
            style={{
                position: "absolute",
                backgroundColor: 'transparent',
                top: 110,
                left: 30
                }}
            color={'blue'}
          /> : <View/>}
        {this.state.cardio ? 
            <FontAwesome
            name={"map-marker"}
            size={70}
            style={{
                backgroundColor: 'transparent',
                position: "absolute",
                left: 170,
                top: 30
                }}
            color={'green'}
          /> : <View/>}
        <Text>{this.props.navigation.state.params.name}</Text>
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
    alignContent: 'center',    
  },
  map: {    
    width: Layout.window.width      
  }
});