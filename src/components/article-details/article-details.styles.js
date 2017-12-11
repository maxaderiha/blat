import { StyleSheet } from 'react-native';
import { DARK_GRAY, GRAY, WHITE } from '../../colors';


export const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: WHITE,
    },
    container: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 20,
    },
    title: {
        marginBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: DARK_GRAY,
    },
    date: {
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 12,
        color: GRAY,
    },
    text: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        lineHeight: 26,
        color: DARK_GRAY,
    },
    image: {
        height: 260,
        width: undefined,
    },
    tags: {
        marginTop: 10,
        marginLeft: 10,
    },
});