import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ArticleDetails extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.state.params.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});