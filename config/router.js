import React from 'react';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import { Image, Button } from 'react-native';
import { Icon } from 'react-native-elements';

import Spots from '../screens/Spots';
import Map from '../screens/Map';
import CreateMap from '../screens/CreateMap';
import SpotShowSpot from '../screens/SpotShowSpot';
import SpotShowMap from '../screens/SpotShowMap';
import CreateForm from '../screens/CreateForm';
import MarkerShow from '../screens/MarkerShow';
import EditSpotShow from '../screens/EditSpotShow';
import EditSpotMap from '../screens/EditSpotMap';

export const SpotStack = StackNavigator({
	Spots: {
		screen: Spots,
		navigationOptions: ({ screenProps }) => ({
		  title: 'Spots',
		  headerLeft: null
		}),
	},
	SpotShowSpot: {
    screen: SpotShowSpot,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  EditSpotShow: {
    screen: EditSpotShow,
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
	 SpotShowMap: {
    screen: SpotShowMap,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  EditSpotMap: {	
	  screen: EditSpotMap,
	  navigationOptions: ({ navigation, screenProps }) => ({
	    title: `${navigation.state.params.name}`,
	  }),
  },
	});

export const CreateMapStack = StackNavigator({
	CreateMap: {
		screen: CreateMap,
		navigationOptions: ({ screenProps }) => ({
		  title: 'Tap Marker and Drag to Spot',
			headerLeft: null,
		}),
		tintColor: 'blue',
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