import React from 'react';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import { Image, Button } from 'react-native';
import { Icon } from 'react-native-elements';

import Spots from '../screens/Spots';
import Map from '../screens/Map';
import CreateMap from '../screens/CreateMap';
import SpotShow from '../screens/SpotShow';
import CreateForm from '../screens/CreateForm';
import MarkerShow from '../screens/MarkerShow';
import EditSpot from '../screens/EditSpot';

export const SpotStack = StackNavigator({
	Spots: {
		screen: Spots,
		// navigationOptions: {
		// 	title: 'Spots',
		// }
		navigationOptions: ({ screenProps }) => ({
		  title: 'Spots',
		  headerLeft: null
		}),
	},
	SpotShow: {
    screen: SpotShow,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  EditSpot: {
    screen: EditSpot,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
});

export const MapStack = StackNavigator({
	Map: {
		screen: Map,
		navigationOptions: ({ screenProps }) => ({
		  title: 'SkateMap',
		  headerLeft: null
		}),
	},
	 MarkerShow: {
    screen: MarkerShow,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  EditSpot: {	
	  screen: EditSpot,
	  navigationOptions: ({ navigation, screenProps }) => ({
	    title: `${navigation.state.params.name}`,
	  }),
  },
	});

export const CreateMapStack = StackNavigator({
	CreateMap: {
		screen: CreateMap,
		navigationOptions: ({ screenProps }) => ({
		  title: 'Drag Marker to Spot',
		  headerLeft: null
		}),
	},
	CreateForm: {
		screen: CreateForm,
		navigationOptions: ({ screenProps }) => ({
      title: 'Spot Details',
    }),
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