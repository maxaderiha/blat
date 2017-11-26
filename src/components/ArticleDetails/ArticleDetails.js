import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import Tags from '../Tags/Tags';
import {DARK_BLUE, WHITE} from '../../colors';
import moment from 'moment';


export default class ArticleDetails extends Component {
    render() {
        const {title, img, date, tags} = this.props.navigation.state.params.article;

        const formatDate = moment(date).calendar(null, {
            sameElse: 'DD.MM.YYYY',
        });

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
                        Content..
                    </Text>
                    <Tags tags={tags}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: WHITE,
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
});