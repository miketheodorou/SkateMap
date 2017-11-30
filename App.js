import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';

export default class App extends Component<{}> {

  state = {
    data: []
  }

  componentWillMount() {
    this.fetchData();
  }

  // fetchData = async () => {
  //   const response = await fetch('https://skate-map-4d126.firebaseio.com/.json');
  //   const json = await response.json();
  //   console.log(json[Object.keys(json)[0]]);
  //   const names = json[Object.keys(json)[0]]
  //   this.setState({data: names})
  // }

  fetchData = async () => {
    const response = await fetch('https://super-crud.herokuapp.com/books');
    const json = await response.json();
    console.log(json);
    this.setState({data: json.books})
  }

  // _executeIndex = () => {
  //   fetch('https://skate-map-4d126.firebaseio.com/.json')
  //     .then()
  // };


  postStuff = () => {
    fetch('https://skate-map-4d126.firebaseio.com/stuff.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstThing: 'Stuff',
        secondThing: 'Things',
      })
    })
  }

  _onSearchPressed = () => {
    this.postStuff();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
  
        <Button
          onPress={this._onSearchPressed}
          color='#48BBEC'
          title='Go'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
