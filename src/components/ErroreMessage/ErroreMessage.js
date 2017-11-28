import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const errorMessages = {
    '404': 'not found',
};

export default function ErrorMessage({status}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {`Sorry, ${errorMessages[status]}.`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});