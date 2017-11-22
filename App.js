import React from 'react';
import {View} from 'react-native';
import {RootNavigation} from './src/navigation';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1, borderTopWidth: 25, borderTopColor: '#16609b'}}>
                <RootNavigation/>
            </View>
        );
    }
}