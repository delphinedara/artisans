/**
 * Notes
 */

import React from 'react';
import FindArtisan from './find-artisan';

export const path = '/find-artisan';
export const action = async (state) => {
  const title = 'Find an Artisan';
  state.context.onSetTitle(title);
  return <FindArtisan title={title} />;
};
