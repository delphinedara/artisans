/**
 * Notes
 */

import React from 'react';
import ReviewArtisan from './review-artisan';

export const path = '/review-artisan';
export const action = async (state) => {
  const title = 'Review an Artisan';
  state.context.onSetTitle(title);
  return <ReviewArtisan title={title} />;
};
