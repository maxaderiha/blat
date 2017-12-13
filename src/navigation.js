import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './components/search/search';
import ArticleAdding from './components/article-adding/article-adding';
import ArticlesList from './components/articles-list/articles-list';
import ArticleDetails from './components/article-details/article-details';
import { BLUE, GRAY, DARK_GRAY, WHITE, LIGHT_GREY } from './colors';
import Ripple from 'react-native-material-ripple';




const styles = StyleSheet.create({
    headerIcon: {
        margin: 16,
        width: 24,
        height: 24,
        color: DARK_GRAY,
        fontWeight: 'bold',
    },
    headerIconWrap: {
        alignItems: 'center',
        width: 56,
        height: 56,
    },
    header: {
        backgroundColor: WHITE,
    },
    tabBar: {
        backgroundColor: WHITE,
        elevation: 10,
    },
});

export const ArticlesListStack = StackNavigator({
    ArticlesList: {
        screen: ArticlesList,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerTintColor: DARK_GRAY,
            headerStyle: styles.header,
            headerRight:
            <Ripple>
                <View style={styles.headerIconWrap}>
                    <Icon
                        name={'filter-list'}
                        size={24}
                        style={styles.headerIcon}
                    />
                </View>
            </Ripple>,
        }),
    },
    DetailsArticle: {
        screen: ArticleDetails,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.title}`,
            headerTintColor: DARK_GRAY,
            headerPressColorAndroid: LIGHT_GREY,
            headerStyle: styles.header,
        }),
    },
});

export const RootNavigation = TabNavigator(
    {
        Home: {
            screen: ArticlesListStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={'home'}
                    size={26}
                    style={{ color: tintColor }}
                />),
            },

        },
        Addition: {
            screen: ArticleAdding,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={'add'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name={'search'}
                    size={26}
                    style={{ color: tintColor }}
                />),
            },
        },
    },
    {
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
            indicatorStyle: { height: 0 },
        },
    }
);