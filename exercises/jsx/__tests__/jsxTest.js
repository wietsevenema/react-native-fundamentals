/* @flow */
import React from 'react';
import List from '../jsx';
import renderer from 'react-test-renderer';

describe('List', () => {
  it('renders ok', () => {
    const tree = renderer.create(
      <List />
    );
    expect(tree).toMatchSnapshot();
  });

});
