import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {VirtualizedList, RefreshControl, View} from 'react-native';

import Article from '../Article/Article';
import {articlesSelector} from '../../selectors/index';
import {LIGHT_GREY, BLUE, WHITE} from '../../colors';
import {loadArticles, loadMoreArticles} from '../../action-creators/index';
import Loader from '../Loader/Loader';


class ArticlesList extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {loadedAll, loading, loadArticles} = this.props;
        if (!loadedAll && !loading) loadArticles();
    }

    render() {
        const {articles, loading, loadArticles} = this.props;

        if (loading) return <Loader type='bubbles' size={10} color={BLUE}/>;

        console.log('--- update list');

        return (
            <VirtualizedList
                style={{backgroundColor: WHITE}}
                data={articles}
                getItem={this._getItem}
                getItemCount={this._getItemCount}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this.renderSeparator}
                onEndReached={this.onEndReachedHandle}
                ListFooterComponent={this.renderFooter}
                windowSize={11}
                refreshControl={
                    <RefreshControl
                        onRefresh={loadArticles.bind(this)}
                        refreshing={loading}
                        colors={[BLUE]}
                        progressBackgroundColor={WHITE}
                    />
                }
            />
        );
    }

    renderFooter = () => {
        const {loadedAll} = this.props;
        if (loadedAll) return null;
        return <Loader type='bubbles' color={LIGHT_GREY} size={8}/>;
    };

    renderSeparator = () => (
        <View style={{
            flex: 1,
            height: 0.5,
            backgroundColor: LIGHT_GREY,
        }}/>
    );

    onEndReachedHandle = () => {
        const {articles, loadMoreArticles, loadedAll} = this.props;
        if (articles.length >= 5 && !loadedAll) loadMoreArticles(articles.length, 5);
    };

    _getItem = (data, index) => data[index];

    _getItemCount = data => data.length;

    _renderItem = ({item}) => (
        <Article
            navigation={this.props.navigation}
            _id={item._id}
        />
    );

    _keyExtractor = (item, index) => item._id;
}

export default connect(state => {
    return {
        articles: articlesSelector(state),
        loading: state.articles.loading,
        loadedAll: state.articles.loadedAll,
    };
}, {loadArticles, loadMoreArticles})(ArticlesList);