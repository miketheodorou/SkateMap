import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyDTpyJ6MP5aag_or6O7Fbk7hPyQMKVJ_hU",
//   authDomain: "skate-map-4d126.firebaseapp.com",
//   databaseURL: "https://skate-map-4d126.firebaseio.com",
//   storageBucket: "skate-map-4d126.appspot.com",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class Spots extends Component<{}> {
  constructor(props){
    super(props);
    this.database = firebase.database();
    this.spotsRef = this.database.ref('/spots');
  }

	 state = {
    spots: [],
  }

  // Calls the grab spots function
  componentWillMount() {
    this.getSpots();
  }

  componentDidMount() {
    this.getSpots();
  }

  getSpots = () => {
    this.spotsRef.on('value', (snapshot) => {
    console.log(snapshot.val());
    let fetchedSpots = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val(); 
        item.key = childSnapshot.key;
        fetchedSpots.push(item);
    });
    console.log(fetchedSpots);
    this.setState({spots: fetchedSpots})
    });
  }

  // Grabs spot data from /spots endpoint and pushes fills 'spots' array in state
  // fetchSpots = async () => {
  //   const response = await fetch('https://skate-map-4d126.firebaseio.com/spots.json');
  //   const json = await response.json();
  //   console.log(json);
  //   fetchedSpots = [];
  //   for (let i = 0; i < Object.keys(json).length; i++) {
  //     fetchedSpots.push(json[Object.keys(json)[i]])
  //   }
  //   console.log(fetchedSpots);
  //   this.setState({spots: fetchedSpots})
  // }

  // Navigates to the Spot Show page for the Specific Spot and passes spot params
  onLearnMore = (spot) => {
    this.props.navigation.navigate('SpotShow', {...spot});
  }
  
  render() {
    return(
      <ScrollView>
        <List>
          {this.state.spots.map((spot, i) => (
            <ListItem 
              key={i}
              title={spot.name}
              subtitle={spot.desc}
              onPress={() => this.onLearnMore(spot)}
            />
          ))}
        </List>
      </ScrollView>
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
