import React, { Component }  from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {Button} from './Button';
import EStyleSheet from 'react-native-extended-stylesheet';

class MenuItem extends Component {
    render() {
        return (
            <View style={styles.container} >
            <Text>{this.props.name}</Text>
            <Image style={styles.bgImage}
            source={this.props.image} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'powderblue', 
        borderColor: 'black', 
        borderWidth: 2,
        alignItems: 'center'
    },
    bgImage: {
        width: 50,
        height: 50
    }

})

export default MenuItem;