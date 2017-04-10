import React from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';
import products from './products.json';

export default class ProductList extends React.Component {

  render() {
    return (
      <View style={style.wrapper}>
        <View style={style.list}>
          {products.map( (product) =>
            <ProductItem
              key={product.productId}
              {...product} />)}
        </View>
      </View>);
  }
}

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 50,
    flex: 1,
  },
  list: {
    backgroundColor: '#DDD',
    flex: 1,
    borderColor: '#CCC',
    borderWidth: 1,
  }
});
