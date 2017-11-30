import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component <{}> {
	static navigationOptions = {
		tabBarLabel: 'Map',
		tabBarIcon: ({tintColor}) => (
			<Image
				source={require('../images/map-icon.png')}
				style={{width: 22, height: 22, tintColor: 'white'}}>
			</Image>
		)
	}
	render() {
		return(
			<View style={styles.container}>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 39.749632,
						longitude: -105.000363,
						latitudeDelta: 0.0222,
						longitudeDelta: 0.0201,
					}}>
					<MapView.Marker
						coordinate={{ longitude: -105.000363, latitude: 39.749632 }}
						title={'Yay Hooray'}
						description={'Sweet Skate Spot'} />
				</MapView>
			</View>
		)
	}
}

// export default class Map extends Component<{}> {
	// static navigationOptions = {
	// 	tabBarLabel: 'Map',
	// 	tabBarIcon: ({tintColor}) => (
	// 		<Image
	// 			source={require('../images/map-icon.png')}
	// 			style={{width: 22, height: 22, tintColor: 'white'}}>
	// 		</Image>
	// 	)
	// }
// 	render() {
// 		return(
// 			<View style={styles.container}>
// 				<Text style={{fontSize: 30}}>This is the Map page!</Text>
// 			</View>
// 		)
// 	}
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	map: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	}
})
