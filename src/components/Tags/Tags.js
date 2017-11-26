import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {BLUE, DARK_GRAY, GREY} from '../../colors';


export default function Tags({tags}) {
    return (
        <View style={styles.container}>
            {tags.map(
                (tag, index) =>
                    <TouchableHighlight
                        key={index}
                        underlayColor={BLUE}
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
        marginTop: 5,
        paddingLeft: 5,
    },
    tag: {
        fontSize: 14,
        lineHeight: 18,
        color: DARK_GRAY,
    },
    tagWrap: {
        marginRight: 10,
        padding: 5,
        backgroundColor: GREY,
        borderRadius: 10,
    },
});