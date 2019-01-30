import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Dashboard from "./Dashboard";
import DrawerMenu from "./DrawerMenu";
import Login from "./Login";


const AuthRoutes = createStackNavigator({
  Login: {
    screen: Login
  }
},
{
  headerMode: 'none'
});

const DrawerRoutes = createDrawerNavigator({
  Dashboard: { screen: Dashboard }
},
{
  contentComponent: DrawerMenu,
  drawerWidth: 250
});

const Navigator = createSwitchNavigator({
  Auth: AuthRoutes,
  App: DrawerRoutes
},
{
  initialRouteName: 'Auth',
});

const AppRoutes = createAppContainer(Navigator);

export default AppRoutes;