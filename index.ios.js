/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import ProductList from './exercises/props/ProductList';


export default class sample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProductList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC',
  },
});

AppRegistry.registerComponent('sample', () => sample);
