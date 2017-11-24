import React from 'react';
import {View} from 'react-native';
import {RootNavigation} from './navigation';
import {Provider} from 'react-redux';
import store from './store/index';
import {DARK_BLUE} from './colors';


export default class Main extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1, borderTopWidth: 25, borderTopColor: DARK_BLUE}}>
                    <RootNavigation/>
                </View>
            </Provider>
        );
    }
}