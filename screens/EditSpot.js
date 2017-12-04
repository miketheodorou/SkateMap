import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import * as firebase from 'firebase';

export default class EditSpot extends Component {
	constructor(props){
	  super(props);
	  this.database = firebase.database();
	  // this.spotRef = this.database.ref('/spots');
	}

	state = {
		name: this.props.navigation.state.params.name,
		desc: this.props.navigation.state.params.desc,
		key: this.props.navigation.state.params.key,
		user: this.props.navigation.state.params.user,
		coordinate: this.props.navigation.state.params.coordinate,
	}

	onNameChange(event) {
		this.setState({
			name: event
		});
	}

	onDescChange(event) {
		this.setState({
			desc: event
		});
	}

	saveSpot = (key, name, desc, user, coordinate) => {
		this.database.ref('spots/' + key).set({
			key: key,
			name: name,
			desc: desc,
			user: user,
			coordinate: coordinate
		});
		this.props.navigation.navigate('Spots');
	};

	render() {

		const { name, desc, key, user, coordinate } = this.props.navigation.state.params;
		const { currentUser } = this.props.screenProps;


		return(
			<View style={styles.container}>
				<FormLabel>Name</FormLabel>
				<FormInput 
					onChangeText={event => this.onNameChange(event)}
					value={this.state.name} />
				<FormLabel>Name</FormLabel>
				<FormInput 
					onChangeText={event => this.onDescChange(event)}
					value={this.state.desc} />
					<TouchableHighlight
						style={styles.button}
						onPress={() => this.saveSpot(key, this.state.name, this.state.desc, this.state.user, this.state.coordinate)}>
						<Text style={styles.buttonText}>Save Changes</Text>
					</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	button: {
		marginTop: 30,
		marginLeft: 70,
		marginRight: 70,
		padding: 20,
		backgroundColor: "#7FDBFF",
		borderRadius: 10,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 30,
		textAlign: 'center',
	}
});