/**
 * Notes
 */

import React from 'react';
import Register from './Register';

export const path = '/register';
export const action = async (state) => {
  const title = 'New User Registration';
  state.context.onSetTitle(title);
  return <Register title={title} />;
};
