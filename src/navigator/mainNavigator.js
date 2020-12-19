import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView55186781Navigator from '../features/CalendarView55186781/navigator';
import CalendarView56186780Navigator from '../features/CalendarView56186780/navigator';
import CalendarView57186779Navigator from '../features/CalendarView57186779/navigator';
import CalendarView58186778Navigator from '../features/CalendarView58186778/navigator';
import CalendarView59186777Navigator from '../features/CalendarView59186777/navigator';
import CalendarView60186776Navigator from '../features/CalendarView60186776/navigator';
import CalendarView61186775Navigator from '../features/CalendarView61186775/navigator';
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
CalendarView55186781: { screen: CalendarView55186781Navigator },
CalendarView56186780: { screen: CalendarView56186780Navigator },
CalendarView57186779: { screen: CalendarView57186779Navigator },
CalendarView58186778: { screen: CalendarView58186778Navigator },
CalendarView59186777: { screen: CalendarView59186777Navigator },
CalendarView60186776: { screen: CalendarView60186776Navigator },
CalendarView61186775: { screen: CalendarView61186775Navigator },
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
