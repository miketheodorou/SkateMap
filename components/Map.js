import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

export default class Map extends Component<{}> {
	static navigationOptions = {
		tabBarLabel: 'Map'
	}
	render() {
		return(
			<View style={styles.container}>
				<Text style={{fontSize: 30}}>This is the Map page!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
})
