import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from './components/SearchScreen/SearchScreen';
import AddArticleScreen from './components/AddArticleScreen/AddArticleScreen';
import ArticlesList from './components/ArticlesList/ArticlesList';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import {BLUE, WHITE} from './colors';


const styles = StyleSheet.create({
    icon: {
        padding: 10,
        color: WHITE,
    },
    header: {
        backgroundColor: BLUE,
    },
    drawerItem: {
        height: 65,
    },
});

export const ArticleStack = StackNavigator({
    ArticlesList: {
        screen: ArticlesList,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            headerLeft: <Ionicons
                name={'md-menu'}
                size={36}
                color={WHITE}
                onPress={() => navigation.navigate('DrawerToggle')}
                style={styles.icon}
            />,
            headerTintColor: WHITE,
            headerStyle: styles.header,
        }),
    },
    DetailsArticle: {
        screen: ArticleDetails,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.title}`,
            headerTintColor: WHITE,
            headerPressColorAndroid: WHITE,
            headerStyle: styles.header,
        }),
    },
});

export const RootNavigation = DrawerNavigator({
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                drawerLabel: 'Search',
                drawerIcon: ({tintColor}) => (
                    <Ionicons
                        name={'md-search'}
                        size={24}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
        Home: {
            screen: ArticleStack,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({tintColor}) => (
                    <Ionicons
                        name={'md-home'}
                        size={24}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
        AddArticle: {
            screen: AddArticleScreen,
            navigationOptions: {
                drawerLabel: 'AddArticle',
                drawerIcon: ({tintColor}) => (
                    <Ionicons
                        name={'md-add'}
                        size={24}
                        style={{color: tintColor}}
                    />
                ),
            },
        },
    },
    {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: BLUE,
            itemStyle: styles.drawerItem,
        },
    });