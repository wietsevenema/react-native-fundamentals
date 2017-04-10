/* @flow */
import React from 'react';
import { Classic, Functional, Classy } from '../Syntax';
import renderer from 'react-test-renderer';

describe('Syntax', () => {
  it('with classic', () => {
    const tree = renderer.create(
      <Classic />
    );
    expect(tree).toMatchSnapshot();
  });

  it('with classy', () => {
    const tree = renderer.create(
      <Functional />
    );
    expect(tree).toMatchSnapshot();
  });

  it('with classy', () => {
    const tree = renderer.create(
      <Classy />
    );
    expect(tree).toMatchSnapshot();
  });

});
