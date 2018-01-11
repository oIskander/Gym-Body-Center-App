import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, TextInput, StyleSheet } from 'react-native';
import Database from '../api/database';
import * as firebase from 'firebase';
import {Button} from './Button';
import EStyleSheet from 'react-native-extended-stylesheet';

class RegistrationForm extends Component {

    componentDidMount() {
        Database.getExercises( (exercises) => {
          this.setState({
            exercises: exercises
          })
        });
        
        /* We have to set interval here, because Firebase currentUser property is not initialized yet */
        let timeout = setInterval(() => {
          if (firebase.auth().currentUser !== null) {
            clearInterval(timeout);
            let uid = firebase.auth().currentUser.uid;
            this.setState({uid})
          }
    
        }, 500)
      }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  async register() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            await Database.addUserData(this.state.name, this.state.weight, this.state.height); 
            console.log("account Created")
            } catch (error) {
            console.log(error)
        }
}

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
         <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#DCEDC8', alignSelf: 'stretch'}}>

            <View style={styles.textCont}>
                  <Text style={styles.text/*{fontSize: 25, textAlign: 'center'}*/}>Enter your Details</Text>
            </View>

            <View style={styles.form}>
            
                  <TextInput            
                    onChangeText={(email) => this.setState({email})}
                    style={styles.fields} 
                    value={this.state.email}
                    placeholder={'Email'}
                  />
                  <TextInput style={styles.fields}
                    secureTextEntry            
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder={'Password'}
                  />
                  <TextInput style={styles.fields}            
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    placeholder={'Name'}
                  />
                  <TextInput style={styles.fields}           
                    onChangeText={(weight) => this.setState({weight})}
                    value={this.state.weight}
                    placeholder={'Weight'}
                  />
                  <TextInput style={styles.fields}            
                    onChangeText={(height) => this.setState({height})}
                    value={this.state.height}
                    placeholder={'Height'}
                    /> 
          
          </View>
          <View style={styles.buttons}>
              <View style={styles.button1}>
                  <Button 
                    title="Register"
                    onPress={() => {this.register()}}/>
                </View>
                <View style={styles.button2}>
                <Button 
                    title="Cancel"
                    onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
                 </View>
            </View>
         </View>


        </Modal>

        <Button
        title="Register"
        onPress={() => {
          this.setModalVisible(true)
        }}/>

      </View>
    );
  }
}

export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    alignSelf: 'stretch'
  },
  textCont:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  text: {    
    fontSize: 24,
  },
  fields: { 
    flex: 1,     
    height: 40,      
    alignSelf: 'stretch'
  },
  form: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 24,
    alignSelf: 'stretch'
  },
  buttons: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
 button2: {
    alignSelf: 'stretch',  
    marginVertical: 24  
    
  },
  button2: {
    alignSelf: 'stretch',  
    marginVertical: 24      
  }

});