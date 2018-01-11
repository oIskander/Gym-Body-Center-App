import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {this.props.handlePress(this.props.title, this.props.description)}}>

            <View style={styles.exerciseBox}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri : this.props.imageSource}}/>
                </View>
                <View style={styles.textCont}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>     
                   
                    </View>
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
        alignItems: 'center',     
    },
    exerciseBox: {
        flex: 1,
        flexDirection: "row",       
        borderBottomColor: 'green', 
        borderBottomWidth: 0.5,
        alignItems: 'center',
        paddingHorizontal: 16,
        marginHorizontal: 8,
        marginVertical: 2,
         
    },
    textCont: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    imageContainer: {
        padding: 8,
        shadowColor: 'grey',
        shadowOpacity: 2,        
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#212121', 
        borderWidth: 1,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
    },
    description: {
        fontSize: 16,
        width: 100,
    }

})

export default MenuItem;