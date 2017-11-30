import React from 'react';
import { Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';
import Spots from './Spots';
import Map from './Map';

let MainScreenNavigator = TabNavigator({
    Tab1: {screen: Spots},
    Tab2: {screen: Map}
});

MainScreenNavigator.navigationOptions = {
  title: "Tab Example"
};

export default MainScreenNavigator;