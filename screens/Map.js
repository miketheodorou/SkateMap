import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component <{}> {

	state = {
		markers : []
	}

	componentDidMount() {
		this.fetchMarkers();
	}

	fetchMarkers = async () => {
		const response = await fetch('https://skate-map-4d126.firebaseio.com/spots.json');
		const json = await response.json();
		console.log(json[Object.keys(json)[0]]);
		fetchedMarkers = [];
    for (let i = 0; i < Object.keys(json).length; i++) {
      fetchedMarkers.push(json[Object.keys(json)[i]])
    }
    console.log(fetchedMarkers);
    this.setState({ markers: fetchedMarkers})
	}

	render() {
		return(
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 39.749632,
						longitude: -105.000363,
						latitudeDelta: 0.1222,
						longitudeDelta: 0.1201,
					}}>
					{this.state.markers.map((marker, i) => (
						<MapView.Marker
							key={i}
							coordinate={marker.coordinates}
							title={marker.name}
							description={marker.desc} />
						))}
				</MapView>
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
