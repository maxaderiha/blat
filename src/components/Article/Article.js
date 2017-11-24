import React, {Component} from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {BLUE, DARK_BLUE, WHITE} from '../../colors';


export default class Article extends Component {

    render() {
        const {title, description, image} = this.props;
        return (
            <TouchableHighlight
                style={{marginTop: 15}}
                underlayColor={BLUE}
                onPress={this.onViewMore}>
                <View
                    style={styles.container}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Image
                        style={styles.image}
                        source={{uri: image}}
                        resizeMode="cover"
                    />
                    <Text style={styles.text}>
                        {description}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    onViewMore = () => {
        const {title} = this.props;
        this.props.navigation.navigate('DetailsArticle', {title});
    };
}

const styles = StyleSheet.create({
    container: {
        minHeight: 250,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: WHITE,
    },
    title: {
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: DARK_BLUE,
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