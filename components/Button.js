import React from 'react';
import { View, TouchableHighlight, TouchableNativeFeedback, Text, Title,  Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



const styles = EStyleSheet.create({
  $buttonColor: '#8BC34A',
  $textColor: 'black',
  $buttonUnderlayColor: '#7BAAF9',
  button: {
    backgroundColor: '$buttonColor',
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    '@media ios': {
      borderRadius: 50,
    },
    '@media android': {
      borderRadius: 50,
      elevation: 4,
    },
  },
  title: {
    color: '$textColor',
    fontSize: 15,
  },
});

export const Button = ({ title, onPress }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={styles.button}
        underlayColor={styles.$buttonUnderlayColor}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableHighlight>
    );
  }

  return (

    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(styles.$buttonUnderlayColor)}
    >
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};