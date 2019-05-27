import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {
      finalValue: params.summaryValue,
      itemFood: params.itemName,
      itemDrink: params.drinkName,
      placeName: params.thisPlace,
      item1: params.items1,
      item2: params.items2
    };
  }
  render() {
    return(
      <View style={styles.container}>
      <Text style={styles.text}> Thank You For Your Order @ {this.state.placeName} </Text>
      <Text style={styles.text}> Order Summary: {this.state.itemFood} {this.state.item1} </Text>
      <Text style={styles.text}> Quantity: {this.state.item1} </Text>
      <Text style={styles.text}> {this.state.itemDrink}</Text>
      <Text style={styles.text}> Quantity: {this.state.item2} </Text>
      <Text style={styles.text}> Total Cost: ${this.state.finalValue} </Text>
      <Text style={styles.group}> App developed by: Amy (45375038), Andy (45407142), Caio (45370990) </Text>

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4BDD2'
  },
  group: {
    flexDirection: 'row',
    color: 'red'
  }
});
