/*import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import Database from '../api/database';
import ProgramCard from '../components/ProgramCard'
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import ImageExercise from '../components/ImageExercise';

export default class ProgramsScreen extends React.Component {
  static navigationOptions = {
    title: 'Programs',
  };

  constructor(props){
    super(props);
    this.state = {
      programs: []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    Database.getPrograms( (programs) => {
      console.log(programs)
      this.setState({
        programs: programs
      })
    });
  }
  handlePress(name, description, id) {
    this.props.navigation.navigate('SingleProgram', {name: name, description: description, id: id})
    console.log("pressed")
  }

  render() {
    return (
      
        <FlatList
          data={Object.values(this.state.programs)}
          renderItem={({item}) => 
          <ImageExercise
            title={item.name}            
            description={item.description}
            handlePress={this.handlePress(item.name, item.description)}
            description={item.description}
            title={item.name}/>}
          />
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
*/

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProgramCard from '../components/ProgramCard';

export default class ExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "Programs"
  };
  constructor(props){
    super(props);
    this.state = {
      programs: []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    Database.getPrograms( (programs) => {
      this.setState({
        programs: programs
      })
    });
  } 

  handlePress(name, description, id ) {
    console.log(name)
    this.props.navigation.navigate('SingleProgram', {name: name, description: description, id: id})
  }    

  render() {
    const { navigate } = this.props.navigation;
    return (    

        <FlatList
          data={Object.values(this.state.programs)}
          renderItem={({item}) =>
          <ProgramCard
            title={item.name}                     
            handlePress={() => {this.handlePress(item.name, item.description)}}            
            />}
          />
      
    );
  }
}

const styles = StyleSheet.create({

});