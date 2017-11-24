import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Bubbles, Bars, DoubleBounce, Pulse} from 'react-native-loader';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});

const components = {
    bubbles: Bubbles,
    bars: Bars,
    pulse: Pulse,
    doubleBounce: DoubleBounce,
};

export default function Loader({type, size, color}) {
    const Spinner = components[type];
    return (
        <View style={styles.container}>
            <Spinner size={size} color={color}/>
        </View>
    );
}