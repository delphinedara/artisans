/**
 * Notes
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './find-artisan.scss';

function FindArtisan({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>Body copy of find an artist content is at routes/find-artisan.js</p>
      </div>
    </div>
  );
}

FindArtisan.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(FindArtisan, s);
