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
  TextInput,
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';
import * as firebase from 'firebase';
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   title: "Home"
  };
  handlePress() {
    console.log('1234567');
  }
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      user: 'nouser',
      initialMessage: '',
      feedback: '',
      name: '',
      uid: '',
      details: {name: null, weight: null, height: null}
    }
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      this.setState({
        exercises: exercises
      })
    });
    
    Database.authState((user) => {
      if (user !== null) {
      this.setState({uid: user.uid}, () =>{
        Database.getUserData(this.state.uid, (details) => {
          this.setState({
            details: details
          })
        });
      })}
    })

  }

  sendFeedback(){
    Database.sendFeedback(this.state.feedback);
  }

  logout() {
    Database.logout();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.textBox}>
                    <View style={styles.topText}>
                          <Text style={{fontSize: 34}}>{this.state.details.name}</Text>
                          <Text style={{fontSize: 16}}>Welcome to Body Center</Text>
                    </View>                    
                </View>
                <View style={styles.pic}>
                          <Image  style={styles.img} source={require("../assets/icons/app-icon.png")}/>
                    </View> 
            </View>
            <View style={styles.weight}>
                    <Text style={{fontSize: 24}}>Your Weight:     {this.state.details.weight} kg</Text>
            </View>
            <View style={styles.weight}>
                  <Text style={{fontSize: 24}}>Your Height:      {this.state.details.height} cm</Text>
            </View>       
            <View style={styles.feedback}>
                <TextInput style={{fontSize: 34}}
                  onChangeText={(feedback) => this.setState({feedback})}
                  value={this.state.feedback}                  
                  placeholder={'Feedbacks'}
                />
            </View>
            <View style={styles.buttons}>
                <Button style={styles.button}
                        title="Send Feedback"
                        onPress={() => {this.sendFeedback()}}/>
            </View>
            <View style={styles.buttons}>
                <Button style={styles.button}
                        title="Log out"
                        onPress={() => {this.logout()}}/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex:1,
   flexDirection: 'column',
   backgroundColor: '#DCEDC8',
 },
 top: {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#8BC34A',
 },
 textBox: {
  flex: 2 ,
  justifyContent: 'center',

  
 },
  pic: {
    flex: 1,    
    padding: 16,
    alignItems: 'center',
    
  },
  topText: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
  },
  img: {
    height: 120,
    width: 120,
    
  },
 weight: {
  flex: 0.6,      
    borderBottomColor: 'green', 
    borderBottomWidth: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginVertical: 2,
 },

 feedback: {
   flex: 0.4,     
    justifyContent: 'flex-end',       
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginVertical: 2,
    
 },
 buttons: {
  flex: 0.8,
  justifyContent: 'center',
  marginHorizontal: 24,
   
 },
  button: {
   
  }

});
/*<Button style={styles.button}
          title="Log user Details"
          onPress={() => {console.log(this.state.details)}}/>*/