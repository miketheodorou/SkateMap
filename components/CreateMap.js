import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  NavigatorIOS
} from 'react-native';

import MapView from 'react-native-maps';

export default class CreateMap extends Component<{}> {
	state = {
		coordinate: {
			latitude: 39.749632,
			longitude: -105.000363
		}
	}

	static navigationOptions = {
		tabBarLabel: 'CreateMap',
		tabBarIcon: ({tintColor}) => (
			<Image
				source={require('../images/create-icon.png')}
				style={{width: 22, height: 22, tintColor: 'white'}}>
			</Image>
		)
	}

	render() {
		return(
			<MapView
			style={styles.map}
				initialRegion={{
					latitude: 39.749632,
					longitude: -105.000363,
					latitudeDelta: 0.0222,
					longitudeDelta: 0.0201,
				}}>
			  <MapView.Marker draggable
			  	title={'Move Pin To Spot Location'}
			    coordinate={this.state.coordinate}
			    onDragEnd={(e) => this.setState({ coordinate: e.nativeEvent.coordinate })}
			  />
			</MapView>
		</NavigatorIOS>
		)
	}
}


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