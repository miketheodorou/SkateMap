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

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
    }

    onEmailChange(event) {
        this.setState({
            email: event
        });
        console.log(this.state);
    }

    onPasswordChange(event) {
        this.setState({
            password: event
        });
        console.log(this.state);
    }

    // Handles signup functionality
    handleSignup = () => {
        console.log(this.state);
        const email = this.state.email;
        const pass = this.state.password;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    };

    render() {
        return(
            <View style={styles.container}>
                <FormLabel>Email</FormLabel>
                <FormInput 
                    onChangeText={event => this.onEmailChange(event)}/>
                <FormLabel>Password</FormLabel>
                <FormInput 
                onChangeText={event => this.onPasswordChange(event)} />
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.handleLogin(this.state.email, this.state.password)}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.handleSignup}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
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