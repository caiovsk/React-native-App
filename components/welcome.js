/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

    this.state={
      restaurantName:"",
      resError: '',
    }

    this.restaurants=[{
      value: 'Chargrill Charlies',
    }, {
      value: 'KFC',
    }, {
      value: 'Sushi Hub',
    }, {
      value: 'Boost Juice',
    }, {
      value: 'Oporto',
      }];
  }

  getValidationState() {
var errors = this.state.errors;
if (!$.isEmptyObject(errors))
{
  var resError = '';
  errors.forEach((error) => {
    console.log("error:", error.name);
    // Check each error to see which input it belongs to
    // NOTE: please also consider using error.name instead, if error.message is invalid, thanks!
    if(error.message.indexOf('restaurantName') != -1){
      resError = error.message;
    }
  });

  this.setState({
    firstResError: resError,
});
}
}

  render() {

    return (
      <View style={styles.container}>
      <Image source={require('./header.png')} style={styles.image}/>
        <View style={styles.viewRow1}>
                <Dropdown
                    containerStyle={styles.dropdown1}
                    data={this.restaurants}
                    label='Choose the place of business'
                    onChangeText={(chosenRS) => this.setState({ //after chosen, we make subjectCode equal to chosensc
                      restaurantName:chosenRS }
                      )}
                      />
        </View>
        <View style={styles.viewRow2}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}>
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }
  onPressEvent(){
    let temp = this.state.restaurantName;
    if(temp == ""){
      return "error";
    }else{
    Actions.menu({
      restaurant: this.state.restaurantName
    });
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4BDD2',
  },
  viewRow1:{
    flex:1,
  },
  viewRow2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown1: {
    marginTop: 100,
    justifyContent: 'center',
  },
  button:{
      backgroundColor:'lightgrey',
      height: 45,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      borderRadius:10,
      borderWidth: 1,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
  },
  image:{
    marginLeft: 40,
    marginTop: 60,
  }
});
