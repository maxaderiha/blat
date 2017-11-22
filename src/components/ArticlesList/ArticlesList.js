import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Article from '../Article/Article';

export default class ArticlesList extends Component {
    render() {
        const {articles} = this.props;

        return (
            <FlatList
                data={articles}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }

    _renderItem = ({item}) => (
        <Article
            navigation={this.props.navigation}
            title={item.title}
            text={`${item.text.slice(0, 140)}...`}
            image = {item.image}
        />
    );

    _keyExtractor = (item, index) => item.id;
}