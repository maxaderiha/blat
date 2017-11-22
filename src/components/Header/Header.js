import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ({navigation}) {
    return (
        <View style={styles.container}>
            <Ionicons
                name={'md-menu'}
                size={36}
                color='#ffffff'
                onPress={() => navigation.navigate('DrawerToggle')}
                style={styles.icon}
            />
            <Text style={styles.title}>{navigation.state.routeName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxHeight: 56,
        backgroundColor: '#1b7dc8',
        elevation: 5,
    },
    icon: {
        padding: 10,
        color: '#ffffff',
    },
    title: {
        marginLeft: 30,
        fontSize: 20,
        color: '#ffffff',
    }
});