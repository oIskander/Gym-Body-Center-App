import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {this.props.handlePress(this.props.title, this.props.description)}}>

            <View style={styles.exerciseBox}>                    
                    <Text style={styles.title}>{this.props.title}</Text>   
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#DCEDC8', 
        borderColor: '#CDCDCD',                
    },
    exerciseBox: {
        height: 100,         
        borderBottomColor: 'green', 
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginHorizontal: 8,
        marginVertical: 2,         
    },      
    title: {
        fontWeight: '500',
        fontSize: 20,
    }
})

export default MenuItem;