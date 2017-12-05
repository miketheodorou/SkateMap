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
    let fetchedSpots = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val(); 
        item.key = childSnapshot.key;
        fetchedSpots.push(item);
    });
    this.setState({spots: fetchedSpots})
    });
  }

  // Navigates to the Spot Show page for the Specific Spot and passes spot params
  onLearnMore = (spot) => {
    this.props.navigation.navigate('SpotShowSpot', {...spot});
  }
  
  render() {
    return(
      <ScrollView>
        <List>
          {this.state.spots.reverse().map((spot, i) => (
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
