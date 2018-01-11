import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';
import Layout from '../constants/Layout';
import {Button} from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';


export default class SingleExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "This is Exercise",
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
  }

  handleClick() {
    this.props.navigation.navigate('MapScreen', {type: this.props.navigation.state.params.type})
  }

  render() {
      const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
            <View style={styles.textCont}>
                   <Text style={{fontSize: 24, fontWeight: '500'}}>{params.name} exercise</Text>
            </View>
            <View style={styles.web}>
              <WebView
                    source={{uri: params.type}}
                    
                  />
              </View>
              <View style={styles.buttons}>
                    <Button style={styles.button}
                    title='Find on Map'
                    onPress={this.handleClick.bind(this)}
                    />
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
  },
  textCont: {
    flex: 0.7,
    backgroundColor: '#8BC34A',
    alignItems: 'center',
    justifyContent: 'center', 
    borderBottomColor: 'green', 
     
  }, 
  web: { 
    flex: 1.7,    
    alignSelf: 'stretch', 
    justifyContent: 'center', 
    borderColor: 'green', 
        borderWidth: 1,        
  },
  buttons: { 
    flex: 0.6,   
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 24,
  },
});
