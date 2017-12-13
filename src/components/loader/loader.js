import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Bubbles, Bars, DoubleBounce, Pulse } from 'react-native-loader';
import { WHITE } from '../../colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: WHITE,
    },
});

const components = {
    bubbles: Bubbles,
    bars: Bars,
    pulse: Pulse,
    doubleBounce: DoubleBounce,
};

export default function Loader({ type = 'bubbles', size = 10, color = '#000' }) {
    const Spinner = components[type];
    return (
        <View style={styles.container}>
            <Spinner size={size} color={color} />
        </View>
    );
}