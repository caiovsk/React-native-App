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
    let params = this.props.navigation.state.params;
    this.state={
      restName: params.restaurant,
      food:'',
      drink: '',
      amount1Value: 0,
      amount2Value: 0,
      foodError: '',
      drinkError:'',
      amount1Error:'',
      amount2Error:''
    };

    this.foodItem=[{
      value: 'Chicken Burger-$10',
    }, {
      value: 'Beef Burger-$11',
    }, {
      value: 'Salmon Roll Box-$12',
    }, {
      value: 'Portuguese Chicken-$16',
    }, {
      value: 'Chicken Wings-$13',
      }];

    this.amount1=[{
      value: 1,
    }, {
      value: 2,
    }, {
      value: 3,
    }, {
      value: 4,
    }, {
      value: 5,
      }];

    this.amount2=[{
      value: 1,
    }, {
      value: 2,
    }, {
      value: 3,
    }, {
      value: 4,
    }, {
      value: 5,
      }];

    this.drinks=[{
      value: 'Soft Drink Jug-$12',
    }, {
      value: 'Energiser Blend-$10',
    }, {
      value: 'Lemon Crush-$11',
    }, {
      value: 'Wild Berry Blend-$11',
    }, {
      value: 'Grape Escape-$13',
      }];
  }

  getValidationState() {
var errors = this.state.errors;
if (!$.isEmptyObject(errors))
{
  var foodError = '';
  var drinkError = '';
  var amount1Error = '';
  var amount2Error = '';
  errors.forEach((error) => {
    console.log("error:", error.name);
    // Check each error to see which input it belongs to
    // NOTE: please also consider using error.name instead, if error.message is invalid, thanks!
    if(error.message.indexOf('food') != -1){
      foodError = error.message;
    }
    if(error.message.indexOf('drink') != -1){
      drinkError = error.message;
    }
    if(error.message.indexOf('amount1Value') != -1){
      amount1Error = error.message;
    }
    if(error.message.indexOf('amount2Value') != -1){
      amount2Error = error.message;
    }
  });

  this.setState({
    firstFoodError: foodError,
    firstDrinkError: drinkError,
    firstAmount1Error: amount1Error,
    firstAmount2Error: amount2Error,
});
}
}

  render() {

    return (
      <View style={styles.container}>
      <Text style={styles.rest}> Menu: {this.state.restName}</Text>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      data={this.foodItem}
                      label='Food Item'
                      onChangeText={(chosenFI) => this.setState({ //after chosen, we make subjectCode equal to chosensc
                        food:chosenFI }
                        )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      data={this.amount1}
                      label='Choose Food quantity'
                      onChangeText={(chosenAV1) => this.setState({ //after chosen, we make subjectCode equal to chosensc
                        amount1Value:chosenAV1 }
                        )}
                        />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      data={this.drinks}
                      label='Drinks'
                      onChangeText={(chosenDK) => this.setState({ //after chosen, we make subjectCode equal to chosensc
                        drink:chosenDK }
                        )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      data={this.amount2}
                      label='Choose Drink quantity'
                      onChangeText={(chosenAV2) => this.setState({ //after chosen, we make subjectCode equal to chosensc
                        amount2Value:chosenAV2 }
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
    let foodTemp = this.state.food;
    let drinkTemp = this.state.drink;
    let amount1Temp = this.state.amount1Value;
    let amount2Temp = this.state.amount2Value;
    let totalFood=parseInt(foodTemp.substring(foodTemp.length-2,foodTemp.length));
    let totalDrink=parseInt(drinkTemp.substring(drinkTemp.length-2,drinkTemp.length));
    let total=(totalFood * amount1Temp) + (totalDrink * amount2Temp);
    let totalItems=(amount1Temp) + (amount2Temp);
    if(foodTemp == '' || drinkTemp == '' && amount1Temp == '' || amount2Temp == ''){
      return "error";
    }else{
      Actions.summary({
        summaryValue: total,
        itemName: this.state.food,
        drinkName: this.state.drink,
        thisPlace: this.state.restName,
        items1: this.state.amount1Value,
        items2: this.state.amount2Value
        });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4BDD2',
  },
  viewRow2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  viewRow3:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown1: {
    marginTop: 50,
  },
  dropdown2:{
    flex: 1,
    marginTop: 70,
  },
  button:{
      backgroundColor:'lightgrey',
      height: 45,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius:10,
      borderWidth: 1,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
  },
  rest:{
    flex: 0.5,
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',
    marginTop: 50,
  }
});
