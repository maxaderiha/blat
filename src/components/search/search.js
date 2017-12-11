import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class SearchScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>SearchScreen</Text>
                </View>
            </View>
        );
    }
}