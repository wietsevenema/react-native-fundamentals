import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Price from './Price';

export default class ProductItem extends React.Component {

  handleClick = (e) => {
    this.props.handleBuy(this.props.productId);
  }

  render() {
    return <View style={style.item}>
       <Text>{this.props.name}</Text>
       <Price>{this.props.price}</Price>
       <Button title="Buy" onPress={this.handleClick}></Button>
    </View>;
  }
}

const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
