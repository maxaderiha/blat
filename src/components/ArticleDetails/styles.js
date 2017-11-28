import {StyleSheet} from 'react-native';
import {DARK_BLUE, WHITE} from '../../colors';


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
        color: DARK_BLUE,
    },
    date: {
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 12,
        color: '#505050',
    },
    text: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        lineHeight: 26,
    },
    image: {
        height: 200,
        width: undefined,
    },
    tags: {
        marginTop: 10,
        marginLeft: 10,
    },
});