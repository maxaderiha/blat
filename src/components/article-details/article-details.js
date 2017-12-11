import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native';

import { BLUE } from '../../colors';
import { styles } from './article-details.styles';
import { loadArticle } from '../../action-creators';
import Loader from '../loader/loader';
import Tags from '../tags/tags';
import Error from '../errore-message/errore-message';
import ImagesViewer from '../images-viewer/images-viewer';


class ArticleDetails extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            imagesViewerVisible: false,
        };

    }

    componentDidMount() {
        const { _id } = this.props.navigation.state.params;
        const { loadArticle, article: { loaded, loading } } = this.props;

        if (!loaded && !loading) loadArticle(_id);
    }

    render() {
        const { title, img, date, tags, content, images, error, loading, loaded } = this.props.article;
        const formatDate = moment(date).calendar(null, { sameElse: 'DD.MM.YYYY', });

        console.log('--- update article detail');

        if (error) return <Error message={error} />;
        if (!loaded && loading) return <Loader type='bubbles' size={10} color={BLUE} />;

        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.date}>
                        {formatDate}
                    </Text>
                    <TouchableHighlight onPress={this.openImagesViewer}>
                        <Image
                            style={styles.image}
                            source={{ uri: img }}
                            resizeMode="cover"
                        />
                    </TouchableHighlight>
                    <ImagesViewer
                        isOpen={this.state.imagesViewerVisible}
                        images={this.sendImages(images, img)}
                        handleOnRequestClose={this.closeImagesViewer}
                    />
                    <Text style={styles.text}>
                        {content}
                    </Text>
                    <View style={styles.tags}>
                        <Tags tags={tags} />
                    </View>
                </View>
            </ScrollView>
        );
    }

    sendImages = (images, img) => {
        if (!images) return;
        return [{ url: img }].concat(images.map(url => ({ url })))
    };

    closeImagesViewer = () => {
        this.setState({ imagesViewerVisible: false });
    };

    openImagesViewer = () => {
        this.setState({ imagesViewerVisible: true });
    }
}

export default connect((state, ownProps) => {
    const { _id } = ownProps.navigation.state.params;
    return { article: state.articles.entities.get(_id) }
}, { loadArticle })(ArticleDetails);