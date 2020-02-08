import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import IntroScreen from './src/screens/IntroScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import RoleScreen from './src/screens/RoleScreen';
import RoleDetailScreen from './src/screens/RoleDetailScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';
import ProfileScreen from './src/screens/ProfileScreen';


//import LiquidSwipe, { assets as liquidSwipeAssets } from "./src/LiquidSwipe";

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { FontAwesome } from '@expo/vector-icons';

// "use strict";
// const assets = [
//     ...liquidSwipeAssets,
// ];


const roleFlow = createStackNavigator({
  Role: RoleScreen,
  RoleDetail: RoleDetailScreen
});


const quizFlow = createStackNavigator({
  Quiz: QuizScreen,
  Result: ResultScreen
});

roleFlow.navigationOptions = {
  title: 'Roles',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen, //loading screen
  introFlow: createStackNavigator({
    //Intro: LiquidSwipe,
    Intro: IntroScreen,
    SignUp: SignUpScreen,
    SignIn: SignInScreen
  }),
  mainFlow: createBottomTabNavigator({
    roleFlow,
    quizFlow,
    Profile: ProfileScreen
  })
});
// a component can be class comp. or func. comp
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    //<TrackProvider>
     //<LocationProvider>
        <AuthProvider>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      //</LocationProvider>
    //</TrackProvider>
  );
};

