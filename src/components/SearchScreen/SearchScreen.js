import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../Header/Header';


export default class SearchScreen extends Component {

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                <Header navigation={navigation}/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>SearchScreen</Text>
                </View>
            </View>
        );
    }
}