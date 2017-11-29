import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from './components/SearchScreen/SearchScreen';
import AddArticleScreen from './components/AddArticleScreen/AddArticleScreen';
import ArticlesList from './components/ArticlesList/ArticlesList';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import {BLUE, GRAY, DARK_GRAY, WHITE, LIGHT_GREY} from './colors';


const styles = StyleSheet.create({
    headerIcon: {
        padding: 10,
        paddingRight: 15,
        color: DARK_GRAY,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: WHITE,
    },
    tabBar: {
        backgroundColor: WHITE,
        elevation: 8,
    },
});

export const ArticlesListStack = StackNavigator({
    ArticlesList: {
        screen: ArticlesList,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            headerTintColor: DARK_GRAY,
            headerStyle: styles.header,
            headerRight: <Icon
                name={'filter-list'}
                size={26}
                style={styles.headerIcon}
            />,
        }),
    },
    DetailsArticle: {
        screen: ArticleDetails,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.title}`,
            headerTintColor: DARK_GRAY,
            headerPressColorAndroid: LIGHT_GREY,
            headerStyle: styles.header,
        }),
    },
});

export const RootNavigation = TabNavigator({
    Home: {
        screen: ArticlesListStack,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (<Icon
                name={'home'}
                size={26}
                style={{color: tintColor}}
            />),
        },

    },
    Addition: {
        screen: AddArticleScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name={'add'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        },
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (<Icon
                name={'search'}
                size={26}
                style={{color: tintColor}}
            />),
        },
    },
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: styles.tabBar,
        activeTintColor: BLUE,
        inactiveTintColor: GRAY,
        pressColor: LIGHT_GREY,
        indicatorStyle: {height: 0},
    },
});