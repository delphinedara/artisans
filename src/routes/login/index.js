/**
 * Notes
 */

import React from 'react';
import Login from './Login';

export const path = '/login';
export const action = async (state) => {
  const title = 'Log In';
  state.context.onSetTitle(title);
  return <Login title={title} />;
};
