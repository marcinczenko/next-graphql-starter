import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('round', () => {
  let mockProps;
  let layout;

  beforeEach(() => {
    mockProps = { children: [] };
    layout = shallow(<Layout {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(layout).toMatchSnapshot();
  });
});
