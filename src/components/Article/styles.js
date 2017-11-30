import {StyleSheet} from 'react-native';
import {WHITE, DARK_GRAY, GRAY} from '../../colors';


export const styles = StyleSheet.create({
    container: {
        minHeight: 250,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: WHITE,
    },
    title: {
        marginBottom: 2,
        paddingLeft: 15,
        paddingRight: 5,
        fontSize: 18,
        fontWeight: '500',
        color: DARK_GRAY,
    },
    date: {
        marginBottom: 10,
        paddingLeft: 15,
        fontSize: 12,
        color: GRAY,
    },
    text: {
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 16,
        color: DARK_GRAY,
    },
    image: {
        height: 260,
        width: undefined,
    },
    tags: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    },
});