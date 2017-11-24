import React, {PureComponent} from 'react';
import {VirtualizedList, RefreshControl} from 'react-native';
import {loadArticles, loadMoreArticles} from '../../action-creators/index';
import {connect} from 'react-redux';
import Article from '../Article/Article';
import {mapToArr} from '../../utils';
import Loader from '../Loader/Loader';
import {GREY, BLUE, WHITE, DARK_BLUE} from '../../colors';


class ArticlesList extends PureComponent {
    componentDidMount() {
        const {loaded, loading, loadArticles} = this.props;
        if (!loaded || !loading) loadArticles();
    }

    render() {
        console.log('---', 'update');
        const {articles, loading, loadArticles} = this.props;

        if (loading) return <Loader type='bubbles' size={10} color={DARK_BLUE}/>;

        return (
            <VirtualizedList
                style={{backgroundColor: GREY}}
                data={articles}
                getItem={this._getItem}
                getItemCount={this._getItemCount}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                refreshControl={
                    <RefreshControl
                        onRefresh={loadArticles.bind(this)}
                        refreshing={loading}
                        colors={[BLUE, DARK_BLUE]}
                        progressBackgroundColor={WHITE}
                    />
                }
                onEndReached={this.onEndReachedHandle}
                onEndReachedTreshload={10}
                ListFooterComponent={this.renderFooter}
                windowSize={11}
            />
        );
    }

    renderFooter = () => {
        const {loadingMore} = this.props;
        if (!loadingMore) return null;
        return <Loader type='pulse' color={WHITE} size={20}/>;
    };

    onEndReachedHandle = () => {
        const {articles, loadMoreArticles} = this.props;
        loadMoreArticles(articles.length, 10);
    };

    _getItem = (data, index) => data[index];

    _getItemCount = data => data.length;

    _renderItem = ({item}) => (
        <Article
            navigation={this.props.navigation}
            title={item.title}
            description={`${item.description.slice(0, 140)}...`}
            image={item.image}
        />
    );

    _keyExtractor = (item, index) => item.id;
}

export default connect(state => {
    return {
        articles: mapToArr(state.articles.entities),
        loading: state.articles.loading,
        loadingMore: state.articles.loadingMore,
        loaded: state.articles.loaded,
    };
}, {loadArticles, loadMoreArticles})(ArticlesList);