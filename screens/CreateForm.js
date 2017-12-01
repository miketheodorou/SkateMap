import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
} from 'react-native';

export default class CreateForm extends Component {

	render() {
		const { latitude, longitude } = this.props.navigation.state.params;

		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>{latitude}</Text>
				<Text style={styles.welcome}>{longitude}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 35,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	},
});