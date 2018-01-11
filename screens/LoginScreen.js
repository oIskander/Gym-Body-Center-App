import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import LogInForm from '../components/LogInForm';
import RegistrationForm from '../components/RegistrationForm';
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgBox}>
              <Image style={styles.img} source={require('../assets/icons/app-icon.png')}/>
        </View>
        <View style={styles.logForm}>
        <View style={styles.text}>
              <Text style={{fontSize: 24}}>Welcome to Body Center</Text>
        </View>
        <LogInForm />
        <RegistrationForm />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  
    backgroundColor: '#DCEDC8',
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 16,
},
  imgBox: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 150,
  },
  logForm: {
    flex: 0.5,
    justifyContent: 'center',
  },
  text: {
    flex: 0.1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});