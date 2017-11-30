import React from 'react';
import { Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';
import Spots from './Spots';
import Map from './Map';
import CreateMap from './CreateMap';

let MainScreenNavigator = TabNavigator({
    Tab1: {screen: Spots},
    Tab2: {screen: Map},
    Tab3: {screen: CreateMap}
},{
  // tabBarPosition: 'botttom',
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'darkgreen',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'green',
    labelStyle: {
      fontSize: 16,
      padding: 0
    }
  }
} );

MainScreenNavigator.navigationOptions = {
  title: "Tab Example"
};

export default MainScreenNavigator;