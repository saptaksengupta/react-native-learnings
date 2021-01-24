/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { UserList } from '../features/user-list';

it('renders user list correctly', () => {
  const tree = renderer.create(<UserList />);
  expect(tree).toMatchSnapshot();
});
