import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {VirtualizedList, RefreshControl, View} from 'react-native';

import Article from '../article/article';
import {articlesSelector} from '../../selectors/index';
import {LIGHT_GREY, BLUE, WHITE} from '../../colors';
import {loadArticles} from '../../action-creators/index';
import Loader from '../loader/loader';
import ErrorMessage from '../errore-message/errore-message';


class ArticlesList extends PureComponent {
    componentDidMount() {
        const {loading, loadArticles} = this.props;
        if (!loading) loadArticles();
    }

    render() {
        const {articles, loading, loadArticles, error} = this.props;
        debugger;
        if (error) return <ErrorMessage message={error}/>;
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
        debugger;
        const {articles, total, error} = this.props;
        if ((articles.length < total) && !error) return <Loader type='bubbles' color={LIGHT_GREY} size={8}/>;
        return null;
    };

    renderSeparator = () => (
        <View style={{
            flex: 1,
            height: 0.5,
            backgroundColor: LIGHT_GREY,
        }}/>
    );

    onEndReachedHandle = () => {
        const {articles, loadArticles, loading, total} = this.props;
        if (articles.length < total && !loading) loadArticles(articles.length, 5, true);
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
        total: state.articles.total,
        error: state.articles.error,
    };
}, {loadArticles})(ArticlesList);