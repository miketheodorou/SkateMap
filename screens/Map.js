import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Dimensions
} from 'react-native';
import * as firebase from 'firebase';

import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component <{}> {
	constructor(props){
	  super(props);
	  this.database = firebase.database();
	  this.markersRef = this.database.ref('/spots');
	}

	state = {
		initialPosition: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 0,
			longitudeDelta: 0,
		},
		markerPosition: {
			latitude: 0,
			longitude: 0,
		},
		markers : []
	}

	// Calls the grab spots function 
	// componentWillMount() {
	// 	this.fetchMarkers();
	// }

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = parseFloat(position.coords.latitude);
			let long = parseFloat(position.coords.longitude);

			let initialRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
			console.log(initialRegion);
			this.setState({initialPosition: initialRegion});
			this.setState({markerPosition: initialRegion})
		},
		(error) => alert(JSON.stringify(error)),
		{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

		this.watchID = navigator.geolocation.watchPosition((position) => {
			let lat = parseFloat(position.coords.latitude);
			let long = parseFloat(position.coords.longitude);

			let lastRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}

			this.setState({initialPosition: lastRegion});
			this.setState({markerPosition: lastRegion});
		})
		this.fetchMarkers();
	}

	componentWillUnmount() {
		navigator.gelocation.clearWatch(this.watchID);
	}

	fetchMarkers = () => {
	  this.markersRef.on('value', (snapshot) => {
	  let fetchedMarkers = [];
	  snapshot.forEach(childSnapshot => {
	      let item = childSnapshot.val(); 
	      item.key = childSnapshot.key;
	      fetchedMarkers.push(item);
	  });
	  this.setState({markers: fetchedMarkers})
	  });
	}

	onLearnMore = (marker) => {
		this.props.navigation.navigate('SpotShow', {...marker});
	}

	WatchID: ?number = null


	render() {
		return(
				<MapView
					style={styles.map}
					region={this.state.initialPosition}
					>
						<MapView.Marker
							coordinate={this.state.markerPosition}
							image={require('../images/skater.png')}>
						 </MapView.Marker>
					{this.state.markers.map((marker, i) => (
						<MapView.Marker
							key={i}
							coordinate={marker.coordinate}
							title={marker.name}
							description={marker.desc}> 
							<MapView.Callout>
							    <View style={styles.callout}>
							    	<Text>{marker.name}</Text>
							      <Button title='View Spot' onPress={() => this.onLearnMore(marker)} />
							    </View>
							  </MapView.Callout>
							</MapView.Marker>
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
	},
	radius: {
		backgroundColor: 'green',
		borderRadius: 10,
	},
	userMarker: {
		backgroundColor: 'blue',
		borderRadius: 10,
		borderColor: 'white',
	}
})
