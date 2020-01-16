
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login'
const AppNavigator = createStackNavigator({
    Home: {
        screen: Login,
    },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;