import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('round', () => {
  let mockProps;
  let home;

  beforeEach(() => {
    mockProps = {};
    home = shallow(<Home {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(home).toMatchSnapshot();
  });
});
