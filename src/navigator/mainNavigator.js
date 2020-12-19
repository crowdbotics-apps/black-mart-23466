import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList62186774Navigator from '../features/ArticleList62186774/navigator';
import Maps186755Navigator from '../features/Maps186755/navigator';
import Additem186754Navigator from '../features/Additem186754/navigator';
import Maps186750Navigator from '../features/Maps186750/navigator';
import UserProfile186746Navigator from '../features/UserProfile186746/navigator';
import BlankScreen0186723Navigator from '../features/BlankScreen0186723/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList62186774: { screen: ArticleList62186774Navigator },
Maps186755: { screen: Maps186755Navigator },
Additem186754: { screen: Additem186754Navigator },
Maps186750: { screen: Maps186750Navigator },
UserProfile186746: { screen: UserProfile186746Navigator },
BlankScreen0186723: { screen: BlankScreen0186723Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
