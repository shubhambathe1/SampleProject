/**
 * 
 * Main App Router File
 * 
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ScreenOne from './../screens/ScreenOne';
import ScreenTwo from './../screens/ScreenTwo';

const AppNavigator = createStackNavigator({
    ScreenOne: {
        screen: ScreenOne
    },
    ScreenTwo: {
        screen: ScreenTwo
    },
},
    {
        initialRouteName: 'ScreenOne',
        headerMode: 'none',
        mode: 'modal',
    },
);

export default createAppContainer(AppNavigator);
