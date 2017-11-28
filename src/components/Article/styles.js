import {StyleSheet} from 'react-native';
import {DARK_BLUE, WHITE} from '../../colors';


export const styles = StyleSheet.create({
    container: {
        minHeight: 250,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: WHITE,
    },
    title: {
        marginBottom: 2,
        paddingLeft: 15,
        paddingRight: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: DARK_BLUE,
    },
    date: {
        marginBottom: 10,
        paddingLeft: 15,
        fontSize: 12,
        color: '#505050',
    },
    text: {
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 16,
    },
    image: {
        height: 200,
        width: undefined,
    },
    tags: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    },
});