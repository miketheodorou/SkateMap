import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableHighlight,
	ScrollView
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import * as firebase from 'firebase';
import CheckBox from 'react-native-modest-checkbox';

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
		Handrails: this.props.navigation.state.params.Handrails,
		Banks: this.props.navigation.state.params.Banks,
		Flatledges: this.props.navigation.state.params.Flatledges,
		Gap: this.props.navigation.state.params.Gap,
		Quarterpipe: this.props.navigation.state.params.Quarterpipe,
		Wallride: this.props.navigation.state.params.Wallride,
		ManualPads: this.props.navigation.state.params.ManualPads,
		Spine: this.props.navigation.state.params.Spine,
		Halfpipe: this.props.navigation.state.params.Halfpipe,
		Kicker: this.props.navigation.state.params.Kicker,
		PoleJam: this.props.navigation.state.params.PoleJam,
		Stairset: this.props.navigation.state.params.Stairset,
		FlatRail: this.props.navigation.state.params.FlatRail,
		PicnicTable: this.props.navigation.state.params.PicnicTable,
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

	handleCheck(checked) {
		console.log(checked);
		console.log(checked.label);
		console.log(checked.checked);
		let feature = checked.label;
		let val = checked.checked;
		this.setState({
			[feature]: val
		});
	}

	saveSpot = (state) => {
		this.database.ref('spots/' + state.key).set({
			key: state.key,
			name: state.name,
			desc: state.desc,
			user: state.user,
			coordinate: state.coordinate,
			Handrails: state.Handrails,
			Banks: state.Banks,
			Flatledges: state.Flatledges,
			Gap: state.Gap,
			Quarterpipe: state.Quarterpipe,
			Wallride: state.Wallride,
			ManualPads: state.ManualPads,
			Spine: state.Spine,
			Halfpipe: state.Halfpipe,
			Kicker: state.Kicker,
			PoleJam: state.PoleJam,
			Stairset: state.Stairset,
			FlatRail: state.FlatRail,
			PicnicTable: state.PicnicTable,

		});
		this.props.navigation.navigate('Map');
	};

	render() {

		const { 
			name, desc, key, user, coordinate,
			Handrails, Banks, Flatledges, Gap, Quarterpipe,
			Wallride, ManualPads, Spine, Halfpipe, Kicker, PoleJam, 
			Stairset, FlatRail, PicnicTable  } = this.props.navigation.state.params;
		const { currentUser } = this.props.screenProps;


		return(
			<ScrollView>
				<View style={styles.mainContainer}>
					<View style={styles.formContainer}>
						<FormLabel>Name</FormLabel>
						<FormInput 
							onChangeText={event => this.onNameChange(event)}
							value={this.state.name} />
						<FormLabel>Name</FormLabel>
						<FormInput 
							onChangeText={event => this.onDescChange(event)}
							value={this.state.desc} />
					</View>
					<View style={styles.featuresContainer}>
						<View style={styles.featuresContent}>
							<View style={styles.featureColumn}>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Handrails"
										checked={this.state.Handrails}
										onChange={(checked) => this.handleCheck(checked)} />
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Banks"
										checked={this.state.Banks}
										onChange={(checked) => this.handleCheck(checked)} 
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Flatledges"
										checked={this.state.Flatledges}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Gap"
										checked={this.state.Gap}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Quarterpipe"
										checked={this.state.Quarterpipe}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Wallride"
										checked={this.state.Wallride}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="ManualPads"
										checked={this.state.ManualPads}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
							</View>
							<View style={styles.featureColumn}>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Spine"
										checked={this.state.Spine}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Halfpipe"
										checked={this.state.Halfpipe}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Kicker"
										checked={this.state.Kicker}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="PoleJam"
										checked={this.state.PoleJam}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="Stairset"
										checked={this.state.Stairset}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="FlatRail"
										checked={this.state.FlatRail}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
								<View style={styles.checkBoxContainer}>
									<CheckBox 
										label="PicnicTable"
										checked={this.state.PicnicTable}
										onChange={(checked) => this.handleCheck(checked)}
										/>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableHighlight
							style={styles.button}
							onPress={() => this.saveSpot(this.state)}>
							<Text style={styles.buttonText}>Save Changes</Text>
						</TouchableHighlight>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
	},
	formContainer: {
		width: '100%',
	},
	featuresContainer: {
		width: '100%',
		marginTop: 20,
		paddingTop: 30,
		paddingRight: 30,
		paddingBottom: 30,
		paddingLeft: 40, 
	},
	featuresContent: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center'
	},
	featureColumn: {
	},
	checkBoxContainer: {
		// margin: 5,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	button: {
		marginTop: 5,
		padding: 10,
		width: '40%',
		backgroundColor: "#7FDBFF",
		borderRadius: 5,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 20,
		textAlign: 'center',
	},
});