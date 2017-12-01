import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
} from 'react-native';

export default class Spots extends Component<{}> {

	 state = {
    data: []
  }

  // Calls the grab spots function on Init
  componentWillMount() {
    this.fetchSpots();
  }

  // Grabs spot data from /spots endpoint
  fetchSpots = async () => {
    const response = await fetch('https://skate-map-4d126.firebaseio.com/stuff.json');
    const json = await response.json();
    console.log(json[Object.keys(json)[0]]);
    things = [];
    for (let i = 0; i < Object.keys(json).length; i++) {
      things.push(json[Object.keys(json)[i]])
    }
    console.log(things);
    this.setState({data: things})
  }

  _onPress = () => {
  	console.log('pressed it!');
  }
  
	render() {
		return(
			<View style={styles.container}>
        <Text style={styles.welcome}>
          All Spots
        </Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => 
	          <Text>
	            {item.secondStuff}
	          </Text>}
        />
        <Button
          onPress={this._onPress}
          color='#48BBEC'
          title='Create'
        />
      </View>
		)
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
})
