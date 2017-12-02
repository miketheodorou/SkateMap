import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import * as firebase from 'firebase';

import MapView from 'react-native-maps';

export default class Map extends Component <{}> {
	constructor(props){
	  super(props);
	  this.database = firebase.database();
	  this.markersRef = this.database.ref('/spots');
	}

	state = {
		markers : []
	}

	// Calls the grab spots function 
	componentWillMount() {
		this.fetchMarkers();
	}

	componentDidMount() {
		this.fetchMarkers();
	}

	fetchMarkers = () => {
	  this.markersRef.on('value', (snapshot) => {
	  console.log(snapshot.val());
	  let fetchedMarkers = [];
	  snapshot.forEach(childSnapshot => {
	      let item = childSnapshot.val(); 
	      item.key = childSnapshot.key;
	      fetchedMarkers.push(item);
	  });
	  console.log(fetchedMarkers);
	  this.setState({markers: fetchedMarkers})
	  });
	}

	// Fetches all spots and and fills markers
	// fetchMarkers = async () => {
	// 	const response = await fetch('https://skate-map-4d126.firebaseio.com/spots.json');
	// 	const json = await response.json();
	// 	// console.log(json[Object.keys(json)[0]]);
	// 	fetchedMarkers = [];
 //    for (let i = 0; i < Object.keys(json).length; i++) {
 //      fetchedMarkers.push(json[Object.keys(json)[i]])
 //    }
 //    // console.log(fetchedMarkers);
 //    this.setState({ markers: fetchedMarkers})
	// }

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
							coordinate={marker.coordinate}
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
