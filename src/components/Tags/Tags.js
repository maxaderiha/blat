import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {BLUE, GRAY, LIGHT_GREY, WHITE} from '../../colors';


export default function Tags({tags}) {
    return (
        <View style={styles.container}>
            {tags.map(
                (tag, index) =>
                    <TouchableHighlight
                        key={index}
                        style={styles.tagWrap}>
                        <Text style={styles.tag}>{tag}</Text>
                    </TouchableHighlight>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    tag: {
        fontSize: 14,
        lineHeight: 18,
        color: WHITE,
    },
    tagWrap: {
        marginRight: 10,
        padding: 5,
        backgroundColor: BLUE,
        borderRadius: 10,
    },
});