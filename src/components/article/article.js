import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { articlesSelectorFactory } from '../../selectors/index';
import { View, Image, Text, TouchableHighlight } from 'react-native';

import moment from 'moment';

import { styles } from './article.styles';
import { BLUE } from '../../colors';

import Tags from '../tags/tags';


class Article extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, date, description, img, tags } = this.props.article;

        const formatDate = moment(date).calendar(null, {
            sameElse: 'DD.MM.YYYY',
        });

        console.log('--- update article');
        return (
            <TouchableHighlight
                onPress={this.onViewMore}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.date}>
                        {formatDate}
                    </Text>
                    <Image
                        style={styles.image}
                        source={{ uri: img }}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}>
                        {`${description.slice(0, 140)}...`}
                    </Text>
                    <View style={styles.tags}>
                        <Tags tags={tags} />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    onViewMore = () => {
        const { _id } = this.props;
        const { title } = this.props.article;
        this.props.navigation.navigate('DetailsArticle', { _id, title });
    };
}

const mapStateToProps = () => {
    const articleSelector = articlesSelectorFactory();

    return (state, ownProps) => {
        return { article: articleSelector(state, ownProps) }
    }
};

export default connect(mapStateToProps)(Article);
