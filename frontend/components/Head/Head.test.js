import React from 'react';
import { shallow } from 'enzyme';
import Head from './Head';

describe('round', () => {
  let mockProps;
  let head;

  beforeEach(() => {
    mockProps = {};
    head = shallow(<Head {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(head).toMatchSnapshot();
  });
});
