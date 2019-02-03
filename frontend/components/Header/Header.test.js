import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('round', () => {
  let mockProps;
  let header;

  beforeEach(() => {
    mockProps = {};
    header = shallow(<Header {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(header).toMatchSnapshot();
  });
});
