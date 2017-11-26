import React, {Component} from 'react';
import {VirtualizedList, RefreshControl, View} from 'react-native';
import {loadArticles, loadMoreArticles} from '../../action-creators/index';
import {connect} from 'react-redux';
import Article from '../Article/Article';
import {mapToArr} from '../../utils';
import Loader from '../Loader/Loader';
import {GREY, BLUE, WHITE, DARK_BLUE} from '../../colors';


class ArticlesList extends Component {
    componentDidMount() {
        const {loadedAll, loading, loadArticles} = this.props;
        if (!loadedAll && !loading) loadArticles();
    }

    render() {
        const {articles, loading, loadArticles} = this.props;
        debugger;
        if (loading) return <Loader type='bubbles' size={10} color={DARK_BLUE}/>;

        console.log('--- update');
        return (
            <VirtualizedList
                style={{backgroundColor: GREY}}
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
                        colors={[BLUE, DARK_BLUE]}
                        progressBackgroundColor={WHITE}
                    />
                }
            />
        );
    }

    renderFooter = () => {
        const {loadedAll} = this.props;
        if (loadedAll) return null;
        return <Loader type='bubbles' color={WHITE} size={8}/>;
    };

    renderSeparator = () => (
        <View style={{
            flex: 1,
            height: 15,
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
            article={item}
        />
    );

    _keyExtractor = (item, index) => item._id;
}

export default connect(state => {
    return {
        articles: mapToArr(state.articles.entities),
        loading: state.articles.loading,
        loadedAll: state.articles.loadedAll,
    };
}, {loadArticles, loadMoreArticles})(ArticlesList);