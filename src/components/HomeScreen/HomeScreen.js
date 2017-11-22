import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import ArticlesList from '../ArticlesList/ArticlesList';
import {articles} from '../../fixtures';

export default class HomeScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: '#ebebeb'}}>
                <ArticlesList articles={articles} navigation={navigation}/>
            </View>
        );
    }
}


