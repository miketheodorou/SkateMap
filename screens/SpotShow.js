import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
} from 'react-native';

export default class SpotShow extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>Spot Show Page!</Text>
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