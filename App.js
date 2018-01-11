import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import Firebase from "./api/firebase";
import Database from "./api/database";
import LoginScreen from "./screens/LoginScreen"
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button} from './components/Button';

EStyleSheet.build();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  constructor(props){
    super(props);
    Firebase.initialise();
  }

  componentDidMount() {
    Database.authState((user) => {
      let initialView = user ? 'Home' : 'Login';

      this.setState({
        user: user,
        initialView: initialView,
      })
      console.log(this.state.initialView)
    });
  }
  render() {
    return( 
        
        <Button
          title=""
          onPress={() => console.log('Pressed')}
          />
         
    );
    }
  
  render() {
    if (this.state.initialView === 'Login') {
      return (
        <LoginScreen />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([source=require("./assets/icons/app-icon.png")
        
      ]),
      Font.loadAsync([
        // This is the font that we are using for our tab bar
        Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#689F38',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: '#689F38',
  },
});
