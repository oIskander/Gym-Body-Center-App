import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,  
} from 'react-native';
import Layout from '../constants/Layout';
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';


export default class SingleProgramScreen extends React.Component {
  static navigationOptions = {
   title: "This is Program",
  };
  constructor(props){
    super(props);
    this.state = {
      programs: []
    }
  }

  /*handleClick() {
    this.props.navigation.navigate('MapScreen', {type: this.props.navigation.state.params.type})
  }*/

  render() {
      const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
            <View style={styles.textCont}>
                   <Text style={{fontSize: 24, fontWeight: '500'}}>{params.name} program</Text>
            </View>
            <View style={styles.description}>
                    <Text style={styles.descText}> Description </Text>
            </View>            
            <ScrollView style={styles.web}>
                    <Text style={{fontSize: 20, fontWeight: '300', color: 'grey'}}>{params.description}</Text>
              </ScrollView>
              
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DCEDC8',   
  },
  textCont: {
    flex: 0.3,
    backgroundColor: '#8BC34A',
    alignItems: 'center',
    justifyContent: 'center', 
    borderBottomColor: 'green', 
    padding: 24,     
  }, 
  description: {
    flex: 0.06,
    padding: 20, 
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,  
    marginHorizontal: 8,
  },
  descText: {
      fontSize: 24,      
  }, 
  web: { 
    flex: 0.6,    
    alignSelf: 'stretch',    
    marginHorizontal: 24          
  },
  
});
