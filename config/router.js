import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image, Button } from 'react-native';
import { Icon } from 'react-native-elements';

import Spots from '../screens/Spots';
import Map from '../screens/Map';
import CreateMap from '../screens/CreateMap';
import SpotShow from '../screens/SpotShow';
import CreateForm from '../screens/CreateForm';
import MarkerShow from '../screens/MarkerShow';

export const SpotStack = StackNavigator({
	Spots: {
		screen: Spots,
		navigationOptions: {
			title: 'Spots',
		}
	},
	SpotShow: {
    screen: SpotShow,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
});

export const MapStack = StackNavigator({
	Map: {
		screen: Map,
		navigationOptions: {
			title: 'SkateMap',
		}
	},
	 MarkerShow: {
	    screen: MarkerShow,
	    navigationOptions: ({ navigation }) => ({
	      title: `${navigation.state.params.name}`,
	    }),
	  },
	});

export const CreateMapStack = StackNavigator({
	CreateMap: {
		screen: CreateMap,
		navigationOptions: {
			title: 'Drag Marker To Spot',
		}
	},
	CreateForm: {
		screen: CreateForm,
		navigationOptions: {
			title: 'Spot Details',
		}
	}
});

export const Tabs = TabNavigator({
	Spots: {
		screen: SpotStack,
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
		screen: MapStack,
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
		screen: CreateMapStack,
		navigationOptions: {
				tabBarLabel: 'Add Spot',
				tabBarIcon: ({tintColor}) => (
					<Image
						source={require('../images/create-icon.png')}
						style={{width: 22, height: 22, tintColor: 'black'}}>
					</Image>
				)
			}
	},
});