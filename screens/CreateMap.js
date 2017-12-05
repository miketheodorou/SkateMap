import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
	Dimensions,
	TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class CreateMap extends Component<{}> {
	constructor(props) {
	  super(props);
	  this.state = {
	  	initialPosition: {
				latitude: 37.0902,
				longitude: -95.7129,
				latitudeDelta: 55.0122,
				longitudeDelta: 55.0101,
		},
	 	  /*
	 	  // Sets initial marker location
	 	  // TODO: Set the initial region by geolocation// 
	 	  */
		  marker: {
		   coordinate:{
		    latitude: 0,
				longitude: 0,
		   }
		  }
		}
	}

	// updates the marker state when dragged
	_onMarkerDrag = (e) => {
		this.setState({
			marker: { coordinate: e.nativeEvent.coordinate }
		});
	} 

	// sends marker coordinates through to next screen
	_handleCreate = () => {
		// console.log(this.state.marker.coordinate);
		let formCoordinate = this.state.marker.coordinate; 
		this.props.navigation.navigate('CreateForm', {...formCoordinate});
	}

	componentWillMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = parseFloat(position.coords.latitude);
			let long = parseFloat(position.coords.longitude);

			let initialRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: 0.0122,
				longitudeDelta: 0.0101,
			}
			console.log(initialRegion);
			this.setState({initialPosition: initialRegion})
			this.setState({
				marker: {coordinate: initialRegion}
			});
		});
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = parseFloat(position.coords.latitude);
			let long = parseFloat(position.coords.longitude);

			let initialRegion = {
				latitude: lat,
				longitude: long,
				latitudeDelta: 0.0122,
				longitudeDelta: 0.0101,
			}
			console.log(initialRegion);
			this.setState({initialPosition: initialRegion})
			this.setState({
				marker: {coordinate: initialRegion}
			});
		});
	}

	componentWillUnmount() {
		navigator.gelocation.clearWatch(this.watchID);
	}


	WatchID: ?number = null

	render() {
		return(
			<MapView
			style={styles.map}
			initialRegion={this.state.initialPosition}>
			  <MapView.Marker draggable
			  	title={'Move Pin To Spot Location'}
			    coordinate={this.state.marker.coordinate}
			    onDragEnd={this._onMarkerDrag}>
			    <MapView.Callout>
			        <View style={styles.callout}>
								<Text style={styles.spotTitle}>Press and Hold to Drag</Text>
								<TouchableHighlight 
										style={styles.button} 
										onPress={this._handleCreate}>
										<Text style={styles.buttonText}>Create Spot</Text>
									</TouchableHighlight>
			        </View>
			      </MapView.Callout>
			  </MapView.Marker>
			</MapView>
		)
	}
}


const styles = StyleSheet.create({
	map: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	spotTitle: {
		marginBottom: 3,
		textAlign: 'center',
	},
	button: {
		backgroundColor: "#7FDBFF",
		padding: 5
	},
	buttonText: {
		color: "white",
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '600',
	},
})