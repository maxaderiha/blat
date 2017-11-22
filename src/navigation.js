import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/HomeScreen/HomeScreen';
import SearchScreen from './components/SearchScreen/SearchScreen';
import AddArticleScreen from './components/AddArticleScreen/AddArticleScreen';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';

export const ArticleStack = StackNavigator({
    ArticleList: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            headerLeft: <Ionicons
                name={'md-menu'}
                size={36}
                color='#ffffff'
                onPress={() => navigation.navigate('DrawerToggle')}
                style={styles.icon}
            />,
            headerTintColor: '#ffffff',
            headerStyle: styles.header
        }),
    },
    DetailsArticle: {
        screen: ArticleDetails,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.title}`,
            headerTintColor: '#ffffff',
            headerPressColorAndroid: '#ffffff',
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
    });

const styles = StyleSheet.create({
    icon: {
        padding: 10,
        color: '#ffffff',
    },
    header: {
        backgroundColor: '#1b7dc8',
    }
});