/**
 * Notes
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './review-artisan.scss';

function ReviewArtisan({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Body copy of review an artisan content is at routes/review-artisan.js</p>
      </div>
    </div>
  );
}

ReviewArtisan.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(ReviewArtisan, s);
