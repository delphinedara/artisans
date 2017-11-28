/**
 * Notes
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';

function Login({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
      <h1 className={s.title}>Login Content</h1>
      <p>Body copy login content is at routes/Login.js</p>
      </div>
    </div>
  );
}

Login.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Login, s);
