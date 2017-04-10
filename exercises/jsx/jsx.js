import React from 'react';
import { Text, View } from 'react-native';
import products from './products.json';

export default class List extends React.Component {

  render() {
    return (<View>
      {products.map( (product) =>
        <Text key={product.productId}>
          {product.name} {product.price}
        </Text>
      )}
    </View>);
  }

}
