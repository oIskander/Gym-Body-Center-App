import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, TextInput, StyleSheet } from 'react-native';
import Database from '../api/database';
import {Button} from './Button';
import EStyleSheet from 'react-native-extended-stylesheet';

class LogInForm extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  login() {
    Database.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={{marginTop: 22, alignSelf: 'stretch'}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#DCEDC8'}}>
               <View style={styles.textCont}>
                   <Text style={styles.text} >Please Enter Your Email</Text>
                   <Text style={styles.text} > and Password</Text>
               </View>

             <View style={styles.form}>        

                  <TextInput style={styles.fields}                    
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder={'Email'}
                  />
                  <TextInput style={styles.fields}
                    secureTextEntry                    
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder={'Password'}
                  />
            
            </View>
            <View style={styles.buttons}>
              <View style={styles.button1}>
                        <Button
                        title="Log in"
                    onPress={() => {this.login()}}/>
                    </View>
                    <View style={styles.button2}>
                        <Button
                        title="Cancel"
                        onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>
                    </View>
             </View>

          </View>
         
        </Modal>

        <TouchableHighlight
        onPress={() => {
          this.setModalVisible(true)
        }}
        style={{alignSelf: 'stretch', height: 50, borderRadius: 50, backgroundColor: '#8BC34A', justifyContent: 'center', }}>
        <Text style={{alignSelf: 'center', color: 'black' }}>Log In</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default LogInForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    alignSelf: 'stretch'
  },
  textCont:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  text: {    
    fontSize: 24,
  },
  fields: { 
    flex: 0.35,         
    alignSelf: 'stretch'
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 24,
    marginRight: 24,
    alignSelf: 'stretch'
  },
  buttons: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 24,
  },
 button2: {
    alignSelf: 'stretch',  
    marginTop: 24  
    
  },
  button2: {
    alignSelf: 'stretch',  
    marginTop: 24      
  }

});