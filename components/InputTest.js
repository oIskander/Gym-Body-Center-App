import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

export default class InputTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value
        };
    }
    
    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'green', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text>{this.state.text}</Text>
                <TouchableOpacity onPress={() => {console.log(this.props.value)}}><Text>Show me props</Text></TouchableOpacity>
            </View>
        )
    }
}