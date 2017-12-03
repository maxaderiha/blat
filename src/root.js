import React from 'react';
import {View} from 'react-native';
import {RootNavigation} from './navigation';
import {Provider} from 'react-redux';
import store from './redux/index';
import {WHITE, LIGHT_GREY} from './colors';


export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1, borderTopWidth: 25, borderTopColor: LIGHT_GREY, backgroundColor: WHITE}}>
                    <RootNavigation/>
                </View>
            </Provider>
        );
    }
}