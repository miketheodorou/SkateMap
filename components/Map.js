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
		tabBarLabel: 'Map',
		tabBarIcon: ({tintColor}) => (
			<Image
				source={require('../images/map-icon.png')}
				style={{width: 22, height: 22, tintColor: 'white'}}>
			</Image>
		)
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
