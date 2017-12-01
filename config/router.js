import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Icon } from 'react-native-elements';

import Spots from '../screens/Spots';
import Map from '../screens/Map';
import CreateMap from '../screens/CreateMap';
import SpotShow from '../screens/SpotShow';

export const Tabs = TabNavigator({
	Spots: {
		screen: Spots,
		navigationOptions: {
		tabBarLabel: 'Spots',
		tabBarIcon: ({tintColor}) => (
			<Image
				source={require('../images/skateboard.png')}
				style={{width: 22, height: 22, tintColor: 'black'}}>
			</Image>
		)
	}
	},
	Map: {
		screen: Map,
		navigationOptions: {
				tabBarLabel: 'Map',
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('../images/map-icon.png')}
						style={{width: 22, height: 22, tintColor: 'black'}}>
					</Image>
				)
			}
	},
	CreateMap: {
		screen: CreateMap,
		navigationOptions: {
				tabBarLabel: 'CreateMap',
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('../images/create-icon.png')}
						style={{width: 22, height: 22, tintColor: 'black'}}>
					</Image>
				)
			}
	},
});