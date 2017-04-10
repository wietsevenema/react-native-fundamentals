import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Price extends React.Component {

  render() {
    return <Text>€ {this.props.children}</Text>
  }
}
