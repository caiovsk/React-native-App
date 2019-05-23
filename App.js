/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
View,
StyleSheet
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';


import Menu from './components/menu';
import Summary from './components/summary';
import Welcome from './components/welcome';

export default class App extends Component<Props> {
  //console.disableYellowBox = true;
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene initial key="welcome" component = {Welcome} title='Welcome' />
            <Scene key="menu" component = {Menu} title='Menu' />
            <Scene key="summary" component = {Summary} title='Summary' />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
