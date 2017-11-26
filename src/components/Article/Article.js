import React, {Component} from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Tags from '../Tags/Tags';
import {BLUE, DARK_BLUE, WHITE} from '../../colors';
import moment from 'moment';


export default class Article extends Component {
    render() {
        const {title, date, description, img, tags} = this.props.article;

        const formatDate = moment(date).calendar(null, {
            sameElse: 'DD.MM.YYYY',
        });

        return (
            <TouchableHighlight
                underlayColor={BLUE}
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
                        source={{uri: img}}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}>
                        {`${description.slice(0, 140)}...`}
                    </Text>
                    <Tags tags={tags}/>
                </View>
            </TouchableHighlight>
        );
    }

    onViewMore = () => {
        const {article} = this.props;
        this.props.navigation.navigate('DetailsArticle', {article});
    };
}

const styles = StyleSheet.create({
    container: {
        minHeight: 250,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: WHITE,
    },
    title: {
        marginBottom: 2,
        paddingLeft: 15,
        paddingRight: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: DARK_BLUE,
    },
    date: {
        marginBottom: 10,
        paddingLeft: 15,
        fontSize: 12,
        color: '#505050',
    },
    text: {
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 16,
    },
    image: {
        height: 200,
        width: undefined,
    },
    tags: {
        marginTop: 10,
        paddingLeft: 15,
    },
});