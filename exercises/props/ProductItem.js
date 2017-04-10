import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ProductItem extends React.Component {

  render() {
    return <View style={style.item}>
       <Text>{this.props.product.name}</Text>
       <Text>{this.props.product.price}</Text>
    </View>;
  }
}

const style = StyleSheet.create({
  item: {
    flexDirection: 'row'
  }
});
