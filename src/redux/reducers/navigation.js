/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { NavigationActions } from 'react-navigation';
import { StatusBar } from 'react-native';
import createReducer from '../helpers/createReducer';
import AppRouteConfigs from '../../navigators/AppRouteConfigs';

const firstAction = AppRouteConfigs.router.getActionForPathAndParams('LoggedOut');
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
  const nextState = AppRouteConfigs.router.getStateForAction(action, state);

  if (action.routeName === 'TurnOnNotifications' || action.routeName === 'LoggedIn') {
    StatusBar.setBarStyle('dark-content', true);
  }

  return nextState || state;
};
