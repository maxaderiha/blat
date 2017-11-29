import React, {PureComponent} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {ScrollView, View, Text, Image} from 'react-native';

import {BLUE} from '../../colors';
import {styles} from './styles';
import {articlesSelectorFactory} from '../../selectors/index';
import {loadArticle} from '../../action-creators';
import Loader from '../Loader/Loader';
import Tags from '../Tags/Tags';
import Error from '../ErroreMessage/ErroreMessage';


class ArticleDetails extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {_id} = this.props.navigation.state.params;
        const {loadArticle, article: {loaded, loading}} = this.props;

        if (!loaded && !loading) loadArticle(_id);
    }

    render() {
        debugger;
        const {title, img, date, tags, content, images, error, loading} = this.props.article;

        const formatDate = moment(date).calendar(null, {sameElse: 'DD.MM.YYYY',});

        console.log('--- update article detail');

        if (loading) return <Loader type='bubbles' size={10} color={BLUE}/>;
        if (error) return <Error status={error}/>;

        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.date}>
                        {formatDate}
                    </Text>
                    <Image
                        style={styles.image}
                        source={{uri: img}}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}>
                        {content}
                    </Text>
                    <View style={styles.tags}>
                        <Tags tags={tags}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = () => {
    const articleSelector = articlesSelectorFactory();

    return (state, ownProps) => {
        const props = ownProps.navigation.state.params;
        return {article: articleSelector(state, props)}
    }
};

export default connect(mapStateToProps, {loadArticle})(ArticleDetails);
