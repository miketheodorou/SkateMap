import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import MapView from 'react-native-maps';

export default class CreateMap extends Component<{}> {
	constructor(props) {
	  super(props);
	  this.state = {
	  	/* 
	  	// Sets initial map region
	  	// TODO: Set the initial region by geolocation
	  	*/
	    region: {
		    latitude: 39.749632,
				longitude: -105.000363,
				latitudeDelta: 0.0222,
				longitudeDelta: 0.0201,
	 	  },
	 	  /*
	 	  // Sets initial marker location
	 	  // TODO: Set the initial region by geolocation// 
	 	  */
		  marker: {
		   coordinate:{
		    latitude: 39.749632,
		    longitude: -105.000363,
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

	render() {
		return(
			<MapView
			style={styles.map}
				initialRegion={this.state.region}>
			  <MapView.Marker draggable
			  	title={'Move Pin To Spot Location'}
			    coordinate={this.state.marker.coordinate}
			    onDragEnd={this._onMarkerDrag}>
			    <MapView.Callout>
			        <View style={styles.callout}>
			          <Button title='Create Spot' onPress={this._handleCreate} />
			        </View>
			      </MapView.Callout>
			  </MapView.Marker>
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